import React, { useState } from 'react';
import { Text, Flex, HStack, Button, VStack, Image, Spacer } from '@chakra-ui/react'
// import { PiPencilSimpleBold } from "react-icons/pi";
import { useGetUserDataQuery, useGetUserFavouritesQuery, useGetUserRecipesQuery } from '../__data__/services/mainApi';
import { Link } from "react-router-dom"

import { URLs } from "../__data__/urls"

import { profilePhoto } from '../assets';
import { Bookmark } from '../components/user-page/bookmark';
import { DishesBlock } from '../components/user-page/dishes-block';
import { RootState } from '../__data__/store';
import { useSelector } from 'react-redux';


const UserPage = () => {
    const [savedRecipes, setSavedRecipes] = useState(true);

    const favouritesPage = useSelector((state: RootState) => state.userDishes.favouritesPage);
    const recipesPage = useSelector((state: RootState) => state.userDishes.recipesPage);
    const { data: userData, error, isLoading } = useGetUserDataQuery({ id: 1 });
    const { data: userFavouritesData } = useGetUserFavouritesQuery({ page: favouritesPage, size: 5 });
    const { data: userRecipesData } = useGetUserRecipesQuery({ page: recipesPage, size: 5 });

    if (isLoading) return <div>Загрузка...</div>;
    if (error) return <div>Ошибка загрузки</div>;
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
                >
                    <HStack pr="17vw" align="start" spacing="2vw" mb="1vw">
                        <Bookmark title={<>Сохраненные<br />рецепты</>} current={savedRecipes} click={() => setSavedRecipes(true)} top="24%" />
                        <Bookmark title={<>Мои<br />рецепты</>} current={!savedRecipes} click={() => setSavedRecipes(false)} top="15%" />
                    </HStack>

                    {savedRecipes
                        ? <DishesBlock data={userFavouritesData} flagSavedRecipes={savedRecipes} />
                        : <DishesBlock data={userRecipesData} flagSavedRecipes={savedRecipes} />
                    }
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
                    <Image src={userData.image.filePath ? userData.image.filePath : profilePhoto} w="18.75vw" />
                    <Text
                        fontSize="1.6vw"
                        fontWeight="900"
                        textAlign="center"
                        color="brown.500"
                    >
                        {userData.login}
                    </Text>
                    {/* <Text
                        fontSize="1vw"
                        fontWeight="600"
                        textAlign="center"
                        color="brown.500"
                    >
                        Дата регистрации: {userData.id}
                    </Text> */}
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
            </Flex >
        </>
    );
};

export default UserPage;