const express = require( 'express' );
const mongoose = require( 'mongoose' );
const blogRouter = require( './routers/blogRoute' );
const cors = require( 'cors' );
const port = process.env.PORT || 3000;
const app = express();

// connect to database

const dbUrl = 'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false';
mongoose.connect( dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    } )
    .then( _ => app.listen( port, () => {
        console.log( `server listen on port ${port}` );
    } ) )
    .catch( err => console.log( err ) );

app.use( express.json() );
app.use( cors() );



app.use( '/api/blogs', blogRouter );