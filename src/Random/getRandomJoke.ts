import axios from "axios"
import userAgents from "../../tools/user-agents.json"

interface getRandomJoke {
  embed: {
  color: string,
  title: string,
  description: string
  }
}

const getRandomJoke = async (): Promise<getRandomJoke> => {
   let { data } = await axios(`https://official-joke-api.appspot.com/random_joke`, {
    headers: {
      "User-Agent": userAgents[Math.floor(Math.random() * userAgents.length)]
    }
  })

  let content: getRandomJoke = {
    embed: {
      color: "RANDOM",
      title: data.setup,
      description: data.punchline
    }
  }

  return content;
}

export { getRandomJoke };

