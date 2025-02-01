import React from "react";
import { Button, HStack, Text } from "@chakra-ui/react";
import { AppDispatch } from "../../../../__data__/store";
import { useDispatch } from "react-redux";
import {
    setCurrentPage,
    setPageSize,
    setIncludeIngredientsTitles,
    setExcludeIngredientsTitles,
    setTag, setCookTime,
    setTitle
} from "../../../../__data__/slices/mainDishesSlice";


interface TagsProps {
    tags: {
        id: number;
        value: string
    }[],
}

export const Tags: React.FC<TagsProps> = ({ tags }) => {
    const dispatch: AppDispatch = useDispatch();
    const displayTags = tags.slice(0, 3);

    const handleClick = (id) => {
        dispatch(setCurrentPage(0));
        dispatch(setPageSize(3));
        dispatch(setIncludeIngredientsTitles([]));
        dispatch(setExcludeIngredientsTitles([]));
        dispatch(setTag(id));
        dispatch(setCookTime(0));
        dispatch(setTitle(''));
    }
    return (
        <HStack>
            <Button
                _active={{ color: "orange.200" }}
                onClick={() => handleClick(displayTags[0].id)}
                fontSize="1vw"
                fontWeight="800"
                fontStyle="italic"
                color="orange.100"
                variant="link"
            >
                {displayTags[0].value}
            </Button>
            {displayTags.slice(1).map((tag) => (
                <>
                    <Text
                        onClick={() => handleClick(tag.id)}
                        fontSize="1vw"
                        fontWeight="800"
                        fontStyle="italic"
                        color="orange.100"
                    >
                        -
                    </Text>
                    <Button
                        _active={{ color: "orange.200" }}
                        fontSize="1vw"
                        fontWeight="800"
                        fontStyle="italic"
                        color="orange.100"
                        variant="link"
                        key={tag.id}>
                        {tag.value}
                    </Button>
                </>

            ))}
        </HStack>
    );
}
