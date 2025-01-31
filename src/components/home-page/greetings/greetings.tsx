import React, { useState } from "react";
import { Box, Button, Input, Image, Heading, HStack, Flex } from "@chakra-ui/react";
import { plate } from "./index"
import { FaArrowRight } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../__data__/store";
import { setTitle, setCurrentPage } from "../../../__data__/slices/dishesSlice";

interface GreetingsProps {
    onClick: () => void;
}

export const Greetings: React.FC<GreetingsProps> = ({ onClick }) => {
    const dispatch: AppDispatch = useDispatch();
    const [inputValue, setInputValue] = useState("");

    const handleSearch = () => {
        dispatch(setTitle(inputValue));
        dispatch(setCurrentPage(0));
    }
    return (
        <Box position="relative" bg="orange.200" h="23vw" mt="1.8vw" px="5.2vw" pt="1.5vw">
            <Flex>
                <Box>
                    <Heading
                        fontSize="3.6vw"
                        fontWeight="800"
                        fontStyle="italic"
                        color="beige.200"
                    >
                        Простые рецепты<br />на каждый день!
                    </Heading>
                    <Heading
                        mt="1vw"
                        fontSize="1.25vw"
                        fontWeight="400"
                        color="beige.200"
                    >
                        Готовить с нами — это легко и вкусно!
                    </Heading>
                    <HStack
                        bg="beige.200"
                        borderRadius="2.6vw"
                        w="35vw"
                        mt="3.5vw"
                        pl="0.3vw"
                        h="3vw"
                    >
                        <Input
                            onChange={(e) => setInputValue(e.target.value)}
                            h="100%"
                            borderRadius="2.6vw"
                            border="none"
                            focusBorderColor="transparent"
                            color="brown.500"
                            placeholder="Чего желаете?"
                            size="md"
                            fontSize="1.25vw"
                            _placeholder={{ color: "#979797" }}
                        />
                        <Button
                            onClick={handleSearch}
                            h="100%"
                            color="beige.200"
                            bg="orange.500"
                            fontSize="1.25vw"
                            borderRadius="2.6vw"
                            w="12vw"
                            _hover={{ opacity: 0.85, bg: "orange.500" }}
                        >
                            Найти
                        </Button>
                    </HStack>
                </Box>
                <Box ml="2.5vw" mt="9vw">
                    <Button
                        onClick={onClick}
                        _hover={{ opacity: 0.85, bg: "orange.500" }}
                        rightIcon={<FaArrowRight />}
                        boxShadow="md"
                        w="11.6vw"
                        h="5vw"
                        color="beige.200"
                        bg="orange.500"
                        fontSize="1.25vw"
                        fontWeight="900"
                        borderRadius="2.6vw"
                    >
                        К рецептам
                    </Button>
                </Box>
            </Flex>
            <Box
                position="absolute"
                top="50%"
                left="77%"
                transform="translate(-50%, -50%)"
                w="28vw"
                h="28vw"
            >
                <Image src={plate} alt="" objectFit="cover" boxSize="full" />
            </Box>
        </Box>
    );
}
