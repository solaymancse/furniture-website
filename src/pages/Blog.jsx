import React from 'react'
import { Navbar } from '../components/Navbar'
import { PageBanner } from '../components/PageBanner'
import { Footer } from '../components/Footer'
import { Copyright } from '../components/Copyright'
import { Recomendation } from '../components/Recomendation'

export const Blog = () => {
  return (
    <div>
        <Navbar/>
        <PageBanner title="blog"/>
        <Recomendation/>
        <Footer/>
        <Copyright/>
        
    </div>
  )
}
