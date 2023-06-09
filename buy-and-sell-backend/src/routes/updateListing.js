import { db } from '../database';
export const updateListingRoute = {
	method: 'POST',
	path: '/api/listing/{id}',
	handler: async (req, h) => {
		const { id } = req.params;
		const { name, description, price } = req.payload;
		const userId = '12345';
		await db.query(
			`
    UPDATE listing 
    SET name=?,description=?,price=?
    WHERE id=? AND user_id=?`,
			[name, description, price, id, userId]
		);
		const { results } = await db.query(
			'SELECT * FROM listing WHERE id =? AND user_id=?',
			[id, userId]
		);
		return results[0];
	},
};
