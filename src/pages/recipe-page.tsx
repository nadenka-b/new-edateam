import React from 'react';
import { Box, VStack, HStack, useSteps} from "@chakra-ui/react";

import { Header } from '../components/header'
import { Footer } from '../components/footer'


import { Title } from "../components/recipe-page-title/title"
import { Video } from "../components/recipe-page-video/video"
import { Tags } from '../components/recipe-page-tags/tags'
import { TimeCooking } from '../components/recipe-page-time-cooking/time-cooking'
import { AddToMyBook } from '../components/recipe-page-add-to-my-book/add-to-my-book'
import { SectionHeader } from '../components/recipe-page-section-header/section-header'
import { ListOfIngredients } from '../components/recipe-page-list-of-ingredients/list-of-ingredients'
import { StepperComponent } from '../components/recipe-page-stepper-component/stepper-component'

import step1 from 'D:/КФУ/Edateam_new/new-edateam/src/assets/images/step1.jpg'
import step2 from 'D:/КФУ/Edateam_new/new-edateam/src/assets/images/step2.jpg'
import step3 from 'D:/КФУ/Edateam_new/new-edateam/src/assets/images/step3.jpg'
import step4 from 'D:/КФУ/Edateam_new/new-edateam/src/assets/images/step4.jpg'
import step5 from 'D:/КФУ/Edateam_new/new-edateam/src/assets/images/step5.jpg'
import step6 from 'D:/КФУ/Edateam_new/new-edateam/src/assets/images/step6.jpg'
import step7 from 'D:/КФУ/Edateam_new/new-edateam/src/assets/images/step7.jpg'
import step8 from 'D:/КФУ/Edateam_new/new-edateam/src/assets/images/step8.jpg'



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

const RecipePage = () => {
    const { activeStep, setActiveStep, goToNext, goToPrevious } = useSteps({
        index: 0,
        count: stepsData.length,
    });
    return (
        <>
            <Header />

            <VStack align="center" w="full">
                <Title />
                <Video />
                <Tags />
                <HStack mt="23px" justify="center" align="center" mb="53px">
                    <TimeCooking />
                    <AddToMyBook />
                </HStack>
            </VStack>

            <Box
                w="100%"              
                h="auto"             
                bg="#FBD07E"     
                // position="relative" 
                pb="20px"
            >
                <SectionHeader title='Ингредиенты' />
                <ListOfIngredients />
            </Box>

            <Box
                w="100%"
                h="auto"
            >
                <SectionHeader title='Пошаговый рецепт' />
                <StepperComponent  activeStep={activeStep} stepsData={stepsData} setActiveStep={setActiveStep} goToPrevious={goToPrevious} goToNext={goToNext} />
            </Box >
        </>
    );
};

export default RecipePage;
