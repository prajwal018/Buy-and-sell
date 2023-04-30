import { db } from '../database';

export const getAllListingRoute = {
	method: 'GET',
	path: '/api/listing',
	handler: async (req, h) => {
		const { results } = await db.query('SELECT * FROM listing');
		return results;
	},
};
