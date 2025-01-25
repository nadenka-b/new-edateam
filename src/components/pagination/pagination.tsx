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
  size: number;
  number: number;
  sort: Sort;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}

interface Pageable {
  pageNumber: number;
  pageSize: number;
  sort: Sort;
  offset: number;
  paged: boolean;
  unpaged: boolean;
}

interface Sort {
  sorted: boolean;
  empty: boolean;
  unsorted: boolean;
}

interface Content {
  id: number;
  title: string;
  timeCook: number;
  type: Type;
  file: File;
  tags: FileType[];
  dishIngredients: DishIngredient[];
  linkVideo: string;
  steps: Step[];
  owner: null;
}

interface Step {
  id: number;
  number: number;
  value: string;
  image: File;
}

interface DishIngredient {
  id: number;
  ingredient: Ingredient;
  quantity: number;
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

const dataCalled = {
  content: [
    {
        id: 2,
        title: "title",
        timeCook: 30,
        type: {
            id: 2,
            value: "dish",
            fileTypes: [
                {
                    id: 2,
                    value: "image/png"
                },
                {
                    id: 3,
                    value: "image/svg"
                }
            ]
        },
        file: {
            id: 6,
            fileName: "scheme.png",
            filePath: "./Images/dish-images/1a01464c-481d-4f30-9944-580173b37554_scheme.png",
            type: {
                id: 2,
                value: "image/png"
            },
            dateUploaded: "2024-12-11T17:03:23.328151"
        },
        tags: [
            {
                id: 1,
                value: "ужин"
            }
        ],
        dishIngredients: [
            {
                id: 1,
                ingredient: {
                    id: 1,
                    title: "огурец",
                    measure: "гр."
                },
                quantity: 10.9
            }
        ],
        linkVideo: "https://google.com",
        steps: [
            {
                id: 2,
                number: 1,
                value: "собраться с мыслями",
                image: {
                    id: 7,
                    fileName: "soup.png",
                    filePath: "./Images/steps-images/658f706d-d1cd-4871-b4b6-eb57997a086e_soup.png",
                    type: {
                        id: 2,
                        value: "image/png"
                    },
                    dateUploaded: "2024-12-11T17:03:23.330873"
                }
            }
        ],
        owner: null
    }
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

// eslint-disable-next-line
export const PaginatedList: React.FC<PaginatedListProps> = ({ size }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
// eslint-disable-next-line
  const [data, setData] = useState<RootObject>(dataCalled);

  // нужно добавить useEffect на data!!!!!!!!!!!!!!!!!!


  // Общее количество страниц
  const totalPages = data.totalPages

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
