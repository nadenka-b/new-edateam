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
import { Loading } from '../components/loading';

const RecipePage = () => {
    const { id } = useParams();
    const { data, error, isLoading } = useGetRecipeByIdQuery({ id });
    function formatTime(minutes) {
        if (minutes < 60) {
            return `${minutes} мин`;
        }

        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;

        return remainingMinutes > 0
            ? `${hours} ч ${remainingMinutes} мин`
            : `${hours} ч`;
    }
    return (
        <>
            {(isLoading) && <Loading />}
            {(error) && <div>Ошибка загрузки данных</div>}
            <VStack align="center" w="full">
                <Title title={data?.title} />
                <Video src={data?.linkVideo} fallbackImage={data?.file.filePath} />
                <Tags tags={data?.tags} />
                <HStack mt="1.2vw" justify="center" align="center" mb="2.5vw">
                    <TimeCooking cookingTime={formatTime(data?.timeCook || 0)} />
                    <AddToMyBook dishId={data?.id} />
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
                    steps={(data?.steps ? [...data.steps] : [])
                        .sort((a, b) => a.number - b.number)
                        .map(step => ({
                            number: step.number,
                            value: step.value,
                            image: { filePath: step.image?.filePath || "" }
                        }))}
                />

            </Box >
        </>
    );
};

export default RecipePage;