import React, { useRef } from 'react';
import { Box, Flex, Heading, Button } from '@chakra-ui/react'
import { Greetings } from "../components/home-page/greetings"
import { DishCard } from "../components/home-page/dish-card"

const recipeList = [
    { image: "https://img1.russianfood.com/dycontent/images_upl/644/big_643804.jpg", /*href: `${URLs.ui.recipe.url}#01`,*/ time: "1 час", tags: "завтрак - выпечка и десерты", title: "Блинчики с мясом, сыром и лучком" },
    { image: "https://img1.russianfood.com/dycontent/images_upl/644/big_643804.jpg", /*href: `${URLs.ui.recipe.url}#01`,*/ time: "30 мин", tags: "завтрак - выпечка и десерты", title: "Блинчики с мясом, сыром и лучком" },
    { image: "https://img1.russianfood.com/dycontent/images_upl/644/big_643804.jpg", /*href: `${URLs.ui.recipe.url}#01`,*/ time: "1 час 30 мин", tags: "завтрак - выпечка и десерты", title: "Блинчики с мясом, сыром и лучком" }
];


const HomePage = () => {
    // const [size, setSize] = useState(3);

    // const handleClick = () => {
    //     if (size === 3) {
    //         setSize(9);
    //         return;
    //     }
    //     setSize(3);
    // }
    const sectionRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        console.log(sectionRef);
    };
    return (
        <>
            <Box mb="3vw">
                <Greetings onClick={handleScroll} />
                <Flex direction="column" align="center" mt="3vw">
                    <Heading
                        ref={sectionRef}
                        mb="3vw"
                        fontWeight="800"
                        fontStyle="Italic"
                        color="orange.500"
                        fontSize="3.3vw"
                    >
                        Рецепты
                    </Heading>
                    {/* <PaginatedList size={size}></PaginatedList> */}
                    <Flex pl="10vw" pr="10vw" justify="space-between" w="100%">
                        {recipeList.map((recipe, index) => (
                            <DishCard key={index} image={recipe.image} time={recipe.time} tags={recipe.tags} title={recipe.title} />
                        ))}
                    </Flex>
                    <Button
                        mt="3.1vw"
                        alignContent="center"
                        borderRadius="1.5vw"
                        h="2.9vw"
                        w="13.9vw"
                        fontSize="1.25vw"
                        fontWeight="900"
                        fontStyle="italic"
                        bg="orange.200"
                        color="beige.200"
                        _hover={{ opacity: 0.9, bg: "orange.200" }}
                    >
                        Показать еще
                    </Button>
                </Flex>
            </Box >
        </>
    );
};

export default HomePage;
