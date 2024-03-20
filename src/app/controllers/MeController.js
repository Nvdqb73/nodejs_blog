const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../utils/mongoose');

class MeController {
    // [GET] /me//stored/course
    storedCourse(req, res, next) {
        Promise.all([
            Course.find({}),
            Course.countDocumentsWithDeleted({ deleted: true }),
        ])
            .then(([courses, deleteCount]) =>
                res.render('me/stored-courses', {
                    deleteCount,
                    courses: multipleMongooseToObject(courses),
                }),
            )
            .catch(next);
    }

    // [GET] /me/trash/course
    trashCourse(req, res, next) {
        Course.findWithDeleted({ deleted: true })
            .then((courses) => {
                res.render('me/trash-courses', {
                    courses: multipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }
}

module.exports = new MeController();
