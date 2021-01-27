const fetch = require("isomorphic-fetch");
const { shuffle } = require('lodash')

const getTweets = async q => {
  const token =
    process.env.TWITTER_BEARER_TOKEN;

  const endpointUrl = new URL("https://api.twitter.com/1.1/search/tweets.json");

  // Edit query parameters below
  const params = {
    q,
    count: 100,
    result_type: "popular",
    tweet_mode: "extended"
  };

  // Append query params to url
  Object.keys(params).forEach(key =>
    endpointUrl.searchParams.append(key, params[key])
  );

  // Fetch options
  const options = {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`
    }
  };

  // fetch and return data
  const response = await fetch(endpointUrl, options);
  return response.json();
};

const generateRandomNumbers = (limit, upperBound) => {
  let arr = [];
  while (arr.length < limit) {
    let r = Math.floor(Math.random() * upperBound) + 1;
    if (arr.indexOf(r) === -1) arr.push(r);
  }
  return arr;
};

const generateQuizRound = (tweets, limit) => {
  const obj = {
    tweet: "",
    users: []
  };

  const randomIndexes = generateRandomNumbers(limit, tweets.length - 1);
  randomIndexes.map((generatedIndex, index) => {
    if (index === 0) {
      const tweet = tweets[generatedIndex];
      obj.tweet = tweet.full_text;
      obj.users.push({
        id: tweet.user.id,
        name: tweet.user.name,
        handle: tweet.user.screen_name,
        answer: true
      });
      return;
    }
    const tweet = tweets[generatedIndex];
    obj.users.push({
      id: tweet.user.id,
      name: tweet.user.name,
      handle: tweet.user.screen_name,
      answer: false
    });
  });
  obj.users = shuffle(obj.users)
  return obj;
};

const newQuizRound = async (topic, options) => {
  const { statuses: tweets } = await getTweets(topic);
  return generateQuizRound(tweets, options);
};

module.exports = { newQuizRound };