import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from 'react-icons/fa';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

const Footer = () => {
  return (
    <div className='w-full bg-gray-100 py-16'>
      <div className='max-w-[1240px] mx-auto flex flex-col px-4'>
        <div className='sm:flex text-center justify-between items-center'>
          <h1>TRAVELS.</h1>
          <div className='flex justify-between w-full sm:max-w-[280px] my-4'>
            <FaFacebook className='icon' />
            <FaTwitter className='icon' />
            <FaYoutube className='icon' />
            <FaPinterest className='icon' />
            <FaInstagram className='icon' />
          </div>
        </div>
        <div className='flex justify-between'>
          <ul className='lg:flex'>
            <li>About</li>
            <li>Partnerships</li>
            <li>Careers</li>
            <li>Newsroom</li>
            <li>Advertising</li>
          </ul>
          <BrowserRouter>
          <ul className='text-right lg:flex'>
          <Link to=''><li>Home</li></Link>
          <Link to='#destinations'><li>Destinations</li></Link>
          <Link to='#travel'><li>Travel</li></Link>
          <Link to='#view'><li>View</li></Link>
          <Link to='#book'><li>Book</li></Link>
          </ul>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
};

export default Footer;