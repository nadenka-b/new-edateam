import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { Image, Text, VStack, HStack, Box, Input, Button, Wrap, WrapItem, IconButton } from "@chakra-ui/react";
import { AiOutlineClose } from "react-icons/ai";
import { Plus } from "./index";

export const Ingredients = () => {
    const { control, handleSubmit, register } = useForm({
        defaultValues: { ingredients: [] }, // Инициализируем список ингредиентов
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "ingredients",
    });

    const onSubmit = (data) => console.log("Отправлено:", data);

    return (
        <VStack as="form" onSubmit={handleSubmit(onSubmit)} spacing={4} align="center" w="100%">
            {/* Заголовок */}
            <Text fontFamily="var(--main-font)" fontSize="1.6vw" fontWeight="bold" color="brown.500" fontStyle="italic">
                Ингредиенты
            </Text>

            {/* Поле ввода ингредиента */}
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
                    {...register("newIngredientName")} // Используем react-hook-form

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
                    {...register("newIngredientQuantity")} // Используем react-hook-form
                />
            </HStack>

            {/* Кнопка для добавления ингредиента */}
            <HStack spacing={2} align="center">
                <Button
                    onClick={() => {
                        const name = document.querySelector('input[name="newIngredientName"]').value;
                        const quantity = document.querySelector('input[name="newIngredientQuantity"]').value;
                        if (name.trim() && quantity.trim()) {
                            append({ name, quantity }); // Добавляем ингредиент в массив
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
            <Wrap spacing="0.8vw" w="26vw" maxW="700px">
                {fields.map((ingredient, index) => (
                    <WrapItem key={ingredient.id}>
                        <HStack
                            border="2px solid"
                            borderColor="brown.500"
                            borderRadius="12px"
                            p="0.8vw"
                            bg="var(--background-color)"
                            fontFamily="var(--main-font)"
                            fontSize="1.3vw"
                            fontWeight="bold"
                            color="brown.500"
                        >
                            <Text>
                                {ingredient.name} - {ingredient.quantity}
                            </Text>
                            <IconButton
                                icon={<AiOutlineClose />}
                                onClick={() => remove(index)}
                                size="sm"
                                variant="ghost"
                                color="brown.500"
                                aria-label="Удалить ингредиент"
                            />
                        </HStack>
                    </WrapItem>
                ))}
            </Wrap>

        </VStack>
    );
};
