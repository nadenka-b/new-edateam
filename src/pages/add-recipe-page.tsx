import React from 'react';
import { Box, Input, VStack } from "@chakra-ui/react";

import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { TimeInput } from '../components/add-rp-time-input';
import { DishPhoto } from '../components/add-rp-dish-photo';
import { SelectedCategories } from '../components/add-rp-selected-categories';
import { Ingredients } from '../components/add-rp-ingredients';
import { StepAdding } from '../components/add-rp-step-adding';
import { Sent } from '../components/add-rp-sent';

const AddRecipePage = () => {
    return (
        <>
            <Header />
            <Box
                bg="var(--background-card)"
                w={{
                    lg: "45em",
                    xl: "60em",
                    "2xl": "70em",
                }}
                h="auto"
                mx="auto"
                p={{
                    lg: "2em",
                    xl: "2.5em",
                }}
                display="flex"
                justifyContent="center"
                transition="all 0.3s ease-in-out"
            >
                <VStack
                    spacing={{
                        lg: "1.5em",
                        xl: "2em",
                    }}
                    align="center"
                    transition="all 0.3s ease-in-out"
                >
                    <Input
                        placeholder="Название рецепта"
                        size="lg"
                        maxW={{
                            lg: "10em",
                            xl: "10em",
                        }}
                        fontFamily="var(--main-font)"
                        fontSize={{
                            lg: "1.5em",
                            xl: "2em",
                        }}
                        fontStyle="italic"
                        transition="all 0.3s ease-in-out"
                    />
                    <TimeInput />
                    <DishPhoto />
                    <SelectedCategories />
                    <Ingredients />
                    <VStack
                        spacing={{
                            lg: "0.5em",
                            xl: "1em",
                        }}
                        align="center"
                        w="100%"
                        p={{
                            lg: "1.5em",
                            xl: "1em",
                        }}
                        transition="all 0.3s ease-in-out"
                    >
                        <StepAdding />
                    </VStack>
                    <Sent />
                </VStack>
            </Box>
            <Footer />
        </>

    );
};

export default AddRecipePage;
