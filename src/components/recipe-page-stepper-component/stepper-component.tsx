import React from "react";
import { VStack, HStack } from "@chakra-ui/react";
import { StepNavigator } from "../recipe-page-step-navigator/step-navigator";
import { NavigationButtons } from "../recipe-page-navigation-buttons/navigation-buttons";
import { StepContent } from "../recipe-page-step-content/step-content";


export const StepperComponent = ({ activeStep, stepsData, setActiveStep, goToPrevious, goToNext }) => (
    <VStack >
        <StepNavigator activeStep={activeStep} stepsData={stepsData} setActiveStep={setActiveStep} />
        <HStack spacing={6} justify="space-between" w="full" align="center">
            <NavigationButtons
                activeStep={activeStep}
                stepsData={stepsData}
                goToPrevious={goToPrevious}
                position="previous"
            />
            <StepContent activeStep={activeStep} stepsData={stepsData} />
            <NavigationButtons
                activeStep={activeStep}
                stepsData={stepsData}
                goToNext={goToNext}
                position="next"
            />
        </HStack>
    </VStack>
)