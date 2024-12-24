import React from "react";
import { Stepper, Step, StepIndicator, StepStatus, StepSeparator, StepNumber, StepTitle, StepIcon, Box } from '@chakra-ui/react';


export const StepNavigator = ({ activeStep, stepsData, setActiveStep }) => (

    <Stepper index={activeStep} colorScheme="orange" size="lg" w="100%">
        {stepsData.map((step, index) => (
            <Step key={index} onClick={() => setActiveStep(index)} mb={10}>
                <StepIndicator
                    ml={index === 0 ? 10 : 0}  // Отступ слева для первого шага

                >
                    <StepStatus
                        complete={<StepIcon />}
                        incomplete={<StepNumber color="#7E4925" fontSize={25} />}
                        active={<StepNumber />}
                    />
                </StepIndicator>

                <Box flexShrink="0"
                    mr={index === stepsData.length - 1 ? 10 : 0}  // Отступ справа для последнего шага
                >
                    <StepTitle
                        fontSize={25}
                        fontWeight={900}
                        fontStyle="italic"
                        color="#7E4925"
                    >{step.title}</StepTitle>
                </Box>

                <StepSeparator />
            </Step>
        ))}
    </Stepper>

);
