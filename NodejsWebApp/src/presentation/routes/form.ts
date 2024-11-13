const setFormRoutes = (router) => {
  return router.post('/', (req, res) => {
      res.send('Hello, World!')
  })
}

module.exports = setFormRoutes;