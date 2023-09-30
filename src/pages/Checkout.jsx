import React from 'react'
import { Navbar } from '../components/Navbar'
import { PageBanner } from '../components/PageBanner'
import { Footer } from '../components/Footer'
import { Copyright } from '../components/Copyright'
import { Recomendation } from '../components/Recomendation'

export const Checkout = () => {
  return (
    <div>
        <Navbar/>
        <PageBanner title="Checkout"/>
        <Recomendation/>
        <Footer/>
        <Copyright/>
    </div>
  )
}
