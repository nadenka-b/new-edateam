import React from 'react';
import { HStack, Box, Flex, IconButton } from '@chakra-ui/react';
import { DishCard } from '../dish-card'
import { IoIosArrowBack } from "react-icons/io";

interface PaginatedListProps {
  data: RootObject
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
}


export const PaginatedList: React.FC<PaginatedListProps> = ({ data }) => {

  // Общее количество страниц
  // const totalPages = Math.ceil(data.length / itemsPerPage);

  // Обработчики переключения страниц
  // const handleNextPage = () => {
  //   if (currentPage < totalPages) {
  //     setCurrentPage((prev) => prev + 1);
  //   }
  // };

  // const handlePrevPage = () => {
  //   if (currentPage > 1) {
  //     setCurrentPage((prev) => prev - 1);
  //   }
  // };

  return (
    <Box>
      {/* Список данных для текущей страницы */}
      <Flex flexDirection="column" gap="1.5vw" w="100%">
        {data.content.map((recipe, index) => (
          <DishCard key={index} title={recipe.title} />
        ))}
      </Flex>

      {/* Управление пагинацией: только стрелки */}
      <HStack justifyContent="center" spacing={4}>
        <IconButton
          icon={<IoIosArrowBack />}
          aria-label='Arrow'
          // onClick={handlePrevPage}
          isDisabled={data.first}
          colorScheme="blue"
          variant="outline">
        </IconButton>
        <IconButton
          icon={<IoIosArrowBack style={{ transform: "rotate(180deg)", display: "inline-block" }} />}
          aria-label='Arrow'
          // onClick={handleNextPage}
          isDisabled={data.last}
          colorScheme="blue"
          variant="outline">
        </IconButton>
      </HStack>
    </Box>
  );
};