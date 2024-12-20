import React from 'react'
import { Global } from '@emotion/react'
import { globalStyles } from './global.style'
import { ChakraProvider } from '@chakra-ui/react'
import HomePage from './pages/home-page'

const App = () => {
  return (
    <ChakraProvider>
      <Global styles={globalStyles} />
      <AddRecipePage />
    </ChakraProvider>
  );
};

export default App;