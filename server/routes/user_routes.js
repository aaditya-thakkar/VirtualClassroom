const ObjectID = require('mongodb').ObjectID;

module.exports = function (app, db) {
    app.get('/users/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        db.collection('users').findOne(details, (err, item) => {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                res.send(item);
            }
        });
    });

    app.get('/users', (req, res) => {
        db.collection('users').find({}).toArray(function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                res.send(result);
            }
        });
    });

    app.post('/users', (req, res) => {
        const user = { email: req.body.email, password: req.body.password };
        db.collection('users').insertOne(user, (err, result) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(result.ops[0]);
            }
        });
    });

    app.delete('/users/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        db.collection('users').removeOne(details, (err, item) => {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                res.send('User ' + id + ' deleted!');
            }
        });
    });

    app.put('/users/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        const user = { email: req.body.email, password: req.body.password, istutor: req.body.istutor };
        db.collection('users').updateOne(details, user, (err, result) => {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                res.send(user);
            }
        });
    });

    app.get('/courses/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        db.collection('courses').findOne(details, (err, item) => {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                res.send(item);
            }
        });
    });

    app.get('/courses', (req, res) => {
        db.collection('courses').find({}).toArray(function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                res.send(result);
            }
        });
    });

    app.post('/courses', (req, res) => {
        const course = { cid: req.body.cid, name: req.body.name, liveChannel: req.body.liveChannel, tutorId: req.body.tutorId, image: req.body.image };
        db.collection('courses').insertOne(course, (err, result) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(result.ops[0]);
            }
        });
    });

    app.put('/courses/:courseid', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        const course = { id: req.body.id, name: req.body.name, liveChannel: req.body.liveChannel, tutorId: req.body.tutorId, image: req.body.image };
        db.collection('courses').updateOne(details, course, (err, result) => {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                res.send(course);
            }
        });
    });

    app.delete('/courses/:courseid', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        db.collection('courses').removeOne(details, (err, item) => {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                res.send('User ' + courseid + ' deleted!');
            }
        });
    });

};