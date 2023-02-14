const Validate = (req, res, next) => {
  let title = req.query.title
  if (!title) {
    next('title is required')
  } else {
    next()
  }
}

module.exports = Validate
