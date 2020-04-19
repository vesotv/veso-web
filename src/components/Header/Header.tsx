import { Flex, Heading, Image } from '@chakra-ui/core';
import React from 'react';
import Logo from '../../assets/images/logo.png';
import style from './Header.module.css';

const Header: React.FunctionComponent = () => (
  <div className={style.Header}>
    <Flex>
      <Heading as="h1" size="lg">
        <Image margin="2px" height="25px" src={Logo} alt="Veso" />
      </Heading>
      <h1>I am a Heading</h1>
    </Flex>
  </div>
);

export default Header;
