import React, { useContext } from 'react'
import { BsSearch ,BsHeart,BsBag} from 'react-icons/bs';
import { Appcontext } from '../Appcontext';
import '../style/Header.css'
export const Header = () => {
  const {cartshow,handlecart,cartadded,handlequantity,handlequantity_subtract,total}=useContext(Appcontext)
 
  const handlereload=()=>{
    window.location.reload()
  }

  return (
    <>
    <div className='header'>
    <img src="../assests/logo.png" alt="" />
    <ul>
        <li>
        <BsSearch size={"1.2rem"}/>
        </li>
        <li>
        <BsHeart size={"1.2rem"}/>
        </li>
        <li>
         <BsBag className='cart_bag' onClick={handlecart} size={"1.2rem"}/> </li>
    </ul>
    {cartshow &&
<div className='cart_section'>

{cartadded.length>0 ?
<div>
  <div>
  <h2 style={{fontFamily:"sans-serif"}}>Total Price :${total}</h2>
  <button id='check_btn' onClick={()=>handlereload()}>Checkout</button>
  </div>

{cartadded.map((e)=>(



  <div className='cart_product_box'>
   
<div className='cart_product_image'>
<img src={e.img} alt=""  />
</div>
<div  className='cart_product_detail'>
<h4>{e.name}</h4>
<h4>${e.price}</h4>
<h4>Size:{e.shoesize}</h4>
<div className='cart_product_button'>
  <button style={{fontSize:"1.5rem"}}
  onClick={()=>handlequantity_subtract(e)}
  >-</button>
  <h3>{e.quantity}</h3>
  <button style={{fontSize:"1.5rem"}} onClick={()=>handlequantity(e)}>+</button>
 
</div>
</div>


  </div>

  
))} </div>:
<div className='empty_cart'>
  <h1>Cart Empty</h1>
<img src="https://www.shareicon.net/data/2015/08/04/79873_nike_512x512.png" alt="" id='image2' />
</div>


}

</div>}

    </div>
  

    </>
  )
}
