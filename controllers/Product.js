const Product = require("../model/prdschema")

const prdinsert = async (req,res)=>{
    try{
    const{name,qty,amt,total}=req.body;
       
        const datas = await new Product({
            product:name,
            quantity:qty,
            price:amt,
            total:total
            
        });
        

        const savedata = await datas.save();
        res.send(savedata);

    }

    catch(err){
       console.log(err)
       res.status(500).send("Internal some error occured")
    }
};

const displayprd = async(req,res) => { 
    try{
        const product = await Product.find()
            res.json(product) 

    }
    catch{
        console.log(err)
        res.status(500).send("Internal some error occured")

    }
}

const deleteprd = async(req, res)=>{
    try{
        let product = await Product.findById(req.params.id);
        if(!product){
            return res.status(404).send("not found")
        }
        product = await Product.findByIdAndDelete(req.params.id);
        res.json({success:"Deleted successfully",product:product})
    }
    catch{
        console.log(err);
        res.status(500).send("Internal error")
    }
}

const singleview = async(req,res)=>{
    try{
        let product = await Product.findById(req.params.id)
        if(!product){
            return res.status(400).send("not found")
        }
        res.json(product)
    }
    catch(error){
        console.log(error)
        res.status(500).send("Internal some error occured")
    }
}
const updateprd = async(req, res)=>{
    try{
        const{name,qty,amt,total}=req.body;
        const newprd = {};
        if(name) {newprd.name = name};
        if(qty) {newprd.qty = qty};
        if(amt) {newprd.amt = amt};
        if(total) {newprd.total = total};

        let product = await Product.findById(req.params.id);
        if(!product){
            return res.status(404).send("not found");
        }

        product       =          await Product.findByIdAndUpdate(req.params.id);
        res.json(product)
    }
    catch(error){
       console.log(error)
        res.status(500).send("Internal some error occured")
    }
}
module.exports =  { prdinsert,displayprd,deleteprd,singleview,updateprd }

