import { addViewToListingRoute } from './addViewToListing';
import { creatNewListingRoute } from './createNewListing';
import { deleteListingRoute } from './deleteListing';
import { getAllListingRoute } from './getAllListing';
import { getListingRoute } from './getListing';
import { getUserListingRoute } from './getuserListing';
import { updateListingRoute } from './updateListing';
export default [
	deleteListingRoute,
	updateListingRoute,
	getAllListingRoute,
	getUserListingRoute,
	getListingRoute,
	addViewToListingRoute,
	creatNewListingRoute,
];
