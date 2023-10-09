import React from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Copyright } from '../components/Copyright'
import { PageBanner } from '../components/PageBanner'
import { Recomendation } from '../components/Recomendation'
import { ComparisonProducts } from '../components/ComparisonProducts'

export const Comparison = () => {
  return (
    <div>
        <Navbar/>
        <PageBanner title="Comparison"/>
        <ComparisonProducts/>
        <Recomendation/>
        <Footer/>
        <Copyright/>
    </div>
  )
}
