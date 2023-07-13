
const express=require("express")
const app= express()
const cors=require("cors")

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

const product=[
   {id:1,img:"../assests/product1.png",
name:"NIKE Air Low Premium",
sub:"MEN Running Shoes",price:200,rating:3,quantity:1},
{id:2,img:"../assests/hero.png", name:"NIKE Air Low Premium",
sub:"MEN Running Shoes",price:200,rating:3,quantity:1},
   {id:3,img:"../assests/product2.png", name:"NIKE Air Low Premium",
   sub:"MEN Running Shoes",price:200,rating:3,quantity:1},
    {id:4,img:"../assests/product3.png", name:"NIKE Air Low Premium",
    sub:"MEN Running Shoes",price:200,rating:3,quantity:1},
   {id:5,img:"../assests/product4.png", name:"NIKE Air Low Premium",
   sub:"MEN Running Shoes",price:200,rating:3,quantity:1},
    {id:6,img:"../assests/product5.png", name:"NIKE Air Low Premium",
    sub:"MEN Running Shoes",price:200,rating:5,quantity:1},
    {id:7,img:"../assests/product6.png", name:"NIKE Air Low Premium",
    sub:"MEN Running Shoes",price:200,rating:5,quantity:1},
    {id:8,img:"../assests/product7.png", name:"NIKE Air Low Premium",
    sub:"MEN Running Shoes",price:200,rating:5,quantity:1},
    {id:9,img:"../assests/product8.png", name:"NIKE Air Low Premium",
    sub:"MEN Running Shoes",price:200,rating:5,quantity:1},
    {id:10,img:"../assests/product9.png", name:"NIKE Air Low Premium",
    sub:"MEN Running Shoes",price:200,rating:5,quantity:1},
    {id:11,img:"../assests/product10.png", name:"NIKE Air Low Premium",
    sub:"MEN Running Shoes",price:200,rating:5,quantity:1},
    {id:12,img:"../assests/product11.png", name:"NIKE Air Low Premium",
    sub:"MEN Running Shoes",price:200,rating:5,quantity:1},
]

app.get("/user",(req,res)=>{
 const query=+req.query.id;

 const queryfinder=product.find((e)=>(
    e.id===query
))
if(queryfinder){
    res.json(queryfinder)
}else{
    res.json(product)
}
   
})


app.post("/",(req,res)=>{
res.send("hello guyss")
})
const port=process.env.PORT ||3001

app.listen(port,()=>{
    console.log("port is working")
})