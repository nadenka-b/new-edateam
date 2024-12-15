import React from 'react';
import { Box, Flex, Heading, HStack, Button } from '@chakra-ui/react'
import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { Greetings } from "../components/greetings"
import { DishCard } from "../components/dish-card"
import { IoIosArrowBack } from "react-icons/io";


const HomePage = () => {
    return (
        <>
            <Box bg="var(--background-color)">
                <Header />
                <Greetings />
                <Flex direction="column" align="center" mt={10}>
                    <Heading mb={10} fontFamily="var(--main-font)" fontWeight="800" fontStyle="Italic" color="var(--color-text-main)" fontSize="54px">Рецепты</Heading>
                    <Flex gap={4}>
                        <IoIosArrowBack fontSize={70} />
                        <DishCard />
                        <DishCard />
                        <DishCard />
                        <Box style={{ transform: "rotate(180deg)", display: "inline-block" }}>
                            <IoIosArrowBack fontSize={70} />
                        </Box>
                    </Flex>
                    <Button
                        mt={10}
                        alignContent="center"
                        borderRadius={30}
                        bg="var(--background-greetings)"
                        h="50px"
                        w="225px"
                        fontFamily="var(--main-font)"
                        fontSize="20px" fontWeight="900"
                        fontStyle="Italic" color="var(--background-color)"
                    >Показать еще</Button>
                </Flex>
                <Footer />
            </Box >
        </>
    );
};

export default HomePage;
