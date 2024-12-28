import React from "react";
import { Box, Flex, Image, Text } from '@chakra-ui/react';

interface StepsDataProps {
    activeStep: number;
    stepsData: StepData;
}

interface StepData {
    image: string;
    title: string;
    description: string;
}

export const StepContent: React.FC<StepsDataProps> = ({ activeStep, stepsData }) => {
    const step = stepsData[activeStep];

    return (
        <Box
            borderWidth="0.1vw"
            borderColor="brown.500"
            borderRadius="1vw"
            p="0.3vw"
            mb="3vw"
            bg="orange.50"
            w="75vw"
            h="23.5vw"
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            <Flex ml="3vw" justify="center" align="center" gap="0.4vw">
                <Image
                    src={step.image}
                    borderRadius="1.4vw"
                    w="28.3vw"
                    h="18.2vw"
                    alt={step.title}
                    borderColor="brown.500"
                    borderWidth="0.2vw"
                />
                <Text
                    fontSize="1.8vw"
                    fontWeight="bold"
                    fontStyle="italic"
                    color="brown.500"
                    textAlign="center"
                >
                    {step.description}
                </Text>
            </Flex>
        </Box>
    );
};
