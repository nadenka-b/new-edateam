import React, { useState } from 'react';
import { Text, Flex, HStack, Button, VStack, Image, Spacer } from '@chakra-ui/react'
import { useGetUserDataQuery, useGetUserFavouritesQuery, useGetUserRecipesQuery } from '../__data__/services/apiWithAuth';
import { Link, useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../__data__/store';
import { logout } from '../__data__/slices/authSlice';
import { apiWithAuth } from '../__data__/services/apiWithAuth'; // Импорт API
import { URLs } from "../__data__/urls"

import { profilePhoto } from '../assets';
import { Bookmark } from '../components/user-page/bookmark';
import { DishesBlock } from '../components/user-page/dishes-block';
import { Loading } from '../components/loading';
import { getNavigationValue } from '@brojs/cli';

const UserPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [savedRecipes, setSavedRecipes] = useState(true);

    const favouritesPage = useSelector((state: RootState) => state.userDishes.favouritesPage);
    const recipesPage = useSelector((state: RootState) => state.userDishes.recipesPage);
    const { data: userFavouritesData, error: errorFavouritesData, isLoading: isLoadingFavouritesData } = useGetUserFavouritesQuery({ page: favouritesPage });
    const { data: userRecipesData, error: errorRecipesData, isLoading: isLoadingRecipesData } = useGetUserRecipesQuery({ page: recipesPage });
    const { data: userData, error: errorUserData, isLoading: isLoadingUserData } = useGetUserDataQuery({ id: id });

    const handleLogout = () => {
        dispatch(logout());
        dispatch(apiWithAuth.util.resetApiState());
    };
    if (errorFavouritesData || errorRecipesData || errorUserData) return <div>Ошибка загрузки</div>;
    if (isLoadingFavouritesData || isLoadingRecipesData || isLoadingUserData) return <Loading />;

    let nameUser = "";
    if (userData.name && userData.surname) {
        nameUser = `${userData.name} ${userData.surname}`;
    }

    const isEnabledAddDish = getNavigationValue('new-edateam.add-recipe');

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
                        ? <DishesBlock data={userFavouritesData} flagSavedRecipes={savedRecipes} isFavourite={true} />
                        : <DishesBlock data={userRecipesData} flagSavedRecipes={savedRecipes} isFavourite={false} />
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
                    <Image
                        src={userData.image ? `${URLs.api.images}${userData.image.filePath.slice(1)}` : profilePhoto}
                        w="18.75vw"
                        maxW="18.75vw"
                        maxH="18.75vw"
                        borderRadius="1vw"
                        border={userData.image ? "0.2vw solid" : "none"}
                        borderColor="brown.500"
                    />
                    <Text
                        fontSize="1.6vw"
                        fontWeight="900"
                        textAlign="center"
                        color="brown.500"
                    >
                        {nameUser ? nameUser : userData.login}
                    </Text>
                    <Text
                        fontSize="1.2vw"
                        fontWeight="600"
                        textAlign="center"
                        color="brown.500"
                    >
                        Дата регистрации: {userData.dateRegistration}
                    </Text>
                    {isEnabledAddDish && <Link to={URLs.ui.add_recipe.url}>
                        <Button
                            mt="4vw"
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
                    </Link>}
                    <Link to={URLs.baseUrl}>
                        <Button
                            onClick={handleLogout}
                            variant="link"
                            color="brown.500"
                            fontSize="1.3vw"
                        >
                            Выйти из аккаунта
                        </Button>
                    </Link>
                </VStack>
            </Flex >
        </>
    );
};

export default UserPage;