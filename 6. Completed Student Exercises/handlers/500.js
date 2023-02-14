// Error handler middleware
const Page500 = (error, req, res, next) => {
  res.status(500).json({
    code: 500,
    route: req.path,
    message: `Server error: ${error}`,
  })
}

module.exports = Page500
