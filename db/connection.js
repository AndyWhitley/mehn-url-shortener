const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/mehnreview", (err) => {
  if(err) {
    console.log(err)
  } else {
    console.log("MongoDB Connected")
  }
})

module.exports = mongoose
