import React from 'react';
import {
  Flex,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { NavbarLink } from '.';
import { NavbarLogo } from './NavbarLogo';
import { Container } from 'next/app';
import { NavbarHamburgerButton } from './NavbarHamburgerButton';

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Flex
      as='header'
      height='80px'
      width='full'
      top='0'
      boxShadow='md'
      bg={useColorModeValue('white', 'gray.800')}
      color={useColorModeValue('gray.600', 'white')}
    >
      <Container as={Flex} maxWidth='5xl' align='center'>
        {/* Hamburger Button */}
        <Flex
          display={{ base: 'flex', md: 'none' }}
          flex={{ base: 0, md: 'auto' }}
        >
          <NavbarHamburgerButton onToggle={onToggle} isOpen={isOpen} />
        </Flex>

        {/* Logo */}
        <Flex>
          <NavbarLogo />
        </Flex>
      </Container>
    </Flex>
  );
};
