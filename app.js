const express = require('express');
const app = express();
const morgan = require('morgan');


const postRoutes = require('routes/post');

app.get("/", postRoutes.getPosts)


const port = 8080
app.listen(port,()=>{ console.log(`A nodejs api is listening on port: ${port}`)});
