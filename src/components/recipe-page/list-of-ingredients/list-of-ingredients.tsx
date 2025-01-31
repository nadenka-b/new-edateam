import React from "react";
import { Text, VStack, Box } from "@chakra-ui/react";

interface Ingredient {
    ingredient: {
        title: string;
        measure: string;
    };
    quantity: number;
}

interface ListOfIngredientsProps {
    ingredients: Ingredient[];
}

export const ListOfIngredients: React.FC<ListOfIngredientsProps> = ({ ingredients }) => {
    return (
        <VStack
            w="100%"
            maxW="52vw"
            mx="auto"
            my="4vw"
            borderRadius="0.83vw"
            overflow="hidden"
            spacing={0}
        >
            {ingredients.map((ingredient, index) => (
                <Box
                    key={index}
                    display="flex"
                    alignItems="center"
                    w="100%"
                    px="0.83vw"
                    py="0.6vw"
                    bg={index % 2 === 0 ? "beige.200" : "beige.300"}
                    m={0}
                >
                    <Text
                        fontSize="1.14vw"
                        fontWeight="600"
                        color="brown.500"
                        mr="0.2vw"
                    >
                        {ingredient.ingredient.title}
                    </Text>

                    <Box
                        borderBottom="0.05vw solid brown.500"
                        height="0"
                        flex="1"
                    />
                    <Text
                        fontSize="1.14vw"
                        fontWeight="600"
                        color="brown.500"
                        w="10%"
                        textAlign="left"
                        ml="4"
                    >
                        {ingredient.quantity} {ingredient.ingredient.measure}
                    </Text>
                </Box>
            ))}
        </VStack>
    );
};
