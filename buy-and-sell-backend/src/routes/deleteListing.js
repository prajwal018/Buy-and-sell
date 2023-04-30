import { db } from '../database';
export const deleteListingRoute = {
	method: 'DELETE',
	path: '/api/listing/{id}',
	handler: async (req, h) => {
		const { id } = req.params;
		await db.query('DELETE FROM listing WHERE id=?', [id]);
		return { message: 'Success!' };
	},
};
