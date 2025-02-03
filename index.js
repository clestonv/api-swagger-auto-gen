const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

/* Middlewares  */
app.use(bodyParser());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(3000, () => {
    console.log("API documentation : http://localhost:3000/docs");
});

/** Endpoints */
require('./endpoints')(app);