console.log('Ejecution test');
const express = require('express');
const routerApi = require('./routes');
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, console.log('Listening the port ' + port));


app.get('/', (req, res) => {
	res.send('Executing the port');
});

routerApi(app)
