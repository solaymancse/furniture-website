import banner from '../assets/banner.png'
import buy from '../assets/buy.png'

export const Banner = () => {
  return (
    <div className='w-ful h-screen relative'>
        <img src={banner} alt="" className='w-full h-full  ' />
        <img src={buy} alt="" className='absolute top-40 right-40'/>
    </div>
  )
}
