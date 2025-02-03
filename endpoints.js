module.exports = function (app) {

    // GET
    app.get('/user/:id', (req, res) => {
        const filter = req.query.filter;

        const version = req.headers.version;

        return res.status(200).send("some data");
    });

    app.post('/user', (req, res) => {
        const { name, age } = req.body;

        return res.status(201).send();
    });
}