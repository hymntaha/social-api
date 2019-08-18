const express = require('express');
const app = express();
const morgan = require('morgan');


const {getPosts} = require('routes/post');

app.get("/", getPosts)


const port = 8080
app.listen(port,()=>{ console.log(`A nodejs api is listening on port: ${port}`)});
