const axios = require("axios");
const userAgents = require("../../tools/user-agents.json")

async function getMeme() {

  let json = await axios("https://apis.duncte123.me/meme", {
    headers: {
      "User-Agent": userAgents[Math.floor(Math.random() * userAgents.length)]
    }
  });

  json = json.data;

  if (!json.success) throw "Error 01: Unable to access the json content of API"


  let content = {
    embed: {
      color: "RANDOM",
      title: json.data.title,
      image: { url: json.data.image }
    }
  };

  return content;
}


module.exports = getMeme;