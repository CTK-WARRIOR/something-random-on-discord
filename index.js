module.exports = {
  Random: {
    getMeme: require("./src/Random/getMeme.js"),
    getJoke: require("./src/Random/getJoke.js"),
    getNeko: require("./src/Random/getNeko.js"),
    getAdvice: require("./src/Random/getAdvice.js"),
    getFact: require("./src/Random/getFact.js"),
    getAnimeImgURL: require("./src/Random/getAnimeImgURL.js")
  },
  ServerAssistant: {
    isHoisted: require("./src/ServerAssistant/isHoisted.js"),
    isURL: require("./src/ServerAssistant/isURL.js")
  }
}
