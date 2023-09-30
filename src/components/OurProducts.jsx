import { products } from '../Data'
import { Link } from 'react-router-dom'
import product1 from '../assets/product1.png'


export const OurProducts = ({ show }) => {
  return (
    <div className="container">
      <h1 className="text-center font-semibold lg:text-4xl color-3A3A3A">Our Products</h1>

      <div className=' grid  grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-2 mt-10 justify-center px-2'>
        {products.map((item, index) => (
          <Link to="/shop/single_product" className="product-card relative overflow-hidden  bg-F4F5F7 border" key={index}>
            <div className='w-full relative'>
              <img src={item.img} alt="" className='w-full object-cover' />
              <div className='absolute top-2 lg:top-6 lg:right-6 right-2 w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-E97171 flex justify-center items-center'>
                <p className='text-xs lg:text-sm text-white'>-30%</p>
              </div>

            </div>
            <div className='p-4'>
              <h3 className='text-sm lg:text-xl font-semibold color-3A3A3A mb-2'>Syltherine</h3>
              <h5 className='text-xs lg:text-sm color-898989 mb-2'>Stylish Cafe Chair</h5>
              <div className='flex flex-col lg:flex-row gap-2 lg:gap-4'>
                <p className='color-E97171 font-semibold'>BDT 9500.00</p>
                <strike className='color-B0B0B0 text-xs lg:text-sm'>BDT 9800.00</strike>
              </div>
            </div>

            <div className='hover-cart w-full h-full absolute  top-0 cursor-pointer'>
              <div className='w-full h-full relative flex justify-center'>
                <button className=' bg-white absolute top-20 md:top-40 px-6 py-1 font-semibold color-B88E2F'>Add to cart</button>
                <div className=' absolute top-40 md:top-60 flex flex-col md:flex-row text-white font-semibold gap-4 px-6'>
                  <Link className='flex text-xs md:text-sm gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                    </svg>
                    Share

                  </Link>
                  <Link className='flex text-xs md:text-sm gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                    </svg>
                    Compare
                  </Link>
                  <Link className='flex text-xs md:text-sm gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                    Like
                  </Link>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>


      {show ? "" : (
        <div className='flex justify-center mt-10'>
          <div className='border border-color w-60  px-6 py-2  flex justify-center items-center color-B88E2F font-semibold'>
            <Link>Show More</Link>
          </div>
        </div>
      )}
    </div>
  )
}
