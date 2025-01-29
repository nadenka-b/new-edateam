import React from 'react';
import { HStack, Box, IconButton, Grid, GridItem } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../../__data__/slices/dishesSlice';
import { IoIosArrowBack } from "react-icons/io";
import { DishCard } from '../dish-card'

interface PaginatedListProps {
  data: RootObject;
  currentPage: number;
}

interface RootObject {
  content: Content[];
  last: boolean;
  totalPages: number; //Количество страниц
  totalElements: number; // Сколько всего элементов
  first: boolean;
  size: number; //сколько запрашиваю объектов на странице
  number: number; // Номер страницы
  numberOfElements: number; // Сколько объектов именно на этой странице
  empty: boolean; // пусто или нет 
}

interface Content {
  id: number;
  title: string;
  timeCook: number;
  type: Type;
  file: File;
  tags: FileType[];
  dishIngredients: DishIngredient[];
  events: Event[];
}

interface Event {
  id: number;
  title: string;
  startDate: Date;
  endDate: Date;
}

interface DishIngredient {
  id: number;
  ingredient: Ingredient;
  quantity: number; // количество
}

interface Ingredient {
  id: number;
  title: string;
  measure: string;
}

interface File {
  id: number;
  fileName: string;
  filePath: string;
  type: FileType;
  dateUploaded: string;
}

interface Type {
  id: number;
  value: string;
  fileTypes: FileType[];
}

interface FileType {
  id: number;
  value: string;
}


export const PaginatedList: React.FC<PaginatedListProps> = ({ data, currentPage }) => {
  const dispatch = useDispatch();

  const goToNextPage = () => {
    if (currentPage < data.totalPages) {
      dispatch(setCurrentPage(currentPage + 1));
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 0) {
      dispatch(setCurrentPage(currentPage - 1));
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
              <DishCard image={recipe.file.filePath} time={recipe.timeCook} tags={recipe.tags} title={recipe.title} />
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
