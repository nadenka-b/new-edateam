import React from 'react';
import { HStack, Box, IconButton, Grid, GridItem } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../../__data__/slices/mainDishesSlice';
import { IoIosArrowBack } from "react-icons/io";
import { DishCard } from '../dish-card'
import { RootObject } from "../../../__data__/model/common"


interface PaginatedListProps {
  data: RootObject;
}

export const PaginatedList: React.FC<PaginatedListProps> = ({ data }) => {
  const dispatch = useDispatch();

  const goToNextPage = () => {
    if (!data.last) {
      dispatch(setCurrentPage(data.number + 1));
    }
  };

  const goToPreviousPage = () => {
    if (!data.first) {
      dispatch(setCurrentPage(data.number - 1));
    }
  };

  return (
    <Box>
      <HStack>
        <IconButton
          bg="transparent"
          color="orange.500"
          _hover={{ opacity: 0.5, color: 'orange.500', bg: 'none' }}
          minW="5vw"
          h="5w"
          icon={<IoIosArrowBack fontSize='5vw' />}
          aria-label='Arrow'
          onClick={goToPreviousPage}
          isDisabled={data.first}
        >
        </IconButton>
        <Grid templateColumns="repeat(3, 1fr)" gap="3.5vw">
          {data.content.map((recipe, index) => (
            <GridItem key={index}>
              <DishCard recipeId={recipe.id} image={recipe.file.filePath} time={recipe.timeCook} tags={recipe.tags} title={recipe.title} />
            </GridItem>
          ))}
        </Grid>
        <IconButton
          bg="transparent"
          color="orange.500"
          _hover={{ opacity: 0.5, color: 'orange.500', bg: 'none' }}
          minW="5vw"
          h="5w"
          icon={<IoIosArrowBack style={{ transform: "rotate(180deg)", display: "inline-block", fontSize: '5vw' }} />}
          aria-label='Arrow'
          onClick={goToNextPage}
          isDisabled={data.last}>
        </IconButton>
      </HStack>
    </Box>
  );
};
