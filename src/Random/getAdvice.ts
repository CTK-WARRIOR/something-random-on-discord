import axios from "axios"
import userAgents from "../../tools/user-agents.json"

interface getAdvice {
  embed: {
    color: string,
    description: string
  }
}


const getAdvice = async (): Promise<getAdvice> => {
   const { data } = await axios("https://api.adviceslip.com/advice", {
    headers: {
      "User-Agent": userAgents[Math.floor(Math.random() * userAgents.length)]
    }
  });


  let content: getAdvice = {
    embed: {
      color: "RANDOM",
      description: data.slip.advice
    }
  }

  return content;

}

export { getAdvice };