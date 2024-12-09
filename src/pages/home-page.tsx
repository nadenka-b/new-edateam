import React from 'react';
import { Box } from '@chakra-ui/react'
import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { Greetings } from "../components/greetings"
import { CardRecipe } from "../components/card-recipe"
const HomePage = () => {
    return (
        <>
            <Box bg="var(--background-color)">
                <Header />
                <Greetings />
                <Footer />
            </Box>

        </>
    );
};

export default HomePage;
