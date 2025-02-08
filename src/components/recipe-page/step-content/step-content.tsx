import React from "react";
import { Box, Flex, Image, Text } from '@chakra-ui/react';

interface StepsDataProps {
    activeStep: number;
    stepsData: StepData[]; // Update to handle an array of StepData
}

interface StepData {
    value: string; // Recipe step description
    image: {
        filePath: string; // Image URL
    };
}

export const StepContent: React.FC<StepsDataProps> = ({ activeStep, stepsData }) => {
    const step = stepsData[activeStep]; // Get the step by activeStep index

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
            <Flex ml="3vw" justify="start" align="center" gap="0.4vw">
                {step.image &&
                    <Image
                        src={`http://5.35.81.22/${step.image?.filePath.slice(1)}`} // Image source URL
                        borderRadius="1.4vw"
                        w="28.3vw"
                        h="18.2vw"
                        alt={step.value} // Description as alt text
                        borderColor="brown.500"
                        borderWidth="0.2vw"
                    />
                }
                <Text
                    fontSize="1.8vw"
                    fontWeight="bold"
                    fontStyle="italic"
                    color="brown.500"
                    textAlign="center"
                >
                    {step.value} {/* Description of the step */}
                </Text>
            </Flex>
        </Box>
    );
};
