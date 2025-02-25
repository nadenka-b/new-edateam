import React from 'react';
import { Flex, Link, IconButton, Spacer } from '@chakra-ui/react';
import { IoCloseCircleOutline } from "react-icons/io5";
import { useRemoveFromFavouritesMutation } from '../../../__data__/services/apiWithAuth';
import { Link as RouteLink } from 'react-router-dom';
import { URLs } from '../../../__data__/urls';

interface DishCardProps {
    title: string;
    idDish: number;
    isFavourite: boolean;
}

export const DishCard: React.FC<DishCardProps> = ({ title, idDish, isFavourite }) => {
    const [removeFromFavourites] = useRemoveFromFavouritesMutation();
    const handleRemoveFavourite = async (dishId) => {
        try {
            await removeFromFavourites({ dishId }).unwrap();
        } catch (error) {
            console.error('Ошибка при удалении из избранного', error);
        }
    };
    return (
        <Flex
            bg="beige.200"
            w="35vw"
            h="3.5vw"
            borderRadius="0.8vw"
            alignItems="center"
            pl="2vw"
            pr="1vw"
        >
            <RouteLink to={URLs.ui.recipe.getUrl(idDish)}>
                <Link href="/" fontSize="1.2vw" color="brown.500" textDecoration="underline" fontWeight="700">
                    {title}
                </Link>
            </RouteLink>
            <Spacer />
            {isFavourite && <IconButton
                onClick={() => handleRemoveFavourite(idDish)}
                color="brown.500"
                bg="transparent"
                aria-label='Delete favourite'
                minW="2.5vw"
                h="2.5vw"
                _hover={{ bg: 'transparent', opacity: 0.7 }}
                icon={<IoCloseCircleOutline fontSize="2.5vw" />}
            />}
        </Flex>
    );
};
