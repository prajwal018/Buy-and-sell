import Boom from '@hapi/boom';
import { db } from '../database';

export const getListingRoute = {
	method: 'GET',
	path: '/api/listing/{id}',
	handler: async (req, h) => {
		const id = req.params.id;
		const { results } = await db.query('SELECT * FROM listing WHERE id=?', [
			id,
		]);
		const listing = results[0];
		if (!listing) throw Boom.notFound(`Listing does not exist wtih id ${id}`);
		return listing;
	},
};
