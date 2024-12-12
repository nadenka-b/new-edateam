import React from 'react';
import { Box, Text, VStack, HStack, Icon, Image, IconButton, useStepsContext} from "@chakra-ui/react";
import { HiHeart } from "react-icons/hi"

import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { Button } from '../components/ui/button';
import {
    StepsCompletedContent,
    StepsContent,
    StepsItem,
    StepsList,
    StepsNextTrigger,
    StepsPrevTrigger,
    StepsRoot,
} from "../components/ui/steps";


import { Title } from "../components/recipe-page-title/title"
import { Video } from "../components/recipe-page-video/video"
import { Tags } from '../components/recipe-page-tags/tags'
import { TimeCooking } from '../components/recipe-page-time-cooking/time-cooking'
import { AddToMyBook } from '../components/recipe-page-add-to-my-book/add-to-my-book'
import { SectionHeader } from '../components/recipe-page-section-header/section-header'
import { ListOfIngredients } from '../components/recipe-page-list-of-ingredients/list-of-ingredients'

// const ArrowRight = (props) => (
//     <Icon viewBox="0 0 50 80" {...props}>
//         <path
//             d="M5 75L45 39.6367L5 5"
//             stroke="#FF9F5F"
//             strokeWidth="10"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             fill="none"

//         />
//     </Icon>
// );
import step1 from 'D:/КФУ/Edateam_new/new-edateam/src/assets/images/step1.jpg'
import step2 from 'D:/КФУ/Edateam_new/new-edateam/src/assets/images/step2.jpg'
import step3 from 'D:/КФУ/Edateam_new/new-edateam/src/assets/images/step3.jpg'


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
    }
    // {
    //     title: "Шаг №4",
    //     description:
    //         "Лук нарезать и обжарить на сковороде с разогретым растительным маслом (1 ст. л.) на среднем огне в течение 3-х минут.",
    //     image: "/step4.png", // Замените на реальный путь к изображению
    // },
    // {
    //     title: "Шаг №5",
    //     description:
    //         "Добавить фарш, соль, сушеные чеснок и кориандр, молотый чёрный перец. Жарить до готовности на среднем огне 6-7 минут.",
    //     image: "/step5.png", // Замените на реальный путь к изображению
    // },
    // {
    //     title: "Шаг №6",
    //     description:
    //         "Тонкие блины жарить на горячей сковороде с каждой стороны примерно по 1 минуте, до золотистости.",
    //     image: "/step6.png", // Замените на реальный путь к изображению
    // },
    // {
    //     title: "Шаг №7",
    //     description: "На готовые блины выложить по 1 ст. ложке обжаренного фарша.",
    //     image: "/step7.png", // Замените на реальный путь к изображению
    // },
    // {
    //     title: "Шаг №8",
    //     description: "Завернуть блинчики с мясом конвертом.",
    //     image: "/step8.png", // Замените на реальный путь к изображению
    // },
];



const RecipePage = () => {
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

                <StepsRoot defaultValue={0} count={stepsData.length} colorPalette="orange">
                    {/* Список шагов */}
                    <StepsList>
                        {stepsData.map((step, index) => (
                            <StepsItem
                                key={index}
                                index={index}
                                // title={step.title}
                                // style={{
                                //     backgroundColor: "#FF9F5F",  // Изменение фона
                                //     color: "#fff",  // Цвет текста
                                //   }}
                            />
                        ))}
                    </StepsList>

                    {/* Карточка для текущего шага */}
                    {stepsData.map((step, index) => (
                        <StepsContent key={index} index={index}>
                            <HStack
                                align="center"
                                p="6"
                                borderWidth="5px"
                                borderRadius="lg"
                                borderColor="#7E4925"
                                bg="#FFE6C3"
                                mx="auto"
                                textAlign="center"
                                h="453px"
                                w="1441px"
                            >
                                <Image
                                    src={step.image}
                                    borderRadius={30}
                                    w="545px"
                                    h="350px"
                                    alt={step.title}
                                    borderColor="#7E4925"
                                    borderWidth="5px"
                                    borderStyle="solid"
                                />
                                <Text
                                    fontFamily="var(--main-font)"
                                    fontSize="calc(35px * 1.1)"
                                    fontWeight={900}
                                    fontStyle="italic"
                                    color="#7E4925"
                                >
                                    {step.description}
                                </Text>
                            </HStack>
                        </StepsContent>
                    ))}

                    {/* Сообщение о завершении шагов */}
                    <StepsCompletedContent>
                        <VStack>
                            <Text fontSize="xl" fontWeight="bold" color="green.600">
                                Все готово!
                            </Text>
                            <Text>Приятного аппетита!</Text>
                        </VStack>
                    </StepsCompletedContent>

                    {/* Кнопки управления */}
                    <HStack mt="6" justify="center">
                        <StepsPrevTrigger asChild>
                            <Button variant="outline" size="sm">
                                <Icon fontSize="2xl" color="red.700">
                                    <HiHeart />
                                </Icon>
                            </Button>
                        </StepsPrevTrigger>
                        <StepsNextTrigger asChild>
                            <Button variant="outline" size="sm">
                                <Icon fontSize="2xl" color="pink.700">
                                    <HiHeart />
                                </Icon>
                            </Button>
                        </StepsNextTrigger>
                    </HStack>

                </StepsRoot>



            </Box>

        </>
    );
};

export default RecipePage;
