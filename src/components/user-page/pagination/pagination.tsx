import React from 'react';
import { HStack, IconButton, VStack } from '@chakra-ui/react';
import { DishCard } from '../dish-card'
import { IoIosArrowBack } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { setFavouritesPage, setRecipesPage } from '../../../__data__/slices/userDishesSlice';
import { DataPage } from "../../../__data__/model/common"
import { AppDispatch } from '../../../__data__/store';

interface PaginatedListProps {
  data: DataPage
  flagSavedRecipes: boolean;
  isFavourite: boolean;
}

export const PaginatedList: React.FC<PaginatedListProps> = ({ data, flagSavedRecipes, isFavourite }) => {
  const dispatch: AppDispatch = useDispatch();

  const goToNextPage = () => {
    if (!data.last) {
      if (flagSavedRecipes) {
        dispatch(setFavouritesPage(data.number + 1))
      }
      else {
        dispatch(setRecipesPage(data.number + 1));
      }
    };
  }

  const goToPreviousPage = () => {
    if (!data.first) {
      if (flagSavedRecipes) {
        dispatch(setFavouritesPage(data.number - 1))
      }
      else {
        dispatch(setRecipesPage(data.number - 1));
      }
    };
  }

  return (
    <VStack position="relative" h="100%">
      <VStack gap="1.5vw" mb="1.5vw">
        {data.content.map((recipe, index) => (
          <DishCard key={index} title={recipe.title} idDish={recipe.id} isFavourite={isFavourite} />
        ))}
      </VStack>
      <HStack justifyContent="center" position="absolute" bottom="2vw">
        <IconButton
          bg="transparent"
          color="orange.500"
          _hover={{ opacity: 0.5, color: 'orange.500', bg: 'none' }}
          minW="3vw"
          h="3w"
          icon={<IoIosArrowBack fontSize="3vw" />}
          aria-label='Arrow'
          onClick={goToPreviousPage}
          isDisabled={data.first}>
        </IconButton>
        <IconButton
          bg="transparent"
          color="orange.500"
          _hover={{ opacity: 0.5, color: 'orange.500', bg: 'none' }}
          minW="3vw"
          h="3w"
          icon={<IoIosArrowBack style={{ transform: "rotate(180deg)", display: "inline-block", fontSize: "3vw" }} />}
          aria-label='Arrow'
          onClick={goToNextPage}
          isDisabled={data.last}>
        </IconButton>
      </HStack>
    </VStack>
  );
};