let exp=require('express')

let productApp=exp.Router();

productApp.get('/getproducts',(request,response)=>{
    response.send({message:"all users",payload:users})
})

productApp.get('/getproducts/:id',(request,response)=>{
    response.send({message:"User",payload:users})
})

module.exports=productApp;