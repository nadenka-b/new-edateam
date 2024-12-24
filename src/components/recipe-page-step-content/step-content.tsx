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
            bg="#FFE6C3"
            w="1441px"
            h="453px"
            textAlign="center"
        >
            <HStack justify="center" align="center" spacing={8}>
                <Image
                    src={step.image}
                    borderRadius={30}
                    w="545px"
                    h="350px"
                    alt={step.title}
                    borderColor="#7E4925"
                    borderWidth="5px"
                />
                <Text
                    fontSize="calc(35px * 1.1)"
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
