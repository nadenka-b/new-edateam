import React from "react";
import { Text, HStack } from "@chakra-ui/react";

export const SectionHeader = ({ title }: { title: string }) => {
    return (
        <HStack
            ml="168px"
            align="center"
            justify="center"
            w="563px"
            h="85px"
            bg="#FF9F5F"
            borderRadius="0 0 22px 22px"
            px="4"
            mr="149px"
            mb="calc(53px * 1.1)"
        >
            <Text
                fontSize="calc(35px * 1.1)"
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