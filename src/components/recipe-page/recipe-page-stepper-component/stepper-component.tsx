import React from "react";
import { VStack, HStack , useSteps} from "@chakra-ui/react";
import { StepNavigator } from "../recipe-page-step-navigator/step-navigator";
import { NavigationButtons } from "../recipe-page-navigation-buttons/navigation-buttons";
import { StepContent } from "../recipe-page-step-content/step-content";

import { step1, step2, step3, step4, step5, step6, step7, step8 } from '../../../assets';

const stepsData = [
    {
        title: "Шаг №1",
        description: "Яйца, сахар и соль взбить венчиком до однородной массы.",
        image: step1, // Замените на реальный путь к изображению
    },
    {
        title: "Шаг №2",
        description:
            "Добавить молоко и муку, хорошо перемешать до однородного состояния.",
        image: step2, // Замените на реальный путь к изображению
    },
    {
        title: "Шаг №3",
        description:
            "Добавить воду и растительное масло. Тщательно перемешать блинное тесто и оставить на 1 час.",
        image: step3, // Замените на реальный путь к изображению
    },
    {
        title: "Шаг №4",
        description:
            "Лук нарезать и обжарить на сковороде с разогретым растительным маслом (1 ст. л.) на среднем огне в течение 3-х минут.",
        image: step4, // Замените на реальный путь к изображению
    },
    {
        title: "Шаг №5",
        description:
            "Добавить фарш, соль, сушеные чеснок и кориандр, молотый чёрный перец. Жарить до готовности на среднем огне 6-7 минут.",
        image: step5, // Замените на реальный путь к изображению
    },
    {
        title: "Шаг №6",
        description:
            "Тонкие блины жарить на горячей сковороде с каждой стороны примерно по 1 минуте, до золотистости.",
        image: step6, // Замените на реальный путь к изображению
    },
    {
        title: "Шаг №7",
        description: "На готовые блины выложить по 1 ст. ложке обжаренного фарша.",
        image: step7, // Замените на реальный путь к изображению
    },
    {
        title: "Шаг №8",
        description: "Завернуть блинчики с мясом конвертом.",
        image: step8, // Замените на реальный путь к изображению
    },
];

export const StepperComponent = () => {
    const { activeStep, setActiveStep, goToNext, goToPrevious } = useSteps({
        index: 0,
        count: stepsData.length,
    });
   
    return (
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
}
// export const StepperComponent = ({ activeStep, stepsData, setActiveStep, goToPrevious, goToNext }) => (
//     <VStack >
//         <StepNavigator activeStep={activeStep} stepsData={stepsData} setActiveStep={setActiveStep} />
//         <HStack spacing={6} justify="space-between" w="full" align="center">
//             <NavigationButtons
//                 activeStep={activeStep}
//                 stepsData={stepsData}
//                 goToPrevious={goToPrevious}
//                 position="previous"
//             />
//             <StepContent activeStep={activeStep} stepsData={stepsData} />
//             <NavigationButtons
//                 activeStep={activeStep}
//                 stepsData={stepsData}
//                 goToNext={goToNext}
//                 position="next"
//             />
//         </HStack>
//     </VStack>
// )