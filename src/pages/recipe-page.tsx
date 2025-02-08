
import React from 'react';
import { Box, VStack, HStack } from "@chakra-ui/react";

import { Title } from '../components/recipe-page/title/title'
import { Video } from '../components/recipe-page/video/video'
import { Tags } from '../components/recipe-page/tags/tags'
import { TimeCooking } from '../components/recipe-page/time-cooking/time-cooking'
import { AddToMyBook } from '../components/recipe-page/add-to-my-book/add-to-my-book'
import { SectionHeader } from '../components/recipe-page/section-header/section-header'
import { ListOfIngredients } from '../components/recipe-page/list-of-ingredients/list-of-ingredients'
import { StepperComponent } from '../components/recipe-page/stepper-component/stepper-component'
import { useParams } from 'react-router-dom';
import { useGetRecipeByIdQuery } from '../__data__/services/mainApi';

const RecipePage = () => {
    const { id } = useParams(); // Получаем ID рецепта из URL
    // console.log(id)
    const { data, error, isLoading } = useGetRecipeByIdQuery({ id });
    console.log("data:", data)

    console.log("Steps data:", data?.steps);
    return (
        <>
            <VStack align="center" w="full">
                <Title title={data?.title } />
                {/* <Video src={data?.linkVideo } /> */}
                <Video src={data?.linkVideo} fallbackImage={data?.image} />
                <Tags tags={data?.tags} />
                <HStack mt="1.2vw" justify="center" align="center" mb="2.5vw">
                    <TimeCooking cookingTime={data?.timeCook || "0 мин"} />
                    <AddToMyBook />
                </HStack>
            </VStack>
            <Box
                w="100%"
                h="auto"
                bg="orange.70"
                pb="1.04vw"
            >
                <SectionHeader title='Ингредиенты' />
                <ListOfIngredients ingredients={data?.dishIngredients || []} />
            </Box>
            <Box
                w="100%"
                h="auto"
            >
                <SectionHeader title='Пошаговый рецепт' />

                <StepperComponent
                    steps={data?.steps?.map(step => ({
                        value: step.value,
                        image: { filePath: step.image?.filePath || "" } // Обрабатываем случай, если image отсутствует
                    })) || []}
                />
                {/* <pre>{JSON.stringify(data?.steps, null, 2)}</pre> */}
                {/* {data.steps && data.steps.length > 0 ? (
                    <StepperComponent
                        steps={data.steps.map(step => ({
                            value: step.value || "Нет описания",
                            image: { filePath: step.image?.filePath || "" }
                        }))}
                    />
                ) : (
                    <div>Шаги не найдены</div>
                )} */}
            </Box >
        </>
    );
};

export default RecipePage;