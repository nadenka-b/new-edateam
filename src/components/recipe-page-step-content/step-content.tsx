import React from "react";

import { HStack, Box, Image, Text } from '@chakra-ui/react';


export const StepContent = ({ activeStep, stepsData }) => {
    const step = stepsData[activeStep];

    return (
        <Box
            borderWidth="5px"
            borderColor="#7E4925"
            borderRadius={30}
            p="6"
            mb="3vw"
            bg="#FFE6C3"
            w="75vw"
            h="23.5vw"
            textAlign="center"
        >
            <HStack justify="center" align="center" spacing={8}>
                <Image
                    src={step.image}
                    borderRadius={30}
                    w="28.3vw"
                    h="18.2vw"
                    alt={step.title}
                    borderColor="#7E4925"
                    borderWidth="4px"
                />
                <Text
                    fontSize="1.8vw"
                    fontWeight={900}
                    fontStyle="italic"
                    color="#7E4925"
                >
                    {step.description}
                </Text>
            </HStack>
        </Box>
    );
};
