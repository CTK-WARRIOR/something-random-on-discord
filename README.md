### SOMETHING RANDOM


## NOTICE
You can not use v2.0.0 because i made a big mistake, now i will continue with version v3.0.0

___

Below are the things that this package offers you.

  - GET RANDOM ADVICE
  - GET RANDOM NEKO IMAGE
  - GET RANDOM ANIME IMAGE(BASED ON ACTION)
  - GET RANDOM MEME
  - GET RANDOM JOKES
  - GET JOKE BASED ON NAME
  - GET RANDOM FACT
  
  
  
# SETUP
```js
const discord = require("discord.js")
const client = new discord.Client()
const random = require("something-random-on-discord").Random


client.on("ready", () => {
  console.log("Ready to go")
})

client.on("message", async message => {
  if(message.content === "!meme") {
    let data = await random.getMeme()
    message.channel.send(data)
  }
})


client.login("TOKEN")

```
![](https://cdn.discordapp.com/attachments/636154061724450826/735083464994455593/unknown.png)


## DOCUMENTATION

**getMeme()**: Provieds You the JSON embed with meme image and title.
```js
  let data = await random.getMeme()
    message.channel.send(data)
```

**getAdvice()**: Provieds You a random advice.
```js
  let data = await random.getAdvice()
    message.channel.send(data)
```

**getNeko()**: Provieds You a random neko image.
```js
 let data = await random.getNeko()
    message.channel.send(data)
```

**getRandomJoke()**: Provieds You a Random Funny Joke.
```js
 let data = await random.getRandomJoke()
    message.channel.send(data)
```

**getNameJoke()**: Provieds You a Random Funny Joke related to your name.
```js
 let data = await random.getNameJoke("ctk", "warrior")
    message.channel.send(data)
```

**getAnimeImgURL(type)**: Provied you a random image url of anime(based on action), availabe actions are "pat", "hug", "waifu", "cry", "kiss", "slap", "smug", "punch"
```js
 let data = await random.getAnimeImgURL("cry")
    message.channel.send(data)
```

**getFact()**: Provides you a random fact.
```js
let data = await random.getFact();
    message.channel.send(data);
```

____

## ServerAssistant

```js
const srod = require("something-random-on-discord").ServerAssistant```
```

**isHoisted()**: Checks if the given name is hoisted or not.

```js
srod.isHoisted("! Mattechi276") //returns true
```

**isURL()**: Checks wheather given link is url or not.
```js
srod.isURL("https://withwin.in") //returns true
```


____

# FEEL FREE TO JOIN OUR SERVER

CTK'S SERVER => [JOIN OR DIE](https://withwin.in/dbd)
