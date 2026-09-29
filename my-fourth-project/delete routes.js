
const express=require("express");
const router=express.Router();
const {getusers,postusers,putusers,deleteusers}=require('./delete controller');

router.get('/getusers',getusers);
router.post('/postusers',postusers);
router.put('/putusers/:id',putusers);
router.delete('/deleteusers/:id',deleteusers);
module.exports=router;

