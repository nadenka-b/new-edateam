import React, { useState } from 'react';
import { Text, Flex, HStack, Button, VStack, Image, Spacer } from '@chakra-ui/react'
// import { PiPencilSimpleBold } from "react-icons/pi";
import { Link } from "react-router-dom"

import { URLs } from "../__data__/urls"

import { pan, profilePhoto } from '../assets';
import { Bookmark } from '../components/user-page/bookmark';

const UserPage = () => {
    const [savedRecipes, setSavedRecipes] = useState(true);
    return (
        <>
            <Flex pl="10vw" pr="10vw" mt="1.3vw" mb="2.6vw" >
                <VStack
                    bg="beige.300"
                    w="41vw"
                    h="41.6vw"
                    border="0.15vw solid"
                    borderColor="brown.500"
                    borderRadius="1.56vw"
                    alignItems="flex-start"
                >
                    <HStack align="start" pl="4.6vw" spacing="2vw">
                        <Bookmark title={<>Сохраненные<br />рецепты</>} current={savedRecipes} click={() => setSavedRecipes(true)} top="24%" />
                        <Bookmark title={<>Мои<br />рецепты</>} current={!savedRecipes} click={() => setSavedRecipes(false)} top="15%" />
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
                        <>
                            Пока здесь ничего нет, но скоро <br />здесь появятся ваши
                            {savedRecipes ? ' любимые ' : ' '}
                            рецепты
                        </>
                    </Text>
                </VStack>
                <Spacer />
                <VStack
                    bg="beige.300"
                    w="26vw"
                    h="41.6vw"
                    border="0.15vw solid"
                    borderColor="brown.500"
                    borderRadius="1.56vw"
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
                    <Link to={URLs.ui.add_recipe.url}>
                        <Button
                            mt="5vw"
                            w="20.8vw"
                            h="3.3vw"
                            bg="rgba(126, 73, 37, 0.1)"
                            border="0.1vw solid"
                            borderColor="brown.500"
                            borderRadius="2.6vw"
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