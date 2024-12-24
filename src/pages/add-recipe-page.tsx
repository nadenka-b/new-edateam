import React from 'react';
import { Box, Input, VStack } from "@chakra-ui/react";

import { TimeInput } from '../components/add-rp-time-input';
import { DishPhoto } from '../components/add-rp-dish-photo';
import { SelectedCategories } from '../components/add-rp-selected-categories';
import { Ingredients } from '../components/add-rp-ingredients';
import { StepAdding } from '../components/add-rp-step-adding';
import { Sent } from '../components/add-rp-sent';

const AddRecipePage = () => {
    return (
        <>
            <Box
                bg="beige.300"
                w="1419px"
                h="auto"
                mx="auto"
                p={6}
                display="flex"
                justifyContent="center"

            >
                <VStack spacing={25} align="center">
                    <Input
                        placeholder="Название рецепта"
                        size="lg"
                        maxW={500}
                        fontSize={50}
                        fontStyle="italic"
                    />
                    <TimeInput />
                    <DishPhoto />
                    <SelectedCategories />
                    <Ingredients />
                    <VStack spacing={6} align="center" w="100%" p={6}>
                        <StepAdding />
                    </VStack>
                    <Sent />
                </VStack >
            </Box >
        </>
    );
};

export default AddRecipePage;
