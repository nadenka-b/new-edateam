// import React from 'react';
// import { useForm, FormProvider } from 'react-hook-form';
// import { Box, VStack, Button, FormLabel, Input } from "@chakra-ui/react";
// import { useCreateDishMutation } from '../__data__/services/mainApi';

// import { TimeInput } from '../components/add-rp/time-input';
// import { DishPhoto } from '../components/add-rp/dish-photo';
// import { SelectedCategories } from '../components/add-rp/selected-categories';
// import { Ingredients } from '../components/add-rp/ingredients';
// import { StepAdding } from '../components/add-rp/step-adding';

// const AddRecipePage = () => {
//     const methods = useForm({
//         defaultValues: {
//             title: '',
//             linkVideo: '',
//             time: '',
//             photo: null,
//             categories: [],
//             ingredients: [{ id: '', amount: '' }],
//             steps: [{ description: '', image: null }]
//         }
//     });
//     const [createDish, { isLoading, isError }] = useCreateDishMutation();

//     const onSubmit = async (data: any) => {
//         const formData = new FormData();
//         formData.append('title', data.title);
//         formData.append('linkVideo', data.linkVideo);
//         formData.append('timeCooking', data.time);
//         if (data.photo) formData.append('image', data.photo[0]);

//         // Добавляем шаги
//         data.steps.forEach((step, index) => {
//             formData.append(`stepsCooking[${index}].number`, `${index + 1}`);
//             formData.append(`stepsCooking[${index}].value`, step.description);
//             if (step.image) formData.append(`stepsCooking[${index}].image`, step.image[0]);
//         });

//         // Добавляем категории
//         data.categories.forEach((category, index) => {
//             formData.append(`tags[${index}].id`, `${category.id}`);
//             formData.append(`tags[${index}].value`, category.name);
//         });

//         // Добавляем ингредиенты
//         data.ingredients.forEach((ingredient, index) => {
//             formData.append(`ingredientsIds[${index}].id`, `${ingredient.id}`);
//             formData.append(`ingredientsIds[${index}].amount`, `${ingredient.amount}`);
//         });

//         try {
//             const response = await createDish(formData).unwrap();
//             console.log('✅ Рецепт успешно добавлен:', response);
//             alert('Рецепт добавлен!');
//         } catch (error) {
//             console.error('❌ Ошибка при добавлении рецепта:', error);
//         }
//     };

//     return (
//         <FormProvider {...methods}>
//             <Box
//                 as="form"
//                 onSubmit={methods.handleSubmit(onSubmit)}
//                 bg="orange.50"
//                 w="74vw"
//                 h="auto"
//                 mx="auto"
//                 p="0.3vw"
//                 my="1em"
//                 display="flex"
//                 justifyContent="center"
//                 transition="all 0.3s ease-in-out"
//             >
//                 <VStack spacing="1.3vw" align="center" transition="all 0.3s ease-in-out">
//                     <TimeInput />
//                     <FormLabel fontSize="1.2vw" fontWeight="bold" color="brown.500">
//                         Ссылка на видео (необязательно)
//                     </FormLabel>
//                     <Input
//                         placeholder="https://www.youtube.com/watch?v=..."
//                         {...methods.register("linkVideo")}
//                         border="2px solid"
//                         borderColor="brown.500"
//                         borderRadius="15px"
//                         p={2}
//                         w="34vw"
//                         bg="white"
//                     />
//                     <DishPhoto />
//                     <SelectedCategories />
//                     <Ingredients />
//                     <StepAdding />
//                     {/* <Sent /> */}
//                     <Button type="submit" colorScheme="orange" mt={4} isLoading={isLoading} _hover={{ bg: "orange.300" }} >
//                         Отправить
//                     </Button>
//                     {isError && <p style={{ color: 'red' }}>❌ Ошибка при отправке</p>}
//                 </VStack>
//             </Box>
//         </FormProvider>
//     );
// };

// export default AddRecipePage;
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { Box, VStack, Button, FormLabel, Input } from "@chakra-ui/react";
import { useCreateDishMutation } from '../__data__/services/mainApi';

import { TimeInput } from '../components/add-rp/time-input';
import { DishPhoto } from '../components/add-rp/dish-photo';
import { SelectedCategories } from '../components/add-rp/selected-categories';
import { Ingredients } from '../components/add-rp/ingredients';
import { StepAdding } from '../components/add-rp/step-adding';

const AddRecipePage = () => {
    const methods = useForm({
        defaultValues: {
            title: '',
            linkVideo: '',
            time: '',
            photo: null,
            categories: [],
            ingredients: [{ id: '', amount: '' }],
            steps: [{ description: '', image: null }]
        }
    });
    const [createDish, { isLoading, isError }] = useCreateDishMutation();

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('linkVideo', data.linkVideo);
        formData.append('timeCooking', data.time);
        if (data.photo) formData.append('image', data.photo[0]);

        data.steps.forEach((step, index) => {
            formData.append(`stepsCooking[${index}].number`, `${index + 1}`);
            formData.append(`stepsCooking[${index}].value`, step.description);
            if (step.image) formData.append(`stepsCooking[${index}].image`, step.image[0]);
        });

        data.categories.forEach((category, index) => {
            formData.append(`tags[${index}].id`, `${category.id}`);
            formData.append(`tags[${index}].value`, category.name);
        });

        data.ingredients.forEach((ingredient, index) => {
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
                    <FormLabel fontSize="1.2vw" fontWeight="bold" color="brown.500">
                        Ссылка на видео (необязательно)
                    </FormLabel>
                    <Input
                        placeholder="https://www.youtube.com/watch?v=..."
                        {...methods.register("linkVideo")}
                        border="2px solid"
                        borderColor="brown.500"
                        borderRadius="15px"
                        p={2}
                        w="34vw"
                        bg="white"
                    />
                    <DishPhoto />
                    <SelectedCategories />
                    <Ingredients />
                    <StepAdding />
                    <Button type="submit" colorScheme="orange" mt={4} isLoading={isLoading} _hover={{ bg: "orange.300" }} >
                        Отправить
                    </Button>
                    {isError && <p style={{ color: 'red' }}>❌ Ошибка при отправке</p>}
                </VStack>
            </Box>
        </FormProvider>
    );
};

export default AddRecipePage;
