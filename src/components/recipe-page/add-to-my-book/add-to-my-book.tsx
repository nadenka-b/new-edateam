import React, { useEffect, useState } from "react";
import { Text, VStack, HStack, Box, Icon } from "@chakra-ui/react";

import { FaRegBookmark , FaBookmark  } from "react-icons/fa6";
import { useAddFromFavouritesMutation, useCheckIsFavouriteQuery, useRemoveFromFavouritesMutation } from "../../../__data__/services/apiWithAuth";

interface AddDivProps{
    dishId: number
}

export const AddToMyBook = ({dishId}: AddDivProps) => {
    console.log(dishId)
    const [isAdded, setIsAdded] = useState(false);
    const [addToFavourites] =useAddFromFavouritesMutation();
    const [removeFromFavourites] = useRemoveFromFavouritesMutation();
    const {data: isFavourite, refetch} = useCheckIsFavouriteQuery({dishId: dishId},
         {skip:!dishId , refetchOnMountOrArgChange: true});
    useEffect(()=>{
        if(isFavourite !== undefined){
            setIsAdded(isFavourite);
        }
    },[isFavourite])
    const handleClick = async () => {
        try {
            if (isAdded) {
                await removeFromFavourites({ dishId });
            } else {
                await addToFavourites({ dishId });
            }
            setIsAdded(!isAdded);
            refetch(); 
        } catch (e) {
            console.error(e.message);
        }
    };
    return (
        <VStack align="center" onClick={handleClick} >
            <HStack align="center">
                <Text
                    fontSize="1.2vw"
                    fontWeight={900}
                    fontStyle="italic"
                    color="brown.500"
                >
                    Добавить в мою книгу рецептов
                </Text>
                <Icon
                    as={isFavourite ? FaBookmark : FaRegBookmark}
                    color = "brown.500"
                    w="1.4vw"
                    h="1.8vw"
                />
            </HStack>

            <Box borderBottom="6px solid orange" w="25vw" h="0.01vw" />
        </VStack>
    )
}