import React from 'react'
import { Navbar } from '../components/Navbar'
import { PageBanner } from '../components/PageBanner'
import { Recomendation } from '../components/Recomendation'
import { Footer } from '../components/Footer'
import { Copyright } from '../components/Copyright'

export const Contact = () => {
  return (
    <div>
        <Navbar/>
        <PageBanner title="Contact"/>
        <Recomendation/>
        <Footer/>
        <Copyright/>
    </div>
  )
}
