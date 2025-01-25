import React from 'react';
import { Box, VStack } from "@chakra-ui/react";

import { TimeInput } from '../components/add-rp/add-rp-time-input';
import { DishPhoto } from '../components/add-rp/add-rp-dish-photo';
import { SelectedCategories } from '../components/add-rp/add-rp-selected-categories';
import { Ingredients } from '../components/add-rp/add-rp-ingredients';
import { StepAdding } from '../components/add-rp/add-rp-step-adding';
import { Sent } from '../components/add-rp/add-rp-sent';

const AddRecipePage = () => {
    return (
        <>
            <Box
                bg="orange.50"
                w="74vw"
                h="auto"
                mx="auto"
                p="0.3vw"
                my="1em"
                display="flex"
                justifyContent="center"
                transition="all 0.3s ease-in-out"
            >
                <VStack
                    spacing="1.3vw"
                    align="center"
                    transition="all 0.3s ease-in-out"
                >
                    <TimeInput />
                    <DishPhoto />
                    <SelectedCategories />
                    <Ingredients />
                    <VStack
                        spacing={4}
                        align="center"
                        w="100%"
                        p="0.3vw"
                        transition="all 0.3s ease-in-out"
                    >
                        <StepAdding />
                    </VStack>
                    <Sent />
                </VStack>
            </Box>
        </>

    );
};

export default AddRecipePage;
