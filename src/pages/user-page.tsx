import React from 'react';
import { Text, HStack, Button, VStack, Image } from '@chakra-ui/react'
import { CurrentBookmark, UnselectedBookmark, pan, profilePhoto } from '../assets';
import { PiPencilSimpleBold } from "react-icons/pi";

const UserPage = () => {
    return (
        <>
            <HStack pl="150px" pr="150px" mt="25px" mb="50px">
                <VStack
                    bg="beige.300"
                    w="700px"
                    h="750px"
                    border="2px"
                    borderColor="brown.500"
                    borderRadius="30px"
                    alignItems="flex-start"
                >
                    <HStack align="start" pl="100px" spacing="25px">
                        <Button
                            position="relative"
                            p={0}
                            h="auto"
                            minW="0"
                            background="none" // Без фона
                            border="none" // Убираем границу
                            _hover={{ opacity: 0.95, backgroundColor: "beige.300" }}
                        >
                            <Image src={CurrentBookmark} w="90px" />
                            <Text
                                lineHeight="normal"

                                fontSize="16"
                                fontWeight="800"
                                fontStyle="Italic"
                                textAlign="right"
                                position="absolute"
                                top="20%"
                                color="beige.200"
                                transform="rotate(270deg)"
                            >
                                Сохраненные <br /> рецепты
                            </Text>
                        </Button>
                        <Button
                            position="relative"
                            p={0}
                            h="auto"
                            minW="0"
                            background="none" // Без фона
                            border="none" // Убираем границу
                            _hover={{ opacity: 0.95, backgroundColor: "beige.300" }} // Эффект наведения
                        >
                            <Image src={UnselectedBookmark} w="90px" />
                            <Text
                                lineHeight="normal"
                                fontSize="16"
                                fontWeight="800"
                                fontStyle="Italic"
                                textAlign="right"
                                position="absolute"
                                top="15%"
                                color="brown.500"
                                transform="rotate(270deg)"
                            >
                                Мои <br /> рецепты
                            </Text>
                        </Button>
                    </HStack>
                    <Image alignSelf="center" src={pan} />
                    <Text
                        lineHeight="normal"
                        alignSelf="center"
                        fontSize="20"
                        fontWeight="900"
                        fontStyle="Italic"
                        textAlign="center"
                        color="brown.500">
                        Пока здесь ничего нет, но скоро <br />  здесь появятся ваши любимые рецепты
                    </Text>
                </VStack>
                <VStack
                    bg="beige.300"
                    w="450px"
                    h="750px"
                    border="2px"
                    borderColor="brown.500"
                    borderRadius="30px"
                    alignItems="center"
                    pt="80px"
                    pb="80px"
                >
                    <Image src={profilePhoto} />
                    <Text
                        fontSize="30"
                        fontWeight="900"
                        textAlign="center"
                        color="brown.500"
                    >
                        Маша Иванова
                    </Text>
                    <Text
                        fontSize="20"
                        fontWeight="600"
                        textAlign="center"
                        color="brown.500"
                    >
                        Дата регистрации: 22.12.2024
                    </Text>
                    <Button
                        mt="100px"
                        w="80%"
                        bg="rgba(126, 73, 37, 0.1)"
                        border="1px"
                        borderColor="brown.500"
                        borderRadius="50px"
                        fontSize="25"
                        fontWeight="800"
                        textAlign="center"
                        color="brown.500"
                        _hover={{ opacity: 0.9, backgroundColor: "rgba(126, 73, 37, 0.1)" }}
                    >
                        Добавить рецепт
                    </Button>
                </VStack>
            </HStack>
        </>

    );
};

export default UserPage;
