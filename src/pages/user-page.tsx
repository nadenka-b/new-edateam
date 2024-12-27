import React from 'react';
import { Text, Flex, HStack, Button, VStack, Image, Spacer } from '@chakra-ui/react'
import { PiPencilSimpleBold } from "react-icons/pi";
import { Link } from "react-router-dom"

import { URLs } from "../__data__/urls"

import { CurrentBookmark, UnselectedBookmark, pan, profilePhoto } from '../assets';

const UserPage = () => {
    return (
        <>
            <Flex pl="10vw" pr="10vw" mt="1.3vw" mb="2.6vw" >
                <VStack
                    bg="beige.300"
                    w="41vw"
                    h="41.6vw"
                    border="2px"
                    borderColor="brown.500"
                    borderRadius="30px"
                    alignItems="flex-start"
                >
                    <HStack align="start" pl="4.6vw" spacing="2vw">
                        <Button
                            position="relative"
                            p={0}
                            h="auto"
                            minW="0"
                            background="none" // Без фона
                            border="none" // Убираем границу
                            _hover={{ opacity: 0.95, backgroundColor: "beige.300" }}
                        >
                            <Image src={CurrentBookmark} w="4.6vw" />
                            <Text
                                lineHeight="normal"
                                fontSize="0.8vw"
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
                            <Image src={UnselectedBookmark} w="4.6vw" />
                            <Text
                                lineHeight="normal"
                                fontSize="0.8vw"
                                fontWeight="800"
                                fontStyle="italic"
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
                    <Image alignSelf="center" src={pan} w="13vw" />
                    <Text
                        lineHeight="normal"
                        alignSelf="center"
                        fontSize="1vw"
                        fontWeight="900"
                        fontStyle="Italic"
                        textAlign="center"
                        color="brown.500">
                        Пока здесь ничего нет, но скоро <br />  здесь появятся ваши любимые рецепты
                    </Text>
                </VStack>
                <Spacer />
                <VStack
                    bg="beige.300"
                    w="26vw"
                    h="41.6vw"
                    border="2px"
                    borderColor="brown.500"
                    borderRadius="30px"
                    alignItems="center"
                    pt="2vw"
                    pb="2vw"
                >
                    <Image src={profilePhoto} w="18.75vw" />
                    <Text
                        fontSize="1.6vw"
                        fontWeight="900"
                        textAlign="center"
                        color="brown.500"
                    >
                        Маша Иванова
                    </Text>
                    <Text
                        fontSize="1vw"
                        fontWeight="600"
                        textAlign="center"
                        color="brown.500"
                    >
                        Дата регистрации: 22.12.2024
                    </Text>
                    <Link to={URLs.ui.add_recipe.url} style={{ flex: 1, textDecoration: 'none' }}>
                        <Button
                            mt="5vw"
                            w="80%"
                            h="3.3vw"
                            bg="rgba(126, 73, 37, 0.1)"
                            border="1px"
                            borderColor="brown.500"
                            borderRadius="50px"
                            fontSize="1.3vw"
                            fontWeight="800"
                            textAlign="center"
                            color="brown.500"
                            _hover={{ opacity: 0.9, backgroundColor: "rgba(126, 73, 37, 0.1)" }}
                        >
                            Добавить рецепт
                        </Button>
                    </Link>
                </VStack>
            </Flex>
        </>
    );
};

export default UserPage;
