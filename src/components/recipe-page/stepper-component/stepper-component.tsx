import React, { useState } from "react";
import { VStack, HStack } from "@chakra-ui/react";
import { StepNavigator } from "../step-navigator/step-navigator";
import { NavigationButtons } from "../navigation-buttons/navigation-buttons";
import { StepContent } from "../step-content/step-content";

interface Step {
    value: string; // Описание шага
    image?: { filePath?: string }; // Опциональное изображение
}

interface StepperComponentProps {
    steps: Step[]; // Массив шагов
}

export const StepperComponent: React.FC<StepperComponentProps> = ({ steps = [] }) => {
    const [activeStep, setActiveStep] = useState(0); // Используем useState для активации шага

    // Функции для смены шагов с учетом границ
    const nextStep = () => setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
    const prevStep = () => setActiveStep((prev) => Math.max(prev - 1, 0));

    if (steps.length === 0) {
        return <p>Нет шагов</p>;
    }

    return (
        <VStack w="100%" spacing={4}>
            <StepNavigator activeStep={activeStep} stepsData={steps} setActiveStep={setActiveStep} />

            <HStack spacing={6} justify="space-between" w="full" align="center">
                <NavigationButtons
                    activeStep={activeStep}
                    stepsData={steps}
                    goToPrevious={prevStep} // Используем обновленную функцию
                    position="previous"
                />

                {/* Отображение текущего шага */}
                <StepContent activeStep={activeStep} stepsData={steps} />

                <NavigationButtons
                    activeStep={activeStep}
                    stepsData={steps}
                    goToNext={nextStep} // Используем обновленную функцию
                    position="next"
                />
            </HStack>
        </VStack>
    );
};
