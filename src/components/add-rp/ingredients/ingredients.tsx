import React, { useEffect } from "react";
import { useFormContext, useFieldArray } from "react-hook-form";
import { Text, VStack, HStack, Box, Input, Button, Wrap, WrapItem, IconButton } from "@chakra-ui/react";
import { AiOutlineClose } from "react-icons/ai";
import { FiPlusCircle } from "react-icons/fi";
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
                h="4vw"
                bg="beige.200"
                w="34.3vw"
                align="center"
                border="2px solid"
                borderColor="brown.500"
                borderRadius={15}
                p={2}
            >
                <Input
                    placeholder="Например, курица"
                    border="none"
                    _focus={{ outline: "none" }}
                    fontWeight={700}
                    fontSize="1.25vw"
                    color="brown.500"
                    h="3vw"
                    flex="3"
                    {...register("newIngredientName")}
                />

                <Box w="0.2vw" h="130%" bg="brown.500" />

                <Input
                    h="3vw"
                    type="number"
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
                    _hover={{ opacity: 0.9, color: "orange.300" }}
                    fontSize="1.1vw"
                    color="orange.600"
                    leftIcon={<FiPlusCircle fontSize="2vw" />}
                >
                    Добавить ингредиент
                </Button>
            </HStack>

            {/* Список ингредиентов */}
            <Wrap spacing="0.8vw" w="26vw" maxW="700px">
                {fields.map((ingredient, index) => (
                    <WrapItem key={ingredient.id} bg="beige.200" borderRadius="2vw">
                        <HStack
                            border="0.1vw solid"
                            borderColor="brown.500"
                            borderRadius="1vw"
                            p="0.8vw"
                            bg="beige.200"
                            fontSize="1.3vw"
                            fontWeight="bold"
                            color="brown.500"
                        >
                            <Text>
                                {ingredient.name} - {ingredient.amount}
                            </Text>
                            <IconButton
                                icon={<AiOutlineClose />}
                                onClick={() => remove(index)}
                                color="brown.500"
                                fontSize="2vw"
                                bg="transparent"
                                minW="2vw"
                                h="2vw"
                                _hover={{ opacity: 0.5 }}
                                aria-label="Удалить ингредиент"
                            />
                        </HStack>
                    </WrapItem>
                ))}
            </Wrap>

        </VStack >
    );
};
