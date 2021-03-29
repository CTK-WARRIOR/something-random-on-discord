import axios from "axios"
import userAgents from "../../tools/user-agents.json"

interface getFact {
  embed: {
    color: string,
    description: string
  }
}

const getFact = async (): Promise<getFact> => {
   const { data } = await axios("https://useless-facts.sameerkumar.website/api", {
    headers: {
      "User-Agent": userAgents[Math.floor(Math.random() * userAgents.length)]
    }
  });

  let content: getFact = {
    embed: {
      color: "RANDOM",
      description: data.data
    }
  }

  return content;

}

export { getFact };