import React from 'react';
import { Flex } from "@chakra-ui/core";

const Container = ({children}) => (
  <Flex
    align="center"
    justify="space-between"
    wrap="wrap"
    pl="6rem"
    pr="6rem"
  >
    {children}
  </Flex>
);

export default Container;
