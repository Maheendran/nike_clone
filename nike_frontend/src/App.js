
import { useEffect, useState } from 'react';
import './App.css';
import { Appcontext } from './Appcontext';
import { Homepage } from './page/Homepage';
function App() {
  const[products,setProducts]=useState([])
  const[cartadded,setCartadded]=useState([])
  const[popup,setPopup]=useState(false)
  useEffect((e)=>{
    fetch("http://localhost:3001/user",{method:"GET"}).then((res)=>res.json()).then((data)=>setProducts(data))
  },[])

  // ///////////////////////////

  const[size,setSize]=useState()
  const[btndisable,setBtndisable]=useState(false)
  const handlesize=(size,elemt)=>{
   setSize(size)
   setBtndisable(elemt.id)

  }
  //////////////////////
  var timer;
  const handlecartadd=(e)=>{

if(size){
  setPopup(true)
    const productexist= cartadded.find((item)=>{
      return item.id===e.id;
    })
if(productexist){
setCartadded(cartadded.map((item)=>item.id===e.id ? {...productexist,quantity:productexist.quantity+1 }:item))
}
else{
  setCartadded([...cartadded,{...e,quantity:1,shoesize:size}])
}
setSize()
}
else{
  alert("please select size")
}
console.log(cartadded)
    

  }
 setInterval((e)=>
 (
  setPopup(false)
 ),2000)
//  //////////////////////////////////////////
const[cartshow,setCartshow]=useState(false)
  
function handlecart(){
  setCartshow(!cartshow)
}
// ////////////////////////////////


const handlequantity=(e)=>{
  const productexist= cartadded.find((item)=>{
    return item.id===e.id;
  })
if(productexist){
setCartadded(cartadded.map((item)=>item.id===e.id ? {...productexist,quantity:productexist.quantity+1 }:item))
}
}
const handlequantity_subtract=(e)=>{
  const productexist= cartadded.find((item)=>{
    return item.id===e.id;
  })
if(productexist.quantity>1){
setCartadded(cartadded.map((item)=>item.id===e.id ? {...productexist,quantity:productexist.quantity-1 }:item))
}else{
  setCartadded(cartadded.filter((item)=>item.id!==e.id))
}
}

var total=cartadded.reduce((sum,e)=>{
return sum + (e.price*e.quantity)
},0)
console.log(total)
  return (
    <div className="App">
      <Appcontext.Provider value={{products,cartadded,popup,
        handlecartadd,cartshow,handlecart,handlesize,btndisable,size,handlequantity,handlequantity_subtract,total}}>
      <Homepage/>
      </Appcontext.Provider>

    </div>
  );
}

export default App;
