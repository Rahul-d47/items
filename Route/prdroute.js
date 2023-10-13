const express = require("express");
const {prdinsert, displayprd, deleteprd, singleview, updateprd} = require("../controllers/Product")

const router = express.Router();

router.post("/prd_insert",prdinsert);
router.get("/display",displayprd);
router.delete("/delete/:id",deleteprd);
router.get("/view/:id",singleview);
router.put("/update/:id",updateprd);
module.exports=router;