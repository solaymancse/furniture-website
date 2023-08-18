import feature1 from '../assets/feature1.png'
import feature2 from '../assets/feature2.png'
import feature3 from '../assets/feature3.png'

export const Feature = () => {
  return (
    <div className=" container mt-10">
        <h1 className="text-center font-semibold text-4xl">Browse The Range</h1>
        <p className="mt-4 text-center text-zinc-400 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat cumque nam rerum animi ab</p>

        <div className='flex gap-10 mt-20 justify-center'>
            <div>
                <img src={feature1} alt="" />
                <h1 className='text-center mt-2 font-semibold text-xl'>Dining</h1>
            </div>
            <div>
            <img src={feature2} alt="" />
            <h1 className='text-center mt-2 font-semibold text-xl'>Living</h1>
            </div>
            <div>
            <img src={feature3} alt="" />
            <h1 className='text-center mt-2 font-semibold text-xl' >Bedroom</h1>
            </div>
        </div>
    </div>
  )
}
