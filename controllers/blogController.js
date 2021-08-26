const Blog = require( '../models/blog' );



// affiche tous les blogs
const affiche_blog = ( req, res ) => {
    Blog.find()
        .then( ( result ) => {
            res.send( result )
        } )
        .catch( ( err ) => {
            res.send( err )
        } );
};

// delete blog
const delete_blog = ( req, res ) => {
    const id = req.params.id;
    Blog.findByIdAndDelete( id )
        .then( ( result ) => {
            if ( !result ) {
                res.status( 404 ).send( 'blog does not exist' );
            }
        } )
        .catch( ( err ) => {
            res.send( err.message )
        } );
}

// recherche blog by id
const find_by_id = ( req, res ) => {
    const id = req.params.id;
    Blog.findById( id )
        .then( ( result ) => {
            if ( !result ) res.status( 404 ).send( 'blog does not exist' );
            res.send( result );
        } )
        .catch( err => res.status( 400 ).send( err.message ) );
};

// create blog
const add_blog = ( req, res ) => {

    const blog = new Blog( req.body );
    blog.save()
        .then( result => res.send( 'blog added succefully' ) )
        .catch( err => res.status( 400 ).send( err.message ) );
    // }
};

// updata blog 
const update_blog = ( req, res ) => {
    const id = req.params.id;
    Blog.findByIdAndUpdate( id, req.body )
        .then( ( result ) => res.send( result ) )
        .catch( err => res.status( 400 ).send( err.message ) );
}
module.exports = {
    affiche_blog,
    delete_blog,
    find_by_id,
    add_blog,
    update_blog
}