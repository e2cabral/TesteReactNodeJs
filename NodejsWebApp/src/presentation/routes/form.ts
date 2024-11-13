const setFormRoutes = (router) => {
  return router.post('/', (req, res) => {
      const { firstValue, secondValue } = req.body;

      res.send({ sum: Number(firstValue) + Number(secondValue) });
  })
}

module.exports = setFormRoutes;