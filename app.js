const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');

dotenv.config();

const { port } = require('./config/keys');
const swaggerDocs = require("./swagger");
const connectMongodb = require('./init/mongodb');
const { errorHandler } = require('./middleware');
const { notFound } = require('./controllers');
const { userRoute } = require('./routes');

// initialize express app
const app = express();

// connect to mongodb
connectMongodb();

// third-party middleware
app.use(express.json({ limit: '500mb' }));
app.use(bodyParser.urlencoded({ limit: '500mb', extended: true }));
app.use(morgan('dev')); // log requests to console

// routes
app.use('/api/v1/users', userRoute);

// swagger documentation
swaggerDocs(app, port);
app.use('/api-docs-static', express.static(path.join(__dirname, '../node_modules/swagger-ui-dist')));

// not found route
app.use('*endpoint', notFound);

// error handler middleware
app.use(errorHandler);

module.exports = app;