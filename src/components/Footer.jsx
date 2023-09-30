import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <div className='footer border'>
            <div className='container flex flex-col md:flex-row px-6 justify-between mt-10'>
                <div>
                    <h1 className='text-xl font-semibold color-3A3A3A mb-8'>HOMETERIOR.</h1>
                    <p className='color-9F9F9F text-base'>400 University Drive Suite 200 Coral <br /> Gables,<br />
                        FL 33134 USA</p>
                </div>
                <div>
                    <h2 className='mb-8 color-9F9F9F font-medium '>Links</h2>
                    <ul>
                        <Link>Home</Link>
                        <Link>Shop</Link>
                        <Link>About</Link>
                        <Link>Contact</Link>

                    </ul>
                </div>
                <div >
                    <h2 className='mb-8 color-9F9F9F font-medium '>Help</h2>
                    <ul>
                        <Link>Payment Options</Link>
                        <Link>Returns</Link>Link
                        <Link>Privacy Policies</Link>
                    </ul>
                </div>
                <div>
                    <h2 className='mb-8 color-9F9F9F font-medium'>Newsletter</h2>
                    <div>
                        <input type="text" name="" id="" placeholder='Enter Your Email Address' />
                        <button className='ml-4 border-b'>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
