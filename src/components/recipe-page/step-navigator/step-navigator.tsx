import React from "react";
import { Stepper, Step, StepIndicator, StepStatus, StepSeparator, StepNumber, StepTitle, StepIcon, Box } from '@chakra-ui/react';

interface StepNavigatorProps {
    activeStep: number;
    stepsData: StepData;
    setActiveStep: () => void;
}
interface StepData {
    image?: string;
    title?: string;
    description?: string;
}

export const StepNavigator: React.FC<StepNavigatorProps> = ({ activeStep, stepsData, setActiveStep }) => (

    <Stepper mb="1vw" index={activeStep} colorScheme="orange" size="lg" w="100%">
        {stepsData.map((step, index) => (
            <Step key={index} onClick={() => setActiveStep(index)} >
                <StepIndicator //отображает индикатор состояния шага 
                    ml={index === 0 ? 10 : 0}  // Отступ слева для первого шага
                >
                    <StepStatus
                        complete={<StepIcon />} //отображает иконку для завершенного шага
                        incomplete={<StepNumber color="brown.500" fontSize="1.5vw" />} //отображает номер шага для незавершенного шага
                        active={<StepNumber />} //отображает номер шага для активного шага
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
