const newsRouter = require('./news');
const meRouter = require('./me');
const siteRouter = require('./site');
const courseRouter = require('./courses');

function route(app) {
    app.use('/courses', courseRouter);
    app.use('/me', meRouter);
    app.use('/news', newsRouter);

    app.get('/search', (req, res) => {
        console.log('parameter', req.query);
        res.render('search');
    });

    app.use('/', siteRouter);
}

module.exports = route;
