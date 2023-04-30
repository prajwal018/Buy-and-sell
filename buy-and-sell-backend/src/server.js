import Hapi from '@hapi/hapi';
import { db } from './database';
import routes from './routes';

let server;
const start = async () => {
	server = Hapi.server({
		port: 8000,
		host: 'localhost',
	});

	routes.forEach((route) => server.route(route));
	db.connect();
	await server.start();
	console.log(`server is listining on ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
	console.log(err);
	process.exit(1);
});

process.on('SIGINT', async () => {
	console.log('Stopping Server...');
	await server.stop({ timeout: 1000 });
	db.end;
	console.log('Sever Stopped');
	process.exit(0);
});
start();
