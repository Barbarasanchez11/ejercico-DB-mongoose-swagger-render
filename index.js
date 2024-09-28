const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const { dbConnection } = require('./config/config');
const routes = require('./routes');
const swaggerUI = require('swagger-ui-express')
const docs = require('./docs/index')



app.use(express.json());
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(docs))

app.use('/', routes);


dbConnection();

app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));