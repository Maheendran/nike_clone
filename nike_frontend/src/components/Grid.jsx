import React from 'react'
import '../style/Grid.css'
import { BsBag,BsStar} from 'react-icons/bs';
import { useContext } from 'react';
import { Appcontext } from '../Appcontext';

export const Grid = () => {
 const {products,popup,handlecartadd}=useContext(Appcontext)
const {handlesize,btndisable,size}=useContext(Appcontext)

  return (
    <>
    <div className='grid_div'>
           {products.map((e)=>(
            <div className='grid_inside_box' key={e.id}>
<div className='grid_detail_box'>
<h2 style={{color:" rgba(22, 72, 84, 0.911)"}}>{e.name}</h2>
<h3 style={{color:" rgba(22, 72, 84, 1.911)"}}>{e.sub}</h3>
<div className='grid_detail_price'>
<h3 style={{color:" rgba(22, 72, 84, 0.911)"}}>${e.price}</h3>
<div className='grid_rating'>
<h3 style={{color:" rgba(22, 72, 84, 0.911)"}}>{e.rating}</h3><BsStar style={{color:" rgba(22, 72, 84, 0.911)"}} size={"1.1rem"}/>
</div>
</div>
<div className='grid_bag_box' onClick={()=>handlecartadd(e)}>
<BsBag id='bag'/>
</div>
<div>
  

</div>

</div>
 <img src={e.img} alt="" /> 

 <div className='size_shoe_btn'>
 <button onClick={()=>handlesize(6,e)} disabled={btndisable===e.id && size===6} id="btn_one" >6</button>
  <button onClick={()=>handlesize(7,e)} disabled={btndisable===e.id && size===7} id="btn_two" >7</button>
  <button onClick={()=>handlesize(8,e)} disabled={btndisable===e.id && size===8} id="btn_three" >8</button>
 </div>
            </div>
           
           ))}
        
         </div>
         {/* {popup &&
         <div className='popup_div'>
<h1>product added</h1>
         </div>} */}
    </>
  )
}
