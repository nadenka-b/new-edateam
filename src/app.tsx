import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'
import Fonts from './fonts'
import { Header } from './components/header'
import { Footer } from './components/footer'
import HomePage from './pages/home-page'
import RecipePage from './pages/recipe-page'
import AddRecipePage from './pages/add-recipe-page'
import UserPage from './pages/user-page'

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Header />
      <RecipePage />
      <Footer />
    </ChakraProvider>
  );
};

export default App;