console.log("Ejecution test");
const express = require("express")
const app = express()
const port = process.env.PORT || 3000

app.listen(port, console.log("Listening the port " + port))

app.get('/', (req, res)=>{
	res.send("Executing the port");
});

app.get('/my-app', (req, res)=>{
	res.send("New route");
});

app.get('/json-structure', (req, res)=>{
	res.json({
		"product": "T-Shirt",
		"price": 12093,
		"size": "S"
	});
});
