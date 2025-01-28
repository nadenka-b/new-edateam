import React from 'react';
import { HStack, Box, IconButton, Flex } from '@chakra-ui/react';
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
      {/* Список данных для текущей страницы */}
      <Flex pl="10vw" pr="10vw" justify="space-between" w="100%">
        {data.content.map((recipe, index) => (
          <DishCard key={index} image={recipe.file.filePath} time={recipe.timeCook} tags={recipe.tags} title={recipe.title} />
        ))}
      </Flex>

      {/* Управление пагинацией: только стрелки */}
      <HStack justifyContent="center" spacing={4}>
        <IconButton
          icon={<IoIosArrowBack />}
          aria-label='Arrow'
          onClick={goToPreviousPage}
          isDisabled={data.first}
          colorScheme="blue"
          variant="outline">
        </IconButton>
        <IconButton
          icon={<IoIosArrowBack style={{ transform: "rotate(180deg)", display: "inline-block" }} />}
          aria-label='Arrow'
          onClick={goToNextPage}
          isDisabled={data.last}
          colorScheme="blue"
          variant="outline">
        </IconButton>
      </HStack>
    </Box>
  );
};
