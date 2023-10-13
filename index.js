const express = require("express");
const ConnectToMongo = require("./database");
const productschema = require("./model/prdschema");

const app = express();
const port = 3000;
app.use(express.json());


const prdroute = require('./Route/prdroute')
app.use('/api/product', prdroute);





ConnectToMongo();
app.listen(port,()=>{
    console.log(`app is listenning on port localhost:${port}`);
})