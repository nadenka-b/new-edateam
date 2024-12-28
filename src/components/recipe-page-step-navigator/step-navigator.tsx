import React from "react";
import { Stepper, Step, StepIndicator, StepStatus, StepSeparator, StepNumber, StepTitle, StepIcon, Box } from '@chakra-ui/react';


export const StepNavigator = ({ activeStep, stepsData, setActiveStep }) => (

    <Stepper mb="1vw" index={activeStep} colorScheme="orange" size="lg" w="100%">
        {stepsData.map((step, index) => (
            <Step key={index} onClick={() => setActiveStep(index)} >
                <StepIndicator
                    ml={index === 0 ? 10 : 0}  // Отступ слева для первого шага

                >
                    <StepStatus
                        complete={<StepIcon />}
                        incomplete={<StepNumber color="brown.500" fontSize="1.5vw" />}
                        active={<StepNumber />}
                    />
                </StepIndicator>

                <Box flexShrink="0"
                    mr={index === stepsData.length - 1 ? 10 : 0}  // Отступ справа для последнего шага
                >
                    <StepTitle
                        fontSize="1.3vw"
                        fontWeight="bold"
                        fontStyle="italic"
                        color="brown.500"
                    >{step.title}</StepTitle>
                </Box>

                <StepSeparator />
            </Step>
        ))}
    </Stepper>

);
