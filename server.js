'use strict';

require('babel-register')();

const app = require('./src/app');
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Koa application listening on port ${port}`));
