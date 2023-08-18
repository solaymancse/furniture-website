import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'


export const Navbar = () => {
    return (
        <div className='container py-5 h-20 w-full flex justify-between items-center'>
            <div className='flex items-center gap-2'>
                <img src={logo} alt="" />
                <h1 className='text-xl font-bold'>Furnihome</h1>
            </div>
            <div className='flex gap-8 items-center'>
                <Link to="home" className='font-md '>Home</Link>
                <Link to="shop">Shop</Link>
                <Link to="about">About</Link>
                <Link to="contact">Contact</Link>
            </div>
            <div className='flex gap-6'>
              <Link>
              <i className='bx bxs-user text-xl'></i>
              </Link>  
              <Link>  <i className='bx bx-search text-xl' ></i></Link>
              <Link>  <i className='bx bx-heart text-xl' ></i></Link>
              <Link>  <i className='bx bx-cart text-xl' ></i></Link>

            </div>
        </div>
    )
}
