import React from 'react';
import { Flex, Link, IconButton, Spacer } from '@chakra-ui/react';
import { IoCloseCircleOutline } from "react-icons/io5";

interface DishCardProps {
    title: string;
}

export const DishCard: React.FC<DishCardProps> = ({ title }) => {
    return (
        <Flex
            bg="beige.200"
            w="100%"
            h="3.5vw"
            borderRadius="0.8vw"
            alignItems="center"
            pl="2vw"
            pr="1vw"
        >
            <Link href="/" fontSize="1vw" color="brown.500" textDecoration="underline" fontWeight="700">
                {title}
            </Link>
            <Spacer />
            <IconButton aria-label='Delete' icon={<IoCloseCircleOutline />} />
        </Flex>
    );
};
