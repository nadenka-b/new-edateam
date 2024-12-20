import React from "react";
import { Box, Flex, Text, VStack, HStack } from "@chakra-ui/react";
import { ImageLogo } from "../image-logo";


export const Header = () => {
    return (
        <VStack pt="10px">
            <HStack w="100%" pl="50px" pr="50px">
                <Text flex="1"
                    fontFamily="var(--main-font)"
                    fontSize="lg"
                    fontWeight="600"
                    fontStyle="Italic"
                    color="var(--color-text-main)">
                    Главная
                </Text>
                <Flex flex="1" justifyContent="center">
                    <ImageLogo />
                </Flex>
                <Text
                    align="end"
                    flex="1"
                    fontFamily="var(--main-font)"
                    fontSize="lg"
                    fontWeight="600"
                    fontStyle="Italic"
                    color="var(--color-text-main)">
                    Регистрация / Вход
                </Text>
            </HStack>
        </VStack >
        // <Box py={4} px={8} position="relative" h="100px">
        //     <Flex align="center" justify="space-between" h="100%">
        //         <Text
        //             fontFamily="var(--main-font)"
        //             fontSize="lg"
        //             fontWeight="600"
        //             fontStyle="Italic"
        //             color="var(--color-text-main)">
        //             Главная
        //         </Text>
        //         <Text
        //             fontFamily="var(--main-font)"
        //             fontSize="lg"
        //             fontWeight="600"
        //             fontStyle="Italic"
        //             color="var(--color-text-main)">
        //             Регистрация / Вход
        //         </Text>
        //     </Flex>
        //     <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" mt={1}>
        //         <ImageLogo />
        //     </Box>
        // </Box>
    );
}
