const express = require('express');
const productRouter = require('./productRouter.js');
const userRouter = require('./userRouter.js');
const categoryRouter = require('./categoryRouter.js');

/**
 * Cuando se trabaja con Api se deben implementar las versiones en la uri
 */
function routerApi(app) {
	const router = express.Router();
	//Ruta estática por la cual inician todos los endpoints
	app.use('/api/v1', router);
	//Rutas dinámicas dependiendo de lo que se esté consuiendo
	app.use('/api/v1/products', productRouter);
	app.use('/api/v1/users', userRouter);
	app.use('/api/v1/categories', categoryRouter);
}

module.exports = routerApi;
