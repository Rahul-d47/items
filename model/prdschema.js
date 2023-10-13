const mongoose = require('mongoose')
const {Schema} = mongoose
const productschema = new Schema({
    product:{
        type:String
    },
    quantity:{
        type:Number,
        required:true
    },
    price:{
        type:Number
    },
    total:{
        type:Number
    }
})

module.exports=mongoose.model("Product",productschema)