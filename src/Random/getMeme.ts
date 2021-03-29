import axios from "axios"
const userAgents = require("../../tools/user-agents.json")

interface memeInterface {
  embed: {
  color: string,
  title: string,
  image: object
  }
}

const getMeme = async (): Promise<memeInterface> => {
  const { data } = await axios("https://apis.duncte123.me/meme", {
    headers: {
      "User-Agent": userAgents[Math.floor(Math.random() * userAgents.length)]
    }
  });

  let content: memeInterface = {
    embed: {
    color: "RANDOM",
    title: data.data.title,
    image: { url: data.data.image }
    }
  }

  return content;
}


export { getMeme };