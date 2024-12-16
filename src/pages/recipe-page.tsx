import React from 'react';
import {
    Box, Text, VStack, HStack, Image, createIcon, Circle, Button,
    useSteps,
    Step,
    StepIcon,
    StepIndicator,
    StepNumber,
    StepSeparator,
    StepStatus,
    StepTitle,
    Stepper,

} from "@chakra-ui/react";

import { Header } from '../components/header'
import { Footer } from '../components/footer'


import { Title } from "../components/recipe-page-title/title"
import { Video } from "../components/recipe-page-video/video"
import { Tags } from '../components/recipe-page-tags/tags'
import { TimeCooking } from '../components/recipe-page-time-cooking/time-cooking'
import { AddToMyBook } from '../components/recipe-page-add-to-my-book/add-to-my-book'
import { SectionHeader } from '../components/recipe-page-section-header/section-header'
import { ListOfIngredients } from '../components/recipe-page-list-of-ingredients/list-of-ingredients'

const CustomArrowLeftIcon = createIcon({
    displayName: 'ArrowIcon',
    viewBox: '0 0 50 80',
    path: (
        <path
            d="M45 5L5 40.3633L45 75"
            stroke="#FF9F5F"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
        />
    ),
});

const CustomArrowRightIcon = createIcon({
    displayName: 'ArrowIcon',
    viewBox: '0 0 50 80',
    path: (
        <path
            d="M5 75L45 39.6367L5 5"
            stroke="#FF9F5F"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
        />
    ),
});
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
                w="100%"              // Занимает всю ширину экрана
                h="auto"             // Высота 688 пикселей
                bg="#FBD07E"          // Цвет фона FBD07E
                position="relative"   // Устанавливаем относительное позиционирование для будущих элементов, если нужно
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
                <VStack >
                    {/* Stepper Component */}
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
                                        fontFamily="var(--main-font)"
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



                    {/* Navigation Buttons */}
                    <HStack spacing={6} justify="space-between" w="full" align="center">
                        <Button
                            variant="unstyled"
                            boxSize="9px"
                            onClick={goToPrevious}
                            isDisabled={activeStep === 0}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            ml="52px"
                        >
                            <CustomArrowLeftIcon boxSize="70px" />
                        </Button>

                        <Circle
                            size="100px"
                            bg="#FFE6C3"
                            color="#7E4925"
                            fontWeight="bold"
                            fontSize="40px"
                            fontStyle="italic"
                            border="5px solid #7E4925"
                        >
                            {activeStep + 1}
                        </Circle>
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
                                    src={stepsData[activeStep].image}
                                    borderRadius={30}
                                    w="545px"
                                    h="350px"
                                    alt={stepsData[activeStep].title}
                                    borderColor="#7E4925"
                                    borderWidth="5px"
                                />
                                <Text
                                    fontFamily="var(--main-font)"
                                    fontSize="calc(35px * 1.1)"
                                    fontWeight={900}
                                    fontStyle="italic"
                                    color="#7E4925"
                                >
                                    {stepsData[activeStep].description}
                                </Text>
                            </HStack>
                        </Box>

                        <Button
                            variant="unstyled"
                            boxSize="9px"
                            onClick={goToNext}
                            isDisabled={activeStep === stepsData.length - 1}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            mr="52px"
                        >
                            <CustomArrowRightIcon boxSize="70px" />
                        </Button>
                    </HStack>

                    {/* Completion Message */}
                    {/* {activeStep === stepsData.length - 1 && (
                        <Box
                            textAlign="center"
                            mt="20px"
                            p="20px"
                            bg="orange.50"
                            borderRadius="16px"
                            boxShadow="0 8px 20px rgba(255, 159, 95, 0.3)"
                            border="2px solid"
                            borderColor="orange.200"
                        >
                            <Text
                                fontSize="3xl"
                                fontWeight="extrabold"
                                fontFamily="Caveat, cursive" // Декоративный шрифт
                                color="orange.600"
                                mb="12px"
                            >
                                Всё готово! 🥳🍽️
                            </Text>
                            <Text
                                fontSize="2xl"
                                fontWeight="medium"
                                fontFamily="Caveat, cursive"
                                color="orange.500"
                            >
                                Приятного аппетита!
                            </Text>
                        </Box>

                    )} */}
                </VStack>
            </Box>

        </>
    );
};

export default RecipePage;
