import React from "react";
import { Image, Text } from "@chakra-ui/react";
import { pan } from '../../../assets';
import { PaginatedList } from '../pagination';

interface DishesBlockProps {
    data: RootObject;
    flagSavedRecipes: boolean;
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

export const DishesBlock: React.FC<DishesBlockProps> = ({ data, flagSavedRecipes }) => {
    return (
        <>
            {data.empty ? <>
                <Image alignSelf="center" src={pan} w="13vw" />
                <Text
                    lineHeight="normal"
                    alignSelf="center"
                    fontSize="1vw"
                    fontWeight="900"
                    fontStyle="Italic"
                    textAlign="center"
                    color="brown.500">
                    <>
                        Пока здесь ничего нет, но скоро <br />здесь появятся ваши
                        {flagSavedRecipes ? ' любимые ' : ' '}
                        рецепты
                    </>
                </Text>
            </> :
                <PaginatedList data={data} />
            }
        </>
    );
}
