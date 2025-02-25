import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { Box, VStack, Button, FormLabel, Input } from "@chakra-ui/react";
import { useCreateDishMutation } from '../__data__/services/apiWithAuth';

import { TimeInput } from '../components/add-rp/time-input';
import { DishPhoto } from '../components/add-rp/dish-photo';
import { SelectedCategories } from '../components/add-rp/selected-categories';
import { Ingredients } from '../components/add-rp/ingredients';
import { StepAdding } from '../components/add-rp/step-adding';
import { FormCreateRecipe } from "../__data__/model/common"

const AddRecipePage = () => {
    const methods = useForm<FormCreateRecipe>({
        defaultValues: {
            title: '',
            linkVideo: '',
            hours: '',
            minutes: '',
            dishPhoto: null,
            tags: [],
            ingredientsIds: [],
            stepsCooking: []
        }
    });
    const [createDish, { isLoading, isError }] = useCreateDishMutation();

    const onSubmit = async (data: FormCreateRecipe) => {
        const formData = new FormData();
        formData.append('title', data.title);
        if (data.linkVideo) formData.append('linkVideo', data.linkVideo);
        const totalMinutes = (Number(data.hours) || 0) * 60 + (Number(data.minutes) || 0);
        formData.append('timeCooking', String(totalMinutes));
        if (data.dishPhoto) formData.append('image', data.dishPhoto[0]);

        // Добавляем шаги
        data.stepsCooking.forEach((step, index) => {
            formData.append(`stepsCooking[${index}].number`, `${index + 1}`);
            formData.append(`stepsCooking[${index}].value`, step.value);
            if (step.file) formData.append(`stepsCooking[${index}].image`, step.file);
        });

        // Добавляем категории
        data.tags.forEach((tag, index) => {
            formData.append(`tags[${index}].id`, `${tag.id}`);
            formData.append(`tags[${index}].value`, tag.value);
        });

        // Добавляем ингредиенты
        data.ingredientsIds.forEach((ingredient, index) => {
            formData.append(`ingredientsIds[${index}].id`, `${ingredient.id}`);
            formData.append(`ingredientsIds[${index}].amount`, `${ingredient.amount}`);
        });

        try {
            const response = await createDish(formData).unwrap();
            console.log('✅ Рецепт успешно добавлен:', response);
            alert('Рецепт добавлен!');
        } catch (error) {
            console.error('❌ Ошибка при добавлении рецепта:', error);
        }
    };

    return (
        <FormProvider {...methods}>
            <Box
                as="form"
                onSubmit={methods.handleSubmit(onSubmit)}
                bg="orange.50"
                w="74vw"
                h="auto"
                mx="auto"
                p="0.3vw"
                my="1em"
                display="flex"
                justifyContent="center"
                transition="all 0.3s ease-in-out"
            >
                <VStack spacing="1.3vw" align="center" transition="all 0.3s ease-in-out">
                    <TimeInput />
                    <FormLabel fontSize="1.5vw" fontWeight="bold" color="brown.500">
                        Ссылка на видео
                    </FormLabel>
                    <Input
                        {...methods.register("linkVideo")}
                        bg="beige.200"
                        border="2px solid"
                        borderColor="brown.500"
                        borderRadius="1.5vw"
                        color="brown.500"
                        h="4vw"
                        fontSize="1.2vw"
                        fontWeight="600"
                        w="50vw"
                        _hover={{ borderColor: "orange.300" }}
                        _focus={{
                            outline: "none",  // Убираем стандартную подсветку
                            borderColor: "orange.500",
                            boxShadow: "0 0 5px orange.500" // Меняем эффект подсветки
                        }}
                    />
                    <DishPhoto />
                    <SelectedCategories />
                    <Ingredients />
                    <StepAdding />
                    <Button
                        type="submit"
                        bg="orange.500"
                        borderRadius="1.5vw"
                        color="beige.200"
                        mt="0.1vw"
                        mb="1vw"
                        h="4vw"
                        w="10vw"
                        fontSize="1.5vw"
                        isLoading={isLoading}
                        _hover={{ opacity: 0.85 }} >
                        Отправить
                    </Button>
                    {isError && <p style={{ color: 'red' }}>❌ Ошибка при отправке</p>}
                </VStack>
            </Box>
        </FormProvider>
    );
};

export default AddRecipePage;
