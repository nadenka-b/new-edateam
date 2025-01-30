// import React from "react";
// import { Input, Text, HStack } from "@chakra-ui/react";

// export const TimeInput = () => {
//     return (
//         <>
//             <Input
//                 placeholder="Название рецепта"
//                 size="7vw"
//                 maxW="26vw"
//                 fontFamily="var(--main-font)"
//                 fontSize="2.3vw"
//                 fontStyle="italic"
//                 transition="all 0.3s ease-in-out"
//             />
//             <HStack
//                 spacing="0.8vw"
//                 align="center" 
//                 >
//                 <Text
//                     fontFamily="var(--main-font)"
//                     fontStyle="italic"
//                     fontSize="1.6vw"
//                     fontWeight="bold"
//                     color="brown.500"
//                     mr={10}>
//                     Время приготовления
//                 </Text>

//                 <Input
//                     placeholder="0"
//                     size="sm"
//                     borderRadius="0.8vw"
//                     w="5.2vw"
//                     h="2vw"
//                     textAlign="right"
//                     border="2px solid"
//                     borderColor="brown.500"
//                     _placeholder={{ color: "brown.500" }}
//                     fontFamily="var(--main-font)" fontStyle="italic" fontWeight={800}
//                     fontSize="1.4vw"
//                 />
//                 <Text
//                     fontFamily="var(--main-font)"
//                     fontStyle="italic"
//                     fontWeight={800}
//                     fontSize="1.4vw"
//                     color="brown.500">
//                     час(ов)
//                 </Text>

//                 <Input
//                     placeholder="0"
//                     borderRadius="0.8vw"
//                     w="5.2vw"
//                     h="2vw"
//                     textAlign="right"
//                     border="2px solid"
//                     borderColor="brown.500"
//                     _placeholder={{ color: "brown.500" }}
//                     fontFamily="var(--main-font)" fontStyle="italic" fontWeight={800}
//                     fontSize="1.4vw"
//                 />
//                 <Text
//                     fontFamily="var(--main-font)"
//                     fontStyle="italic"
//                     fontWeight={800}
//                     fontSize="1.4vw"
//                     color="brown.500">
//                     минут
//                 </Text>
//             </HStack>
//         </>
//     )
// }
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Input, Text, HStack, VStack } from "@chakra-ui/react";

export const TimeInput = () => {
    const { control, handleSubmit, watch } = useForm({
        defaultValues: {
            recipeName: "",
            hours: "",
            minutes: "",
        },
    });

    const onSubmit = (data) => {
        console.log("Форма отправлена:", data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <VStack align="start" spacing="1.5vw">
                {/* Название рецепта */}
                <Controller
                    name="recipeName"
                    control={control}
                    render={({ field }) => (
                        <Input
                            {...field}
                            placeholder="Название рецепта"
                            maxW="26vw"
                            fontFamily="var(--main-font)"
                            fontSize="2.3vw"
                            fontStyle="italic"
                            transition="all 0.3s ease-in-out"
                        />
                    )}
                />

                {/* Время приготовления */}
                <HStack spacing="0.8vw" align="center">
                    <Text fontFamily="var(--main-font)" fontStyle="italic" fontSize="1.6vw" fontWeight="bold" color="brown.500">
                        Время приготовления
                    </Text>

                    {/* Часы */}
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
                                borderColor="brown.500"
                                borderRadius="0.8vw"
                                _placeholder={{ color: "brown.500" }}
                                fontFamily="var(--main-font)"
                                fontStyle="italic"
                                fontWeight={800}
                                fontSize="1.4vw"
                                type="number"
                            />
                        )}
                    />
                    <Text fontFamily="var(--main-font)" fontStyle="italic" fontWeight={800} fontSize="1.4vw" color="brown.500">
                        час(ов)
                    </Text>

                    {/* Минуты */}
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
                                borderRadius="0.8vw"
                                _placeholder={{ color: "brown.500" }}
                                fontFamily="var(--main-font)"
                                fontStyle="italic"
                                fontWeight={800}
                                fontSize="1.4vw"
                                type="number"
                            />
                        )}
                    />
                    <Text fontFamily="var(--main-font)" fontStyle="italic" fontWeight={800} fontSize="1.4vw" color="brown.500">
                        минут
                    </Text>
                </HStack>

                {/* Кнопка отправки */}
                {/* <Button type="submit" colorScheme="orange" size="lg">
                    Сохранить
                </Button> */}
            </VStack>
        </form>
    );
};
