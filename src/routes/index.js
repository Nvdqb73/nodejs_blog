const newsRouter = require('./news');
const siteRouter = require('./site');
const courseRouter = require('./courses');

function route(app) {
    app.use('/courses', courseRouter);
    app.use('/news', newsRouter);

    app.get('/search', (req, res) => {
        console.log('parameter', req.query);
        res.render('search');
    });

    app.use('/', siteRouter);
}

module.exports = route;
