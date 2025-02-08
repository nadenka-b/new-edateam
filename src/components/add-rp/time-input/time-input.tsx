import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { Input, Text, HStack, VStack } from "@chakra-ui/react";

export const TimeInput = () => {
    const { control } = useFormContext();

    return (
        <VStack >
            <Controller
                name="recipeName"
                control={control}
                render={({ field }) => (
                    <Input
                        {...field}
                        border="none"
                        textAlign="center"
                        placeholder="Название рецепта"
                        maxW="30vw"
                        fontFamily="var(--main-font)"
                        fontSize="2.3vw"
                        fontStyle="italic"
                        color="brown.500"
                        fontWeight="700"
                    />
                )}
            />

            <HStack spacing="0.8vw" align="center">
                <Text fontFamily="var(--main-font)" fontStyle="italic" fontSize="1.6vw" fontWeight="bold" color="brown.500">
                    Время приготовления
                </Text>

                <Controller
                    name="hours"
                    control={control}
                    render={({ field }) => (
                        <Input
                            {...field}
                            placeholder="0"
                            w="5.2vw"
                            h="2vw"
                            textAlign="right"
                            border="2px solid"
                            color="brown.500"
                            borderColor="brown.500"
                            borderRadius="0.8vw"
                            _placeholder={{ color: "brown.500" }}
                            fontFamily="var(--main-font)"
                            fontStyle="italic"
                            fontWeight={800}
                            fontSize="1.4vw"
                            type="number"
                            _hover={{ borderColor: "orange.300" }}
                            _focus={{
                                outline: "none",  // Убираем стандартную подсветку
                                borderColor: "orange.500",
                                boxShadow: "0 0 5px orange.500" // Меняем эффект подсветки
                            }}
                        />
                    )}
                />
                <Text fontFamily="var(--main-font)" fontStyle="italic" fontWeight={800} fontSize="1.4vw" color="brown.500">
                    час(ов)
                </Text>
                <Controller
                    name="minutes"
                    control={control}
                    render={({ field }) => (
                        <Input
                            {...field}
                            placeholder="0"
                            w="5.2vw"
                            h="2vw"
                            textAlign="right"
                            border="2px solid"
                            borderColor="brown.500"
                            color="brown.500"
                            borderRadius="0.8vw"
                            _placeholder={{ color: "brown.500" }}
                            fontFamily="var(--main-font)"
                            fontStyle="italic"
                            fontWeight={800}
                            fontSize="1.4vw"
                            type="number"
                            _hover={{ borderColor: "orange.300" }}
                            _focus={{
                                outline: "none",  // Убираем стандартную подсветку
                                borderColor: "orange.500",
                                boxShadow: "0 0 5px orange.500" // Меняем эффект подсветки
                            }}
                        />
                    )}
                />
                <Text fontFamily="var(--main-font)" fontStyle="italic" fontWeight={800} fontSize="1.4vw" color="brown.500">
                    минут
                </Text>
            </HStack>
        </VStack>
    );
};
