const express = require( 'express' );
const blogController = require( '../controllers/blogController' );
const router = express.Router();

router.get( '/', blogController.affiche_blog );
router.delete( '/:id', blogController.delete_blog );
router.get( '/:id', blogController.find_by_id );
router.post( '/', blogController.add_blog );
router.put( '/:id', blogController.update_blog );

module.exports = router;