import axios from "axios"
import userAgents from "../../tools/user-agents.json"

interface getNeko {
  embed: {
    color: string,
    title: string,
    image: { url: string }
  }
}

const getNeko = async (): Promise<getNeko> => {
  let { data } = await axios(`https://neko-love.xyz/api/v1/neko`, {
    headers: {
      "User-Agent": userAgents[Math.floor(Math.random() * userAgents.length)]
    }
  })

  let content: getNeko = {
    embed: {
      color: "#FFC0CB",
      title: "NEKO",
      image: { url: data.url }
    }
  }

  return content;

}

export { getNeko };
