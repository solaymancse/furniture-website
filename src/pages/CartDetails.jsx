import React from 'react'
import { Navbar } from '../components/Navbar'
import { PageBanner } from '../components/PageBanner'
import { Footer } from '../components/Footer'
import { Copyright } from '../components/Copyright'
import { Recomendation } from '../components/Recomendation'
import { FaTrash } from 'react-icons/fa'
import img from '../assets/pr1.png'

export const CartDetails = () => {
  return (
    <div>
      <Navbar />
      <PageBanner title="Cart" />
      <div className='container mt-20 flex gap-32'>
        <div className='w-3/5 '>
          <div className='flex bg-[#F9F1E7] px-6 h-12 items-center'>
            <p className='w-2/5 '>Product</p>
            <p className='w-1/4 pl-4 '>Price</p>
            <p className='w-1/6 '>Quantity</p>
            <p className='w-1/3 pl-6'>Subtotal</p>
          </div>

          {/* product details */}
          <div className='flex mt-8 px-4 items-center justify-between'>
            <div className='flex items-center gap-4'>
             <div className='bg-[#F9F1E7] rounded-md'>
             <img src={img} alt="" />
             </div>
              <p className=' text-gray-400'>Asgaard sofa</p>
            </div>
            <div>
              <p className=' text-gray-400'>Rs. 250,000.00</p>
            </div>
            <div>
              <p>1</p>
            </div>
            <div>
              <p className=' text-[#B88E2F]'>BDT. 250,000.00</p>
            </div>
            <div>
              <FaTrash color='#B88E2F'/>
            </div>
          </div>
          {/* product details */}
          <div className='flex mt-8 px-4 items-center justify-between'>
            <div className='flex items-center gap-4'>
             <div className='bg-[#F9F1E7] rounded-md'>
             <img src={img} alt="" />
             </div>
              <p className=' text-gray-400'>Asgaard sofa</p>
            </div>
            <div>
              <p className=' text-gray-400'>Rs. 250,000.00</p>
            </div>
            <div>
              <p>1</p>
            </div>
            <div>
              <p className=' text-[#B88E2F]'>BDT. 250,000.00</p>
            </div>
            <div>
              <FaTrash color='#B88E2F'/>
            </div>
          </div>
          {/* product details */}
          <div className='flex mt-8 px-4 items-center justify-between'>
            <div className='flex items-center gap-4'>
             <div className='bg-[#F9F1E7] rounded-md'>
             <img src={img} alt="" />
             </div>
              <p className=' text-gray-400'>Asgaard sofa</p>
            </div>
            <div>
              <p className=' text-gray-400'>Rs. 250,000.00</p>
            </div>
            <div>
              <p>1</p>
            </div>
            <div>
              <p className=' text-[#B88E2F]'>BDT. 250,000.00</p>
            </div>
            <div>
              <FaTrash color='#B88E2F'/>
            </div>
          </div>

        </div>

        <div className='bg-[#F9F1E7] px-14 py-4 text-center'>
          <h1 className=' text-xl font-semibold mb-6'>Cart Totals</h1>
          <div className='flex w-60 justify-between mb-8'>
            <p className=' text-sm'>Subtotal</p>
            <p className=' text-sm'>BDT. 250,000.00</p>
          </div>
          <div className='flex w-60 justify-between mb-10'>
            <p className=' text-sm'>Total</p>
            <p className=' text-sm'>BDT. 250,000.00</p>
          </div>
          <button className='border border-gray-600 px-6 py-2 rounded-md hover:bg-[#B88E2F] hover:border-transparent hover:text-white transition-all'>Check Out</button>
        </div>
      </div>
      <Recomendation />
      <Footer />
      <Copyright />
    </div>
  )
}
