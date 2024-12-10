import React from 'react';
import { Box, Flex, Button, Heading } from '@chakra-ui/react'
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
                <Flex direction="column" align="center" mt={10}>
                    <Heading mb={10} fontFamily="var(--main-font)" fontWeight="800" fontStyle="Italic" color="var(--color-text-main)" size="5xl">Рецепты</Heading>
                    <Flex>
                        <Box>
                            <Button color="red">Нажми</Button>
                        </Box>
                        <Box>
                            <Button color="red">Нажми</Button>
                        </Box>
                    </Flex>
                </Flex>
                <Footer />
            </Box>

        </>
    );
};

export default HomePage;
