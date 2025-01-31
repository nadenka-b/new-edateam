import React from 'react';
import { HStack, Box, IconButton, VStack } from '@chakra-ui/react';
import { DishCard } from '../dish-card'
import { IoIosArrowBack } from "react-icons/io";

interface PaginatedListProps {
  data: RootObject
}

interface RootObject {
  content: Content[];
  pageable: Pageable;
  last: boolean;
  totalPages: number;
  totalElements: number;
  first: boolean;
  size: number;
  number: number;
  sort: Sort;
  numberOfElements: number;
  empty: boolean;
}

interface Pageable {
  pageNumber: number;
  pageSize: number;
  sort: Sort;
  offset: number;
  unpaged: boolean;
  paged: boolean;
}

interface Sort {
  sorted: boolean;
  empty: boolean;
  unsorted: boolean;
}

interface Content {
  id: number;
  title: string;
}


export const PaginatedList: React.FC<PaginatedListProps> = ({ data }) => {
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
      <VStack gap="1.5vw" mb="1.5vw">
        {data.content.map((recipe, index) => (
          <DishCard key={index} title={recipe.title} />
        ))}
      </VStack>
      <HStack justifyContent="center">
        <IconButton
          bg="transparent"
          color="orange.500"
          _hover={{ opacity: 0.5, color: 'orange.500', bg: 'none' }}
          minW="3vw"
          h="3w"
          icon={<IoIosArrowBack fontSize="3vw" />}
          aria-label='Arrow'
          // onClick={handlePrevPage}
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
          // onClick={handleNextPage}
          isDisabled={data.last}>
        </IconButton>
      </HStack>
    </Box>
  );
};