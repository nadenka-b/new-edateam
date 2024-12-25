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
            bg="#FF9F5F"
            borderRadius="0 0 22px 22px"
            px="4"
            mr="7.7vw"
            mb="2.7vw"
        >
            <Text
                fontSize="1.8vw"
                fontWeight={900}
                fontStyle="italic"
                color="#FFF0DA"
                textDecoration="underline"
                textAlign="center"
            >
                {title}
            </Text>
        </HStack>
    )
}