import React from "react";
import { Card, CardBody, Text, Image, Box, Flex /*, IconButton */, Heading } from "@chakra-ui/react";
import { AiOutlineHourglass } from "react-icons/ai";
import { Link } from "react-router-dom"
import { URLs } from "../../../__data__/urls"
import { Tags } from "./tags"

interface DishCardProps {
  recipeId: number,
  image: string,
  time: number,
  tags: FileType[],
  title: string
}

interface FileType {
  id: number;
  value: string;
}

export const DishCard: React.FC<DishCardProps> = ({ recipeId, image, time, tags, title }) => {
  function formatTime(minutes) {
    if (minutes < 60) {
      return `${minutes} мин`;
    }

    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    return remainingMinutes > 0
      ? `${hours} ч ${remainingMinutes} мин`
      : `${hours} ч`;
  }
  return (
    <>
      <Card p="1vw" w="24vw" h="24vw" overflow="hidden" bg="beige.300" boxShadow="lg" borderRadius="0.26vw">
        <CardBody p={0}>
          <Box position="relative">
            <Link to={URLs.ui.recipe.getUrl(recipeId)} >
              {image &&
                <Image
                  h="16.5vw"
                  w="22vw"
                  boxShadow="sm"
                  src={`${URLs.api.images}${image.slice(1)}`}
                  alt="Картинка блюда" borderRadius="0.26vw"
                />
              }
            </Link>
            <Flex p="0.4vw" borderRadius="1vw" alignItems="center" h="2.2vw" bg="rgba(255, 240, 218, 0.75)" position="absolute" right="0.5vw" bottom="0.5vw">
              <Box as={AiOutlineHourglass} color="brown.500" fontSize="1.6vw" />
              <Text fontWeight="900" fontStyle="italic" fontSize="1vw" color="brown.500">{formatTime(time)}</Text>
            </Flex>
          </Box>
          <Flex justifySelf="center">
            <Tags tags={tags} />
          </Flex>
          <Flex w="100%" mt="0.05vw">
            <Link to={URLs.ui.recipe.getUrl(recipeId)} style={{ flex: 95 }}>
              <Heading
                fontSize="1.4vw" fontWeight="900" fontStyle="italic"
                color="brown.500"
                textDecoration="underline">
                {title}
              </Heading>
            </Link>
          </Flex>
        </CardBody>
      </Card >
    </>
  );
}