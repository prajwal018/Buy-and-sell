import { db } from '../database';

export const addViewToListingRoute = {
	method: 'POST',
	path: '/api/listing/{id}/add-view',
	handler: async (req, h) => {
		const id = req.params.id;
		await db.query('UPDATE listing SET views=views+1 WHERE id=?', [id]);
		const { results } = await db.query('SELECT * FROM listing WHERE id=?', [
			id,
		]);
		const updatedListing = results[0];
		return updatedListing;
	},
};
