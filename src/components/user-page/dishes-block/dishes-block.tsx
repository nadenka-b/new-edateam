import React from "react";
import { Image, Text } from "@chakra-ui/react";
import { pan } from "./index"
import { PaginatedList } from '../pagination';
import { DataPage } from "../../../__data__/model/common";

interface DishesBlockProps {
    data: DataPage;
    flagSavedRecipes: boolean;
}

export const DishesBlock: React.FC<DishesBlockProps> = ({ data, flagSavedRecipes }) => {
    return (
        <>
            {data.empty
                ? <>
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
                </>
                :
                <PaginatedList data={data} flagSavedRecipes={flagSavedRecipes} />
            }
        </>
    );
}
