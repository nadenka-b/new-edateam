import React from "react";
import { Card, CardBody, Text, Image, Box, Flex /*, IconButton */, Heading } from "@chakra-ui/react";
import { AiOutlineHourglass } from "react-icons/ai";
// import { FaRegBookmark /*, FaBookmark */ } from "react-icons/fa6";
import { Link } from "react-router-dom"
import { URLs } from "../../../__data__/urls"

interface DishCardProps {
  image: string,
  time: number,
  tags: FileType[], //пока стринг
  title: string
}

interface FileType {
  id: number;
  value: string;
}

export const DishCard: React.FC<DishCardProps> = ({ image, time, tags, title }) => {
  const result = tags.map(tag => tag.value).join(" - ");
  function formatTime(minutes) {
    if (minutes < 60) {
      return `${minutes} мин`;
    }

    const hours = Math.floor(minutes / 60); // Целое количество часов
    const remainingMinutes = minutes % 60; // Остаток минут

    return remainingMinutes > 0
      ? `${hours} ч ${remainingMinutes} мин`
      : `${hours} ч`;
  }
  return (
    <>
      <Card p="1vw" w="24vw" h="24vw" overflow="hidden" bg="beige.300" boxShadow="lg" borderRadius="0.26vw">
        <CardBody p={0}>
          <Box position="relative">
            <Link to={URLs.ui.recipe.url} >
              <Image
                h="16.5vw"
                w="22vw"
                boxShadow="sm"
                src={image}
                alt="Картинка блюда" borderRadius="0.26vw"
              />
            </Link>
            <Flex p="0.4vw" borderRadius="1vw" alignItems="center" h="2.2vw" bg="rgba(255, 240, 218, 0.75)" position="absolute" right="0.5vw" bottom="0.5vw">
              <Box as={AiOutlineHourglass} color="brown.500" fontSize="1.6vw" />
              <Text fontWeight="900" fontStyle="italic" fontSize="1vw" color="brown.500">{formatTime(time)}</Text>
            </Flex>
          </Box>
          <Text // сделать кнопкой как ссылка на фильтры
            justifySelf="center"
            fontSize="1vw"
            fontWeight="800"
            fontStyle="italic"
            color="orange.100"
            textDecoration="underline"
            textDecorationThickness="0.1vw"
            mb="0.05vw">
            {result}
          </Text>
          <Flex w="100%">
            <Link to={URLs.ui.recipe.url} style={{ flex: 95 }}>
              <Heading
                fontSize="1.4vw" fontWeight="900" fontStyle="italic"
                color="brown.500"
                textDecoration="underline">
                {title}
              </Heading>
            </Link>
            {/* <IconButton
              alignSelf="end"
              flex="5"
              borderRadius="2.6vw"
              minW="2.2vw"
              h="2.2vw"
              bg="transparent"
              _hover={{ bg: "none" }}
              color="brown.500"
              aria-label="Bookmark"
              icon={<FaRegBookmark fontSize='2.2vw' />}>
            </IconButton> */}
          </Flex>
        </CardBody>
      </Card >
    </>
  );
}