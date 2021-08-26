const mongoose = require( 'mongoose' );

const blogSchema = mongoose.Schema( {
    title: {
        type: String,
        required: true,
        length: 3
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
} );

const blog = mongoose.model( 'blogs', blogSchema );

module.exports = blog;