import React from 'react'
import { Global } from '@emotion/react'
import { globalStyles } from './global.style'
import { ChakraProvider } from '@chakra-ui/react'
import { Header } from './components/header'
import { Footer } from './components/footer'
import HomePage from './pages/home-page'
import UserPage from './pages/user-page'

const App = () => {
  return (
    <ChakraProvider>
      <Global styles={globalStyles} />
      <Header />
      <HomePage />
      <Footer />
    </ChakraProvider>
  );
};

export default App;