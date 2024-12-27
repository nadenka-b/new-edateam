import React, { useState } from 'react';
import { HStack, Box, Text, IconButton } from '@chakra-ui/react';
import { IoIosArrowBack } from "react-icons/io";

interface PaginatedListProps {
  size: number; // Количество элементов на страницу
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
  measure: string;
}


const dataCalled = {
  content: [
    {
      id: 1,
      title: 'огурец',
      measure: 'гр.',
    },
    {
      id: 2,
      title: 'яйцо',
      measure: 'шт.',
    },
    {
      id: 3,
      title: 'сахар',
      measure: 'ст.л.',
    },
    {
      id: 4,
      title: 'сахар',
      measure: 'ч.л.',
    },
    {
      id: 5,
      title: 'сахар',
      measure: 'гр.',
    },
    {
      id: 6,
      title: 'мука',
      measure: 'гр.',
    },
  ],
  pageable: {
    pageNumber: 0,
    pageSize: 10,
    sort: {
      sorted: false,
      empty: true,
      unsorted: true,
    },
    offset: 0,
    unpaged: false,
    paged: true,
  },
  last: true,
  totalPages: 1,
  totalElements: 5,
  first: true,
  size: 10,
  number: 0,
  sort: {
    sorted: false,
    empty: true,
    unsorted: true,
  },
  numberOfElements: 5,
  empty: false,
}

export const PaginatedList: React.FC<PaginatedListProps> = ({ size }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [data, setData] = useState<RootObject>(dataCalled);

  // нужно добавить useEffect на data!!!!!!!!!!!!!!!!!!


  // Общее количество страниц
  const totalPages = data.totalPages //придет 

  // Данные для текущей страницы
  const currentData = data.content

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
            <Text>{item.title}</Text>
          </Box>
        ))}
      </Box>

      {/* Управление пагинацией: только стрелки */}
      <HStack justifyContent="center" spacing={4}>
        <IconButton
          icon={<IoIosArrowBack />}
          aria-label='Arrow'
          onClick={handlePrevPage}
          isDisabled={data.first}
          colorScheme="blue"
          variant="outline">
        </IconButton>
        <IconButton
          icon={<IoIosArrowBack style={{ transform: "rotate(180deg)", display: "inline-block" }} />}
          aria-label='Arrow'
          onClick={handleNextPage}
          isDisabled={data.last}
          colorScheme="blue"
          variant="outline">
        </IconButton>
      </HStack>
    </Box>
  );
};
