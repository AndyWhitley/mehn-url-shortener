const mongoose = require('./connection.js')

let UrlSchema = new mongoose.Schema({
  short: String,
  long: String,
}, {
  timestamps: true
})

let Url = mongoose.model("Url", UrlSchema)

module.exports = {
  Url
}
