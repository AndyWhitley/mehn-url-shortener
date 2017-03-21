let Url = require("./models.js").Url
let seedData = require("./seedData.json")



Url.remove({}, () => {
  Url.create(seedData, () => {
    process.exit()
  })
})
