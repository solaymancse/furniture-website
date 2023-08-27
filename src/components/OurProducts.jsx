import { products } from '../Data'
import product1 from '../assets/product1.png'


export const OurProducts = () => {
  return (
    <div className="container">
      <h1 className="text-center font-semibold lg:text-4xl color-3A3A3A">Our Products</h1>

      <div className=' flex gap-2 mt-10 justify-center'>
        {products.map((item, index) => (
          <div className="product-card relative w-285 h-446 bg-F4F5F7 border" key={index}>
            <div className='w-full relative'>
              <img src={item.img} alt="" className='w-full object-cover' />
              <div className='absolute top-6 right-6 w-10 h-10 rounded-full bg-E97171 flex justify-center items-center'>
                <p className='text-sm text-white'>-30%</p>
              </div>
             
            </div>
            <div className='p-4'>
              <h3 className='text-xl font-semibold color-3A3A3A mb-2'>Syltherine</h3>
              <h5 className='text-sm color-898989 mb-2'>Stylish Cafe Chair</h5>
              <div className='flex gap-4'>
                <p className='color-3A3A3A font-semibold'>BDT 9500.00</p>
                <strike className='color-B0B0B0'>BDT 9800.00</strike>
              </div>
            </div>

            <div className='hover-cart w-full h-full absolute top-0 opacity-40 cursor-pointer'>
             <div className=' bg-black w-full h-full relative flex justify-center'>
             <button className='  bg-white absolute top-40 px-6 py-1 font-bold text-black '>add to cart</button>

             </div>
            </div>
          </div>
        ))}
      </div>
      <div className=' flex gap-2 mt-10 justify-center'>
        {products.map((item, index) => (
          <div className="w-285 h-446 bg-F4F5F7 border" key={index}>
            <div className='w-full'>
              <img src={item.img} alt="" className='w-full object-cover' />
            </div>
            <div className='p-4'>
              <h3 className='text-xl font-semibold color-3A3A3A mb-2'>Syltherine</h3>
              <h5 className='text-sm color-898989 mb-2'>Stylish Cafe Chair</h5>
              <div className='flex gap-4'>
                <p className='color-3A3A3A font-semibold'>BDT 9500.00</p>
                <strike className='color-B0B0B0'>BDT 9800.00</strike>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}
