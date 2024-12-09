import React from "react";
import { Box, Text, Button, Input, Flex, Image, Heading, SimpleGrid, GridItem } from "@chakra-ui/react";
import { plate } from "./index"

export const Greetings = () => {
    return (
        <Box position="relative" bg="#FF9F5F" h={320} w="100%" mt={5} px={100} py={5}>
            <Heading size="5xl" fontFamily="var(--main-font)" fontWeight="800" color="var(--background-color)">Простые рецепты<br />на каждый день!</Heading>
            <Heading size="2xl" fontFamily="var(--main-font)" fontWeight="400" color="var(--background-color)">Готовить с нами — это легко и вкусно!</Heading>
            {/* <Flex>
                <Input placeholder="Чего желаете?" bg="white" border="1px" borderColor="orange.300" size="sm" />
                <Button colorScheme="orange" px="6">
                    Найти
                </Button>
            </Flex> */}
            {/* Контейнер для изображения */}
            <Box position="absolute" top="50%" left="80%" transform="translate(-50%, -50%)" zIndex={0} w="400px" h="400px">
                <Image src={plate} alt="Example" objectFit="cover" boxSize="full" />
            </Box>
        </Box>

        // <Box bg="orange.100" w="100%" py="8">
        //     <Flex
        //         maxW="1200px"
        //         mx="auto"
        //         align="center"
        //         justify="space-between"
        //         direction={{ base: "column", md: "row" }}
        //         px="4"
        //     >
        //         {/* Левая часть */}
        //         <Box flex="1">
        //             <Heading as="h1" fontSize={{ base: "2xl", md: "4xl" }} color="orange.700">
        //                 Простые рецепты на каждый день!
        //             </Heading>
        //             <Text mt="4" fontSize="lg" color="orange.600">
        //                 Готовить с нами — это легко и вкусно!
        //             </Text>

        //             {/* Поле ввода и кнопка */}
        //             <Flex mt="6" maxW="400px" gap="2">
        //                 <Input placeholder="Чего желаете?" bg="white" border="1px" borderColor="orange.300" />
        //                 <Button colorScheme="orange" px="6">
        //                     Найти
        //                 </Button>
        //             </Flex>

        //             {/* Кнопка для рецептов */}
        //             <Button
        //                 mt="4"
        //                 bg="orange.400"
        //                 color="white"
        //                 _hover={{ bg: "orange.500" }}
        //             // rightIcon={<Box as="span" ml="1">→</Box>}
        //             >
        //                 К рецептам
        //             </Button>
        //         </Box>

        //         {/* Правая часть */}
        //         <Box flex="1" mt={{ base: "6", md: "0" }} position="relative">
        //             <Box
        //                 w="full"
        //                 h="250px"
        //                 bg="orange.200"
        //                 borderRadius="full"
        //                 position="absolute"
        //                 top="50%"
        //                 left="50%"
        //                 transform="translate(-50%, -50%)"
        //                 zIndex="0"
        //             ></Box>
        //             <Image
        //                 src={plate} // Замените на URL изображения тарелки
        //                 alt="Тарелка с едой"
        //                 zIndex="1"
        //                 position="relative"
        //                 borderRadius="full"
        //                 boxShadow="lg"
        //             />
        //         </Box>
        //     </Flex>
        // </Box>
    );
}
