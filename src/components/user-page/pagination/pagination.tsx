import React, { useState } from 'react';
import { Button, HStack, Box, Text } from '@chakra-ui/react';

interface PaginatedListProps {
  itemsPerPage: number; // Количество элементов на страницу
  data: string[]; // Список строк для отображения
}

interface RootObject {
  content: Content[];
  pageable: Pageable;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  sort: Sort;
  first: boolean;
  last: boolean;
  numberOfElements: number;
  empty: boolean;
}


const dataCalled = {

}

const PaginatedList: React.FC<PaginatedListProps> = ({ itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [data, setData] = useState<RootObject>(dataCalled);

  // Общее количество страниц
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Данные для текущей страницы
  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Обработчики переключения страниц
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <Box>
      {/* Список данных для текущей страницы */}
      <Box mb={4}>
        {currentData.map((item, index) => (
          <Box
            key={index}
            p={4}
            mb={2}
            border="1px"
            borderColor="gray.200"
            borderRadius="md"
          >
            <Text>{item}</Text>
          </Box>
        ))}
      </Box>

      {/* Управление пагинацией: только стрелки */}
      <HStack justifyContent="center" spacing={4}>
        <Button
          onClick={handlePrevPage}
          isDisabled={currentPage === 1}
          colorScheme="blue"
          variant="outline"
        >
          Previous
        </Button>
        <Button
          onClick={handleNextPage}
          isDisabled={currentPage === totalPages}
          colorScheme="blue"
          variant="outline"
        >
          Next
        </Button>
      </HStack>
    </Box>
  );
};

export default PaginatedList;
