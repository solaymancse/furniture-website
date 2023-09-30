import share1 from '../assets/share1.png'
import share2 from '../assets/share2.png'
import share3 from '../assets/share3.png'
import share4 from '../assets/share4.png'
import share5 from '../assets/share5.png'
import share6 from '../assets/share6.png'

export const Share = () => {
    return (
        <div className='container mt-4 py-6'>
            <p className='text-center color-616161 text-sm md:text-base mb-2'>Share your setup with</p>
            <h1 className='text-center color-3A3A3A text-xl md:text-2xl lg:text-4xl font-semibold'>#FuniroFurniture</h1>
            <div>
                <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
                    <div className="-m-1 flex flex-wrap md:-m-2">
                        <div className="flex w-1/2 flex-wrap">
                            <div className="w-1/2 p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src={share1} />
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src={share2} />
                            </div>
                            <div className="w-full p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src={share3} />
                            </div>
                        </div>
                        <div className="flex w-1/2 flex-wrap">
                            <div className="w-full p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src={share4} />
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src={share5} />
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src={share6} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
