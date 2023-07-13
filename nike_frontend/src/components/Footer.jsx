import React from 'react'
import '../style/Footer.css'
export const Footer = () => {
  return (
    <>
    <div className='footer_div'>
   <div className='footer_wave'>
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="0.3" d="M0,160L48,138.7C96,117,192,75,288,64C384,53,480,75,576,69.3C672,64,768,32,864,42.7C960,53,1056,107,1152,106.7C1248,107,1344,53,1392,26.7L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
   
   </div>
   <div className='footer_detail'>
<img src="../assests/facebook.svg" alt="" />
<img src="../assests/twitter.svg" alt="" />
<img src="../assests/instagram.svg" alt="" />
<img src="../assests/messenger.svg" alt="" />
   </div>
        
        </div></>
  )
}
