let exp=require('express')

let userApp=exp.Router();

let users=[
    {
        id:1,
        name:"Madhu",
        Adderess:"Hyderabad"
    },
    {
        id:2,
        name:"Madhu",
        Adderess:"Hyderabad"
    }
]

userApp.get('/getusers',(request,response)=>{
    response.send({message:"all users",payload:users})
})


userApp.get('/getusers/:id',(request,response)=>{
    let n=request.params.id;
    console.log(n);
    response.send({message:"User",payload:users})
})

module.exports=userApp;