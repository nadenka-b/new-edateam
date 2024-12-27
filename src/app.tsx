import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'
import Fonts from './fonts'
import { Header } from './components/header'
import { Footer } from './components/footer'
import { BrowserRouter } from 'react-router-dom'
import { PageRoutes } from './routes'

const App = () => {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Fonts />
        <Header />
        <PageRoutes />
        <Footer />
      </ChakraProvider>
    </BrowserRouter>
  );
};

export default App;