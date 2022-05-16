import React, {useState} from 'react'
import {BsPerson} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaYoutube} from 'react-icons/fa'
import { BrowserRouter } from 'react-router-dom';
import {HashLink as Link} from "react-router-hash-link";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo,setLogo] = useState(false)
  const handleNav = () => {
    setNav(!nav)
    setLogo(!logo)
  }
  return (
    <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white'>
        <div>
            <h1 onClick={handleNav} className={logo ? 'hidden' : 'block'}>TRAVELS.</h1>
        </div>
        <BrowserRouter>
        <ul className='hidden md:flex'>
          <Link to=''smooth > <li>Home</li> </Link>
          <Link to='#destinations'smooth > <li>Destinations</li> </Link>
          <Link to='#travel' smooth > <li>Travel</li> </Link>
          <Link to='#view'smooth > <li>View</li> </Link>
          <Link to='#book'smooth > <li>Book</li> </Link>
        </ul>
        </BrowserRouter>
        <div className='hidden md:flex'>
          <BiSearch className='mr-2' size={20}/>
          <BsPerson size={20}/>
        </div>

    {/* Hamburger Icon*/}  
        <div onClick={handleNav} className='md:hidden z-10'>
          {nav ? <AiOutlineClose className='text-black' size={20} /> : <HiOutlineMenuAlt4 size={20} />}
        </div>

        {/*Mobile Menu Dropdown*/}
        <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col': 'absolute left-[-100%]'}>
          <ul>
          <h1>TRAVELS.</h1>
          <BrowserRouter>
          <Link to=''smooth > <li>Home</li> </Link>
          <Link to='#destinations'smooth > <li>Destinations</li> </Link>
          <Link to='#travel' smooth > <li>Travel</li> </Link>
          <Link to='#view'smooth > <li>View</li> </Link>
          <Link to='#book'smooth > <li>Book</li> </Link>
          </BrowserRouter>

          <div className="flex flex-col">
            <button className="my-6">Search</button>
            <button>Account</button>
          </div>
          <div className='flex justify-between my-6'>
            <FaFacebook className='icon' />
            <FaTwitter className='icon'/>
            <FaInstagram className='icon'/>
            <FaPinterest className='icon'/>
            <FaYoutube className='icon'/>
          </div>
          </ul>
          
        </div>
    </div>
  )
}

export default Navbar