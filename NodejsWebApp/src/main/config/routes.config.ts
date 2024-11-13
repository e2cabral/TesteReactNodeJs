const formRoutes = require('../../presentation/routes/form')

const setRoutes = (app, router) => {
    app.use('/sum', formRoutes(router));
}

module.exports = setRoutes