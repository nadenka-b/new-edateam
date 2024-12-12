import React from 'react';
import { Global } from '@emotion/react';
import { ChakraProvider } from '@chakra-ui/react';
import { defaultSystem } from "@chakra-ui/react"
import { globalStyles } from './global.style';
import HomePage from './pages/home-page';
import RecipePage from './pages/recipe-page';

const App = () => {
  return (
    <ChakraProvider value={defaultSystem}>
      <Global styles={globalStyles} />
      <RecipePage />
    </ChakraProvider>
  );
};

export default App;