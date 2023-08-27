import banner from '../assets/banner.png'
import buy from '../assets/buy.png'

export const Banner = () => {
  return (
    <div className='w-ful h-80 lg:h-full relative'>
        <img src={banner} alt="" className='w-full h-full object-cover ' />
        <img src={buy} alt="" className='absolute top-40 right-6 lg:right-60 w-40 lg:w-2/6'/>
    </div>
  )
}
