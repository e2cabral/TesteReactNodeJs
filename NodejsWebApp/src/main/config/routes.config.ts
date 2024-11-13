const formRoutes = require('../../presentation/routes/form')

const setRoutes = (app, router) => {
    app.use('/form', formRoutes(router));
}

module.exports = setRoutes