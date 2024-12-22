import React, { useState } from 'react';
import { Box, Flex, Heading, Button } from '@chakra-ui/react'
import { Greetings } from "../components/greetings"
import { DishCard } from "../components/dish-card"
import { PaginatedList } from '../components/pagination';

const HomePage = () => {
    const [size, setSize] = useState(3);

    const handleClick = () => {
        if (size === 3) {
            setSize(9);
            return;
        }
        setSize(3);
    }

    return (
        <>
            <Box mb="30px">
                <Greetings />
                <Flex direction="column" align="center" mt={10}>
                    <Heading
                        mb={10}
                        fontFamily="var(--main-font)"
                        fontWeight="800"
                        fontStyle="Italic"
                        color="var(--color-text-main)"
                        fontSize="54px">
                        Рецепты
                    </Heading>
                    {/* <PaginatedList size={size}></PaginatedList> */}
                    <Flex gap={4}>
                        <DishCard />
                        <DishCard />
                        <DishCard />
                    </Flex>
                    <Button
                        mt={10}
                        alignContent="center"
                        borderRadius={30}
                        bg="var(--background-greetings)"
                        h="50px"
                        w="225px"
                        fontFamily="var(--main-font)"
                        fontSize="20px"
                        fontWeight="900"
                        fontStyle="Italic"
                        color="var(--background-color)"
                        _hover={{ opacity: 0.9, bg: "var(--background-greetings)" }}
                    >
                        Показать еще
                    </Button>
                </Flex>
            </Box >
        </>
    );
};

export default HomePage;
