const app = require('express')();

app.get('/', (request, response) => {
   response.send('Hello Word!!!')
});

app.listen(3000, () => console.log('server started at http://localhost:3000'))