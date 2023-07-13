import React from 'react'
import '../style/Popular.css'
import { BsBag} from 'react-icons/bs';
export const Popular = ({image}) => {
  return (
    <>
    <div className='Popular_div'>
<div className='detail_box'>
<h2>NIKE</h2>
<h2>Men Running Shoe</h2>
<div className='price_div'>
<h3>$ 200</h3>
</div>
<div  className='grid_bag_box'>
<BsBag id='bag' size={"1.2rem"}/>
</div>

  




</div>
<div className='detail_img'>
<img src={image}/>
</div>
    </div>
    </>
  )
}
