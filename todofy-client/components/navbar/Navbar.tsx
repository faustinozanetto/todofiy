import React from 'react';
import { NavbarLink } from '.';
import { NavbarLogo } from './NavbarLogo';

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <div className='relative bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <div className='flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10'>
          {/* Logo */}
          <div className='flex justify-start lg:w-0 lg:flex-auto'>
            <a href='#'>
              {/* <span className='sr-only'>Workflow</span>
              <img
                className='h-8 w-auto sm:h-10'
                src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                alt=''
              /> */}
              <NavbarLogo />
            </a>
          </div>

          {/* Hamburger Menu Button */}
          <div className='-mr-2 -my-2 md:hidden'>
            <button
              type='button'
              className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
              aria-expanded='false'
            >
              <span className='sr-only'>Open menu</span>

              <svg
                className='h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
          </div>

          {/* Nav Links */}
          <nav className='hidden md:flex space-x-10'>
            <NavbarLink label='Test' href='#' />
            <NavbarLink label='Test' href='#' />
            <NavbarLink label='Test' href='#' />
            <NavbarLink label='Test' href='#' />
          </nav>

          {/* User Buttons */}
          <div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0'>
            <button className='whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900'>
              Sign in
            </button>
            <button className='ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-purple-600 hover:bg-purple-700'>
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
