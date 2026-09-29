const express=require("express");
const routes=express.Router();
const {getuser,postuser,updateuser,deleteuser}=require('./post controller');




routes.get(`/getuser`,getuser);
routes.post(`/postuser`,postuser);
routes.put(`/putuser/:id`,updateuser);
routes.delete(`/deleteuser`,deleteuser);

module.exports=routes;