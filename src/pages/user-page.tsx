import React from 'react';
import { Text, HStack, Button, VStack, Image } from '@chakra-ui/react'
import { CurrentBookmark, UnselectedBookmark, pan, profilePhoto } from '../assets';
import { PiPencilSimpleBold } from "react-icons/pi";

const UserPage = () => {
    return (
        <>

            <HStack pl="150px" pr="150px" mt="25px" mb="50px">
                <VStack
                    bg="var(--background-card)"
                    w="700px"
                    h="750px"
                    border="2px"
                    borderColor="var(--color-brown)"
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
                            _hover={{ opacity: 0.95, backgroundColor: "var(--background-card)" }}
                        >
                            <Image src={CurrentBookmark} w="90px" />
                            <Text
                                lineHeight="normal"
                                fontFamily="var(--main-font)"
                                fontSize="16"
                                fontWeight="800"
                                fontStyle="Italic"
                                textAlign="right"
                                position="absolute"
                                top="20%"
                                color="var(--background-color)"
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
                            _hover={{ opacity: 0.95, backgroundColor: "var(--background-card)" }} // Эффект наведения
                        >
                            <Image src={UnselectedBookmark} w="90px" />
                            <Text
                                lineHeight="normal"
                                fontFamily="var(--main-font)"
                                fontSize="16"
                                fontWeight="800"
                                fontStyle="Italic"
                                textAlign="right"
                                position="absolute"
                                top="15%"
                                color="var(--color-brown)"
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
                        fontFamily="var(--main-font)"
                        fontSize="20"
                        fontWeight="900"
                        fontStyle="Italic"
                        textAlign="center"
                        color="var(--color-brown)">
                        Пока здесь ничего нет, но скоро <br />  здесь появятся ваши любимые рецепты
                    </Text>
                </VStack>
                <VStack
                    bg="var(--background-card)"
                    w="450px"
                    h="750px"
                    border="2px"
                    borderColor="var(--color-brown)"
                    borderRadius="30px"
                    alignItems="center"
                    pt="80px"
                    pb="80px"
                >
                    <Image src={profilePhoto} />
                    <Text
                        fontFamily="var(--main-font)"
                        fontSize="30"
                        fontWeight="900"
                        textAlign="center"
                        color="var(--color-brown)"
                    >
                        Маша Иванова
                    </Text>
                    <Text
                        fontFamily="var(--main-font)"
                        fontSize="20"
                        fontWeight="600"
                        textAlign="center"
                        color="var(--color-brown)"
                    >
                        Дата регистрации: 22.12.2024
                    </Text>
                    <Button
                        mt="100px"
                        w="80%"
                        bg="rgba(126, 73, 37, 0.1)"
                        border="1px"
                        borderColor="var(--color-brown)"
                        borderRadius="50px"
                        fontFamily="var(--main-font)"
                        fontSize="25"
                        fontWeight="800"
                        textAlign="center"
                        color="var(--color-brown)"
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
