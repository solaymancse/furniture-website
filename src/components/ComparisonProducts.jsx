import { Link } from 'react-router-dom'
import c1 from '../assets/c1.png'
import c2 from '../assets/c2.png'
import { ChevronDownIcon, StarIcon } from '@heroicons/react/24/outline'
import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'

export const ComparisonProducts = () => {
    const reviews = { href: '#', average: 4, totalCount: 117 }

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
    return (
        <div>
            <div className="container flex items-start py-14">
                <div className='w-1/4'>
                    <h1 className='text-xl font-semibold mb-4'>Go to Product <br /> page for more <br />
                        Products</h1>
                    <Link to="/shop" className='text-sm text-blue-400 border-b'>View More</Link>
                </div>
                <div className='w-1/4 pl-6'>
                    <img src={c1} alt="" />
                    <div className='mt-4'>
                        <h1 className='font-semibold'>Asgaard Sofa</h1>
                        <p>BDT. 250,000.00</p>

                        {/* Reviews */}
                        <div className="mt-6">
                            <h3 className="sr-only">Reviews</h3>
                            <div className="flex items-center">
                                <p className=' text-gray-800 pr-2'>4.7</p>
                                <div className="flex items-center">

                                    {[0, 1, 2, 3, 4].map((rating) => (
                                        <StarIcon
                                            key={rating}
                                            className={classNames(
                                                reviews.average > rating ? ' text-yellow-500' : 'text-gray-200',
                                                'h-5 w-5 flex-shrink-0'
                                            )}
                                            aria-hidden="true"
                                        />
                                    ))}
                                </div>
                                <p className="sr-only">{reviews.average} out of 5 stars</p>
                                <a href={reviews.href} className="ml-3 border-l-2 pl-2 border-gray-300 text-sm font-medium text-gray-400 hover:text-indigo-500">
                                    {reviews.totalCount} reviews
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-1/4 pl-6'>
                    <img src={c1} alt="" />
                    <div className='mt-4'>
                        <h1 className='font-semibold'>Asgaard Sofa</h1>
                        <p>BDT. 250,000.00</p>
                        {/* Reviews */}
                        <div className="mt-6">
                            <h3 className="sr-only">Reviews</h3>
                            <div className="flex items-center">
                                <p className=' text-gray-800 pr-2'>4.7</p>
                                <div className="flex items-center">

                                    {[0, 1, 2, 3, 4].map((rating) => (
                                        <StarIcon
                                            key={rating}
                                            className={classNames(
                                                reviews.average > rating ? ' text-yellow-500' : 'text-gray-200',
                                                'h-5 w-5 flex-shrink-0'
                                            )}
                                            aria-hidden="true"
                                        />
                                    ))}
                                </div>
                                <p className="sr-only">{reviews.average} out of 5 stars</p>
                                <a href={reviews.href} className="ml-3 border-l-2 pl-2 border-gray-300 text-sm font-medium text-gray-400 hover:text-indigo-500">
                                    {reviews.totalCount} reviews
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-1/4 pl-6'>
                    <h1 className='font-semibold mb-2'>Add A Product</h1>
                    <Popover className="relative">
                        <Popover.Button className="flex items-center gap-x-1 text-xs px-2 leading-6 text-white py-1 rounded-md bg-[#B88E2F]">
                            Choose a Product
                            <ChevronDownIcon className="h-5 w-5 flex-none text-white" aria-hidden="true" />
                        </Popover.Button>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                                <div className="p-4">
                                  
                                        <div
                                           
                                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                        >
                                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                             
                                            </div>
                                            <div className="flex-auto">
                                                <a href="" className="block font-semibold text-gray-900">
                                                   
                                                    <span className="absolute inset-0" />
                                                </a>
                                                <p className="mt-1 text-gray-600"></p>
                                            </div>
                                        </div>
                                 
                                </div>
                     
                            </Popover.Panel>
                        </Transition>
                    </Popover>
                </div>
            </div>
            <div className="container flex">
                <div className=' border-t border-r w-1/4'>
                    <div className='mt-8'>
                        <h1 className='mb-4 font-semibold'>General</h1>
                        <div className='flex flex-col mb-14 gap-4'>
                            <Link>Sales Packages</Link>
                            <Link>Model Number</Link>
                            <Link>Secondary Material</Link>
                            <Link>Configuration</Link>
                            <Link>Upholstery Material</Link>
                            <Link>Upholstery Color</Link>
                        </div>
                    </div>
                    <div className=''>
                        <h1 className='mb-4 font-semibold'>Product</h1>
                        <div className='flex flex-col mb-14 gap-4'>
                            <Link>Sales Packages</Link>
                            <Link>Model Number</Link>
                            <Link>Secondary Material</Link>
                            <Link>Configuration</Link>
                            <Link>Upholstery Material</Link>
                            <Link>Upholstery Color</Link>
                        </div>
                    </div>
                    <div className=''>
                        <h1 className='mb-4 font-semibold'>Dimentions</h1>
                        <div className='flex flex-col mb-14 gap-4'>
                            <Link>Sales Packages</Link>
                            <Link>Model Number</Link>
                            <Link>Secondary Material</Link>
                            <Link>Configuration</Link>
                            <Link>Upholstery Material</Link>
                            <Link>Upholstery Color</Link>
                        </div>
                    </div>
                    <div className=''>
                        <h1 className='mb-4 font-semibold'>Warranty</h1>
                        <div className='flex flex-col mb-14 gap-4'>
                            <Link>Sales Packages</Link>
                            <Link>Model Number</Link>
                            <Link>Secondary Material</Link>
                            <Link>Configuration</Link>
                            <Link>Upholstery Material</Link>
                            <Link>Upholstery Color</Link>
                        </div>
                    </div>
                </div>
                <div className=' border-t border-r w-1/4 pl-6'>
                    <div className='mt-8'>
                        <h1 className='mb-4 font-semibold '>General</h1>
                        <div className='flex flex-col mb-14 gap-4'>
                            <Link>Sales Packages</Link>
                            <Link>Model Number</Link>
                            <Link>Secondary Material</Link>
                            <Link>Configuration</Link>
                            <Link>Upholstery Material</Link>
                            <Link>Upholstery Color</Link>
                        </div>
                    </div>
                    <div className=''>
                        <h1 className='mb-4 font-semibold'>Product</h1>
                        <div className='flex flex-col mb-14 gap-4'>
                            <Link>Sales Packages</Link>
                            <Link>Model Number</Link>
                            <Link>Secondary Material</Link>
                            <Link>Configuration</Link>
                            <Link>Upholstery Material</Link>
                            <Link>Upholstery Color</Link>
                        </div>
                    </div>
                    <div className=''>
                        <h1 className='mb-4 font-semibold'>Dimentions</h1>
                        <div className='flex flex-col mb-14 gap-4'>
                            <Link>Sales Packages</Link>
                            <Link>Model Number</Link>
                            <Link>Secondary Material</Link>
                            <Link>Configuration</Link>
                            <Link>Upholstery Material</Link>
                            <Link>Upholstery Color</Link>
                        </div>
                    </div>
                    <div className=''>
                        <h1 className='mb-4 font-semibold'>Warranty</h1>
                        <div className='flex flex-col mb-14 gap-4'>
                            <Link>Sales Packages</Link>
                            <Link>Model Number</Link>
                            <Link>Secondary Material</Link>
                            <Link>Configuration</Link>
                            <Link>Upholstery Material</Link>
                            <Link>Upholstery Color</Link>
                        </div>
                    </div>
                </div>
                <div className=' border-t border-r w-1/4 pl-6'>
                    <div className='mt-8'>
                        <h1 className='mb-4 font-semibold'>General</h1>
                        <div className='flex flex-col mb-14 gap-4'>
                            <Link>Sales Packages</Link>
                            <Link>Model Number</Link>
                            <Link>Secondary Material</Link>
                            <Link>Configuration</Link>
                            <Link>Upholstery Material</Link>
                            <Link>Upholstery Color</Link>
                        </div>
                    </div>
                    <div className=''>
                        <h1 className='mb-4 font-semibold'>Product</h1>
                        <div className='flex flex-col mb-14 gap-4'>
                            <Link>Sales Packages</Link>
                            <Link>Model Number</Link>
                            <Link>Secondary Material</Link>
                            <Link>Configuration</Link>
                            <Link>Upholstery Material</Link>
                            <Link>Upholstery Color</Link>
                        </div>
                    </div>
                    <div className=''>
                        <h1 className='mb-4 font-semibold'>Dimentions</h1>
                        <div className='flex flex-col mb-14 gap-4'>
                            <Link>Sales Packages</Link>
                            <Link>Model Number</Link>
                            <Link>Secondary Material</Link>
                            <Link>Configuration</Link>
                            <Link>Upholstery Material</Link>
                            <Link>Upholstery Color</Link>
                        </div>
                    </div>
                    <div className=''>
                        <h1 className='mb-4 font-semibold'>Warranty</h1>
                        <div className='flex flex-col mb-14 gap-4'>
                            <Link>Sales Packages</Link>
                            <Link>Model Number</Link>
                            <Link>Secondary Material</Link>
                            <Link>Configuration</Link>
                            <Link>Upholstery Material</Link>
                            <Link>Upholstery Color</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
