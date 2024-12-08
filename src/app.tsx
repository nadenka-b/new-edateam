import React from 'react';
import { Global } from '@emotion/react';
import { ChakraProvider } from '@chakra-ui/react';
import { defaultSystem } from "@chakra-ui/react"
import { globalStyles } from './global.style';
import HomePage from './pages/home-page';

const App = () => {
  return (
    <ChakraProvider value={defaultSystem}>
      <Global styles={globalStyles} />
      <HomePage />
    </ChakraProvider>
  );
};

export default App;