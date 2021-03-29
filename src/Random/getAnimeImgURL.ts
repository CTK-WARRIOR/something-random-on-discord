import axios from "axios"
import userAgents from "../../tools/user-agents.json"

type name =  "pat" | "kiss" | "hug" | "waifu" | "cry" | "slag" | "smug" | "punch";

const getAnimeImgURL = async (name: name): Promise<object> => {

 const { data } = await axios("https://neko-love.xyz/api/v1/" + name, {
    headers: {
      "User-Agent": userAgents[Math.floor(Math.random() * userAgents.length)]
    }
  });

 return data ? { image: data.url } : {}
}

export { getAnimeImgURL };