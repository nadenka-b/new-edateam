import React, { useState, useRef, useEffect } from 'react';
import { Box, Flex, Heading, Button, Text } from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux';
import { selectFilters } from "../__data__/selectors/dishes-list";
import { RootState, AppDispatch } from '../__data__/store';
import { useGetDishesQuery, useGetTagsQuery } from '../__data__/services/mainApi';
import { setCurrentPage, setPageSize } from '../__data__/slices/mainDishesSlice';
import { setTags } from "../__data__/slices/tagsSlice"
import Lottie from 'lottie-react';
import { dataEmpty } from "../assets";
import { Greetings } from "../components/home-page/greetings"
import { PaginatedList } from '../components/home-page/pagination'
import { Loading } from '../components/loading';


const HomePage = () => {
    const dispatch: AppDispatch = useDispatch();
    const currentPage = useSelector((state: RootState) => state.dishes.currentPage);
    const size = useSelector((state: RootState) => state.dishes.pageSize);
    const filters = useSelector(selectFilters);

    const [isHidden, setIsHidden] = useState(true);

    const increasePageSize = () => {
        dispatch(setPageSize(9));
        dispatch(setCurrentPage(0));
        setIsHidden(false);
    };

    const { data, error, isLoading } = useGetDishesQuery({ page: currentPage, size: size, filters: filters });

    const { data: dataTags, error: errorTags, isLoading: isLoadingTags } = useGetTagsQuery();

    useEffect(() => {
        if (dataTags) {
            dispatch(setTags(dataTags));
        }
    }, [dataTags, dispatch]);


    const sectionRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        console.log(sectionRef);
    };

    return (
        <Box mb="3vw">
            {(isLoading || isLoadingTags) && <Loading />}
            {(error || errorTags) && <div>Ошибка загрузки данных</div>}
            {data && (
                <>
                    <Greetings onClick={handleScroll} />
                    <Flex direction="column" align="center" mt="3vw">
                        <Heading
                            ref={sectionRef}
                            fontWeight="800"
                            fontStyle="Italic"
                            color="orange.500"
                            fontSize="3.3vw"
                        >
                            Рецепты
                        </Heading>
                        {data.empty
                            ?
                            <Box mb="3vw" mt="-3vw">
                                <Box as={Lottie}
                                    animationData={dataEmpty}
                                    loop={true}
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                    h="30vw" />
                                <Text
                                    align="center"
                                    mt="-3vw"
                                    fontWeight="800"
                                    top="10vw"
                                    fontSize="2vw"
                                    color="orange.600"
                                >
                                    В книге рецептов пропали страницы {"("}
                                </Text>
                            </Box>
                            : <PaginatedList data={data} />}

                        {!data.empty && isHidden && <Button
                            onClick={increasePageSize}
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
                            _active={{ bg: "orange.100" }}
                        >
                            Показать еще
                        </Button>}
                    </Flex>
                </>
            )}
        </Box>
    );
};

export default HomePage;
