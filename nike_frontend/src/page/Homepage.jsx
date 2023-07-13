import React from 'react'
import '../style/Banner.css'
import { Banner } from '../components/Banner'
import { Card } from '../components/Card'
import { Grid } from '../components/Grid'
import { Header } from '../components/Header'
import { Popular } from '../components/Popular'
import { Cardone } from '../components/Cardone'
import { Footer } from '../components/Footer'
export const Homepage = () => {
  return (
    <>
    <Header/>
    <Banner/>
    <Card/>
<h1 id='heading'>Popular Sales</h1>
    <div className='popular_div_section'>
    <Popular image={"../assests/hero.png"}/>
    <Popular  image={"../assests/nike-adapt-bb-smart.png"}/>
    <Popular  image={"../assests/nike-air-red.png"}/>
    </div>
    <Cardone/>
    <h1 id='heading'>Top Rated Sales</h1>
    <Grid/>
    <Footer/>
    </>
  )
}
