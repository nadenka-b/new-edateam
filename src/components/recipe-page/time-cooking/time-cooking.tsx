import React from "react";
import { HStack, Text, Icon } from "@chakra-ui/react";
import { AiOutlineHourglass } from "react-icons/ai";

interface TimeCookingProps {
    cookingTime: string;
}

export const TimeCooking: React.FC<TimeCookingProps> = ({ cookingTime }) => {
    return (
        <HStack
            align="center"
            maxW="45vw"
            h="3.9vw"
            borderWidth="0.1vw"
            borderColor="brown.500"
            bg="brown.150"
            borderRadius="1.56vw"
            px="0.5vw"
            mr="7.8vw"
        >
            <Icon as={AiOutlineHourglass} fontSize="2.5vw" color="brown.500" />
            <Text
                fontSize="1.2vw"
                fontWeight={900}
                fontStyle="italic"
                color="brown.500"
            >
                Время приготовления: {cookingTime}
            </Text>
        </HStack>
    );
};
