import React from "react";
import { Card, CardBody, CardFooter, Text, Image, Box, Flex, IconButton, Heading } from "@chakra-ui/react";
import { AiOutlineHourglass } from "react-icons/ai";
import { FaRegBookmark, FaBookmark } from "react-icons/fa6";

export const DishCard = () => {
  return (
    <>
      <Card w="22vw" h="22vw" overflow="hidden" p="0.9vw" bg="beige.300" boxShadow="lg" borderRadius="5px">
        <CardBody>
          <Box position="relative">
            <Image
              h="14.9vw"
              boxShadow="sm"
              src="https://img1.russianfood.com/dycontent/images_upl/644/big_643804.jpg"
              alt="Картинка блюда" borderRadius="5px" mb="0.05vw"
            />
            <Flex p="0.25vw" borderRadius="15px" alignItems="center" h="2vw" bg="rgba(255, 240, 218, 0.75)" position="absolute" right="0.5vw" bottom="0.5vw">
              <Box as={AiOutlineHourglass} color="brown.500" fontSize="1.3vw" />
              <Text fontWeight="900" fontStyle="italic" fontSize="0.7vw" color="brown.500">30 мин</Text>
            </Flex>
          </Box>
          <Text
            justifySelf="center"
            fontSize="1vw"
            fontWeight="800"
            fontStyle="italic"
            color="orange.100"
            textDecoration="underline"
            textDecorationThickness="0.1vw"
            mb="0.05vw">
            завтрак - выпечка и десерты
          </Text>
          <Heading
            fontSize="1.4vw" fontWeight="900" fontStyle="italic"
            color="brown.500"
            textDecoration="underline">
            Блинчики с мясом, сыром и лучком
          </Heading>
        </CardBody>
        <CardFooter position="relative">
          <IconButton
            _hover={{ bg: "none" }}
            color="brown.500"
            bg="transparent"
            position="absolute"
            right="0.8vw"
            bottom="2.5vw"
            aria-label="Bookmark"
            icon={<FaRegBookmark fontSize="1.8vw" />}>
          </IconButton>
        </CardFooter>
      </Card >
    </>
  );
}