import React from "react";
import { Box, Flex, Text, VStack, HStack } from "@chakra-ui/react";
import { ImageLogo } from "../image-logo";
import { RegistrationForm } from "../registration-form";


export const Header = () => {
    return (
        <VStack pt="1vw">
            <HStack w="100%" pl="4vw" pr="4vw">
                <Text flex="1"
                    fontSize="1.5vw"
                    fontWeight="600"
                    fontStyle="italic"
                    color="orange.500">
                    Главная
                </Text>
                <Flex flex="1" justifyContent="center" h="5vw">
                    <ImageLogo />
                </Flex>
                <Box display="flex" justifyContent="end" flex="1" >
                    <RegistrationForm />
                </Box>
            </HStack>
            <Box
                mt="1vw"
                borderBottom="3px solid"
                borderColor="orange.200"
                width="90%"
                mx="auto">
            </Box>
        </VStack >
    );
}
