import React from "react";
import { Text, HStack } from "@chakra-ui/react";

export const SectionHeader = ({ title }: { title: string }) => {
    return (
        <HStack
            ml="8.75vw"
            align="center"
            justify="center"
            w="29.3vw"
            h="4.4vw"
            bg="orange.200"
            borderRadius="0 0 1.14vw 1.14vw"
            px="0.2vw"
            mr="7.7vw"
            mb="2.7vw"
        >
            <Text
                fontSize="1.8vw"
                fontWeight={900}
                fontStyle="italic"
                color="beige.200"
                textDecoration="underline"
                textAlign="center"
            >
                {title}
            </Text>
        </HStack>
    )
}