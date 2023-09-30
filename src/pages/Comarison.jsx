import React from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Copyright } from '../components/Copyright'
import { PageBanner } from '../components/PageBanner'
import { Recomendation } from '../components/Recomendation'

export const Comparison = () => {
  return (
    <div>
        <Navbar/>
        <PageBanner title="Comparison"/>
        <Recomendation/>
        <Footer/>
        <Copyright/>
    </div>
  )
}
