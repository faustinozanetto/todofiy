import React from 'react';
import { Text } from '@chakra-ui/react';

export const NavbarLogo: React.FC<{}> = ({}) => {
  return (
    <>
      <Text
        as='a'
        fontSize='4xl'
        fontWeight='bold'
        bgClip='text'
        bgGradient='linear(to-l, #7928CA, #FF0080)'
      >
        Todofy
      </Text>
    </>
  );
};
