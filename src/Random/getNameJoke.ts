import axios from "axios"
import userAgents from "../../tools/user-agents.json"

interface getNameJoke {
  embed: {
  color: string,
  description: string
  }
}

const getNameJoke = async (firstname: string, lastname: string): Promise<getNameJoke> => {
  let { data } = await axios(`http://api.icndb.com/jokes/random?firstName=${firstname}&lastName=${lastname}`, {
    headers: {
      "User-Agent": userAgents[Math.floor(Math.random() * userAgents.length)]
    }
  })

  let content: getNameJoke = {
    embed: {
      color: "RANDOM",
      description: data.value.joke
    }
  }

  return content;
}

export { getNameJoke };