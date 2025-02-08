import React from "react";
import { useFormContext, useFieldArray } from "react-hook-form";
import { HStack, Text, VStack, Select, Wrap, WrapItem, IconButton } from "@chakra-ui/react";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";
import { RootState } from "../../../__data__/store";
import { FileType } from "../../../__data__/model/common"

interface FormValues {
    tags: FileType[];
}

export const SelectedCategories = () => {
    const allTags = useSelector((state: RootState) => state.tags.tags);
    const { control, watch } = useFormContext<FormValues>();
    const { fields, append, remove } = useFieldArray({
        control,
        name: "tags",
    });

    const selectedCategories = watch("tags", []);

    const addCategory = (categoryId: string) => {
        if (!categoryId) return;
        const id = Number(categoryId);
        const category = allTags.find(tag => tag.id === id);
        if (!category) return;

        if (!selectedCategories.some((item) => Number(item.id) === category.id)) {
            append({ id: category.id, value: category.value }); // Сохраняем объект целиком
        }
    };
    return (
        <HStack align="flex-start" w="100%" py={2} justifyContent="space-between">
            <VStack align="flex-start">
                <Text fontStyle="italic" fontSize="1.6vw" fontWeight="bold" color="brown.500">
                    Категория блюда
                </Text>

                <Select
                    placeholder="Выберите категорию"
                    h="2.6vw"
                    w="20vw"
                    borderColor="brown.500"
                    fontFamily="var(--main-font)"
                    fontSize="1.4vw"
                    fontWeight="bold"
                    color="brown.500"
                    borderRadius="0.8vw"
                    iconSize="1.6vw"
                    onChange={(e) => {
                        addCategory(e.target.value);
                        e.target.value = "";
                    }}
                >
                    {allTags.map((tag) => (
                        <option key={tag.id} value={tag.id}>{tag.value}</option>
                    ))
                    }
                </Select>
            </VStack>

            <VStack align="flex-end" w="100%" maxWidth={300}>
                <Text
                    fontFamily="var(--main-font)"
                    fontSize="1.6vw"
                    fontWeight="bold"
                    color="brown.500"
                    fontStyle="italic"
                    whiteSpace="nowrap"
                >
                    Выбранные категории
                </Text>

                <Wrap spacing={2} maxWidth="15.6vw" overflow="hidden" w="100%">
                    {fields.map((category, index) => (
                        <WrapItem key={category.id}>
                            <HStack
                                spacing={2}
                                bg="beige.200"
                                borderRadius="0.6vw"
                                borderColor="brown.500"
                                borderWidth={1}
                                px="10px"
                                py="6px"
                                align="center"
                            >
                                <Text
                                    fontFamily="var(--main-font)"
                                    fontSize="1.4vw"
                                    fontWeight="bold"
                                    color="brown.500"
                                >
                                    {category.value}
                                </Text>
                                <IconButton
                                    icon={<AiOutlineClose />}
                                    onClick={() => remove(index)}
                                    variant="ghost"
                                    size="sm"
                                    color="brown.500"
                                    aria-label="Удалить категорию"
                                    fontSize="0.8vw"
                                />
                            </HStack>
                        </WrapItem>
                    ))}
                </Wrap>
            </VStack>
        </HStack>
    );
};
