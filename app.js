const express = require('express');
const bodyParser = require('body-parser');
const notesRouter = require('./controllers/notes');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/api', notesRouter);
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))


app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on http://0.0.0.0:${port}`);
});


