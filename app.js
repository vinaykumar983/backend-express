const exp=require('express'); //express returns a function which when called returns express object

const app=exp();

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


const userApp=require('./API/userApi');         
const productApp=require('./API/productApi');

app.use('/user-api',userApp);        //calling userApp middleware based on path of user-api
app.use('/product-api',productApp);  //calling productApp middleware based on path of product-api

app.use((request,response,next)=>{
    response.send({message:"Path is invalid"})  
})

app.use((error,request,response,next)=>{
    response.send({message:"Invalid syntax"}); 
})


app.listen(4000,()=>{
    console.log("Server listening on port 4000");
})