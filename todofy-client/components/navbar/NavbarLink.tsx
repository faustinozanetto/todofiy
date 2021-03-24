import React from 'react';

interface NavbarLinkProps {
  label: string;
  href: string;
}

export const NavbarLink: React.FC<NavbarLinkProps> = ({ label, href }) => {
  return (
    <>
      <a href={href}>
        <h2 className='text-base font-medium text-gray-500 hover:text-gray-900'>
          {label}
        </h2>
      </a>
    </>
  );
};
