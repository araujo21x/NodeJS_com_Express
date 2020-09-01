const app = require('express')();
const routes = require('./routes');

app.use(routes);

app.listen(3000, () => console.log('server started at http://localhost:3000'));
