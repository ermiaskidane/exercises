const Page404 = (req, res, next) => {
  res.status(404).json({
    code: 404,
    route: req.path,
    message: 'page not Found',
  })
}

module.exports = Page404
