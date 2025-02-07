import React, { useEffect } from "react";
import { useFormContext, useFieldArray } from "react-hook-form";
import { Image, Text, VStack, HStack, Box, Input, Button, List, ListItem, IconButton } from "@chakra-ui/react";
import { AiOutlineClose } from "react-icons/ai";
import { Plus } from "./index";
import { useLazyGetIngredientsQuery } from "../../../__data__/services/mainApi";

interface FormValues {
    ingredientsIds: {
        id: string;
        name: string;
        amount: string;
    }[];
    newIngredientName: string;
    newIngredientAmount: string;
}


export const Ingredients = () => {
    const { control, register, setValue, watch } = useFormContext<FormValues>();

    const { fields, append, remove } = useFieldArray<FormValues>({
        control,
        name: "ingredientsIds",
    });

    const [getIngredients, { data }] = useLazyGetIngredientsQuery();
    const newIngredientName = watch("newIngredientName");

    useEffect(() => {
        const newIngredientName = watch("newIngredientName") || "";
        if (!newIngredientName.trim()) return;
        const debounceTimeout = setTimeout(() => {
            getIngredients({ title: newIngredientName });
        }, 500);
        return () => clearTimeout(debounceTimeout);
    }, [newIngredientName, getIngredients]);

    const suggestions = data?.content || [];

    return (
        <VStack spacing={4} align="center" w="100%">
            <Text fontFamily="var(--main-font)" fontSize="1.6vw" fontWeight="bold" color="brown.500" fontStyle="italic">
                Ингредиенты
            </Text>
            <HStack
                w="34.3vw"
                align="center"
                border="2px solid"
                borderColor="brown.500"
                borderRadius={15}
                p={2}
                bg="white"
            >
                <Input
                    placeholder="Например, курица"
                    border="none"
                    _focus={{ outline: "none" }}
                    fontWeight={700}
                    fontSize="1.25vw"
                    color="brown.500"
                    h="2vw"
                    flex="3"
                    {...register("newIngredientName")}
                />

                <Box w="2px" h="130%" bg="brown.500" />

                <Input
                    placeholder="0"
                    border="none"
                    _focus={{ outline: "none" }}
                    textAlign="center"
                    fontWeight={700}
                    fontSize="1.25vw"
                    color="brown.500"
                    flex="1"
                    {...register("newIngredientAmount")}
                />
            </HStack>

            {suggestions.length > 0 && (
                <Box border="1px solid brown.500" borderRadius={10} bg="white" w="34.3vw" maxH="200px" overflowY="auto">
                    {suggestions.map((item) => (
                        <Box
                            key={item.id}
                            p={2}
                            _hover={{ bg: "orange.100", cursor: "pointer" }}
                            onClick={() => {
                                setValue("newIngredientName", item.title);
                            }}
                        >
                            {item.title}, {item.measure}
                        </Box>
                    ))}
                </Box>
            )}


            {/* Кнопка для добавления ингредиента */}
            <HStack spacing={2} align="center">
                <Button
                    onClick={() => {
                        const selectedIngredient = suggestions.find((item) => item.title === watch("newIngredientName"));
                        const amount = watch("newIngredientAmount");
                        if (selectedIngredient && amount.trim()) {
                            append({ id: String(selectedIngredient.id), name: selectedIngredient.title, amount });
                            setValue("newIngredientName", "");
                            setValue("newIngredientAmount", "");
                        }
                    }}
                    variant="unstyled"
                    display="flex"
                    _hover={{
                        ".hover-effect": { color: "orange.300", filter: "brightness(1.2)" },
                    }}
                >
                    <Image src={Plus} alt="Добавить" boxSize="30px" mr={2} className="hover-effect" />
                    <Text fontFamily="var(--main-font)" fontSize="1.1vw" fontWeight="bold" color="orange.600" className="hover-effect">
                        Добавить ингредиент
                    </Text>
                </Button>
            </HStack>

            {/* Список ингредиентов */}
            <List spacing={3} w="26vw" maxW="700px">
                {fields.map((ingredient, index) => (
                    <ListItem
                        key={ingredient.id}
                        border="2px solid brown.500"
                        borderRadius="12px"
                        p={4}
                        bg="var(--background-color)"
                        fontFamily="var(--main-font)"
                        fontSize="1.3vw"
                        fontWeight="bold"
                        color="brown.500"
                    >
                        {ingredient.name} - {ingredient.amount}
                        <IconButton
                            icon={<AiOutlineClose />}
                            onClick={() => remove(index)} // Удаляем ингредиент
                            size="sm"
                            variant="ghost"
                            color="brown.500"
                            aria-label="Удалить ингредиент"
                            ml={2}
                        />
                    </ListItem>
                ))}
            </List>
        </VStack>
    );
};
