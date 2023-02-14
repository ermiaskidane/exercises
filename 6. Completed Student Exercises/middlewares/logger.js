const logger = (req, res, next) => {
  const date = new Date()
  console.log(date.toDateString())
  next()
}

module.exports = logger
