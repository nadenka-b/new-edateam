// import React from 'react';
// import { Box, VStack, HStack } from "@chakra-ui/react";

// import { Title } from '../components/recipe-page/title/title'
// import { Video } from '../components/recipe-page/video/video'
// import { Tags } from '../components/recipe-page/tags/tags'
// import { TimeCooking } from '../components/recipe-page/time-cooking/time-cooking'
// import { AddToMyBook } from '../components/recipe-page/add-to-my-book/add-to-my-book'
// import { SectionHeader } from '../components/recipe-page/section-header/section-header'
// import { ListOfIngredients } from '../components/recipe-page/list-of-ingredients/list-of-ingredients'
// import { StepperComponent } from '../components/recipe-page/recipe-page-stepper-component/stepper-component'


// const RecipePage = () => {
//     return (
//         <>
//             <VStack align="center" w="full">
//                 <Title />
//                 <Video />
//                 <Tags />
//                 <HStack mt="1.2vw" justify="center" align="center" mb="2.5vw">
//                     <TimeCooking />
//                     <AddToMyBook />
//                 </HStack>
//             </VStack>
//             <Box
//                 w="100%"
//                 h="auto"
//                 bg="orange.70"
//                 pb="1.04vw"
//             >
//                 <SectionHeader title='Ингредиенты' />
//                 <ListOfIngredients />
//             </Box>
//             <Box
//                 w="100%"
//                 h="auto"
//             >
//                 <SectionHeader title='Пошаговый рецепт' />
//                 <StepperComponent />
//             </Box >
//         </>
//     );
// };

// export default RecipePage;

import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetRecipeByIdQuery } from '../__data__/service/main-api';
import { Box, VStack, HStack } from "@chakra-ui/react";
import { Title } from '../components/recipe-page/title/title';
import { Video } from '../components/recipe-page/video/video';
import { Tags } from '../components/recipe-page/tags/tags';
import { TimeCooking } from '../components/recipe-page/time-cooking/time-cooking';
import { AddToMyBook } from '../components/recipe-page/add-to-my-book/add-to-my-book';
import { SectionHeader } from '../components/recipe-page/section-header/section-header';
import { ListOfIngredients } from '../components/recipe-page/list-of-ingredients/list-of-ingredients';
import { StepperComponent } from '../components/recipe-page/recipe-page-stepper-component/stepper-component';

const RecipePage = () => {
    const { id } = useParams(); // Получаем ID рецепта из URL
    const { data, error, isLoading } = useGetRecipeByIdQuery(id);
    console.log("Data:", data);
    console.log("Error:", error);
    console.log("Is Loading:", isLoading);
    console.log('Recipe ID:', id); // Для отладки
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    // useEffect(() => {
    //     fetch('http://localhost:8099/stubs/json/recipepage-data/5')
    //         .then((res) => res.json())
    //         .then((data) => console.log(data))
    //         .catch((error) => console.error("Ошибка запроса:", error));
    // }, []);

    return (
        <div>
            {data ? (
                <VStack align="center" w="full">
                    <Title title={data.title} />
                    {/* <Video />
                    <Tags tags={data.tags} />
                    <HStack mt="1.2vw" justify="center" align="center" mb="2.5vw">
                        <TimeCooking timeCook={data.timeCook} />
                        <AddToMyBook />
                    </HStack> */}
                </VStack>
            ) : (
                <p>No data available for this recipe</p>
            )}

            <Box w="100%" h="auto" bg="orange.70" pb="1.04vw">
                <SectionHeader title="Ингредиенты" />
                <ListOfIngredients ingredients={data.dishIngredients} />
            </Box>

            <Box w="100%" h="auto">
                <SectionHeader title="Пошаговый рецепт" />
                <StepperComponent />
            </Box>
        </div>
    );
};

export default RecipePage;
