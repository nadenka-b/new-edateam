import React, { useRef, useState, useEffect } from 'react';
import { Box, Flex, Heading, Button } from '@chakra-ui/react'
import { Greetings } from "../components/home-page/greetings"
import { PaginatedList } from '../components/home-page/pagination'
import { URLs } from '../__data__/urls'

interface RootObject {
    content: Content[];
    last: boolean;
    totalPages: number; //Количество страниц
    totalElements: number; // Сколько всего элементов
    first: boolean;
    size: number; //сколько запрашиваю объектов на странице
    number: number; // Номер страницы
    numberOfElements: number; // Сколько объектов именно на этой странице
    empty: boolean; // пусто или нет 
}

interface Content {
    id: number;
    title: string;
    timeCook: number;
    type: Type;
    file: File;
    tags: FileType[];
    dishIngredients: DishIngredient[];
    events: Event[];
}

interface Event {
    id: number;
    title: string;
    startDate: Date;
    endDate: Date;
}

interface DishIngredient {
    id: number;
    ingredient: Ingredient;
    quantity: number; // количество
}

interface Ingredient {
    id: number;
    title: string;
    measure: string;
}

interface File {
    id: number;
    fileName: string;
    filePath: string;
    type: FileType;
    dateUploaded: string;
}

interface Type {
    id: number;
    value: string;
    fileTypes: FileType[];
}

interface FileType {
    id: number;
    value: string;
}

const emptyData = {
    content: [],
    last: true,
    totalPages: 1, //Количество страниц
    totalElements: 0, // Сколько всего элементов
    first: true,
    size: 0, //сколько запрашиваю объектов на странице
    number: 1, // Номер страницы
    numberOfElements: 0, // Сколько объектов именно на этой странице
    empty: true // пусто или нет 
}



const HomePage = () => {
    const [data, setData] = useState<RootObject>(emptyData)

    useEffect(() => {
        fetch(`${URLs.api.main}/homepage-data`)
            .then(response => response.json())
            .then(data => {
                setData(data.data)
            })
    }, [])


    const [size, setSize] = useState(3);
    const handleClick = () => {
        if (size === 3) {
            setSize(9);
            return;
        }
        setSize(3);
    }
    const sectionRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        console.log(sectionRef);
    };

    return (
        <>
            <Box mb="3vw">
                <Greetings onClick={handleScroll} />
                <Flex direction="column" align="center" mt="3vw">
                    <Heading
                        ref={sectionRef}
                        mb="3vw"
                        fontWeight="800"
                        fontStyle="Italic"
                        color="orange.500"
                        fontSize="3.3vw"
                    >
                        Рецепты
                    </Heading>
                    <PaginatedList data={data}></PaginatedList>
                    <Button
                        onClick={handleClick}
                        mt="3.1vw"
                        alignContent="center"
                        borderRadius="1.5vw"
                        h="2.9vw"
                        w="13.9vw"
                        fontSize="1.25vw"
                        fontWeight="900"
                        fontStyle="italic"
                        bg="orange.200"
                        color="beige.200"
                        _hover={{ opacity: 0.9, bg: "orange.200" }}
                    >
                        Показать еще
                    </Button>
                </Flex>
            </Box >
        </>
    );
};

export default HomePage;
