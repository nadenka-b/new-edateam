import React from "react";
import { Button, Image, Text } from "@chakra-ui/react";
import { CurrentBookmark, UnselectedBookmark } from '../../../assets';

interface BookmarkProps {
    title: React.ReactNode,
    current: boolean,
    click: () => void,
    top: string
}

export const Bookmark: React.FC<BookmarkProps> = ({ title, current, click, top }) => {
    return (
        <Button
            onClick={click}
            position="relative"
            p={0}
            h="auto"
            minW="0"
            background="none"
            border="none"
            _hover={{ opacity: 0.95, backgroundColor: "beige.300" }}
        >
            <Image src={current ? CurrentBookmark : UnselectedBookmark} w="4.6vw" />
            <Text
                lineHeight="normal"
                fontSize="0.8vw"
                fontWeight="800"
                fontStyle="Italic"
                textAlign="right"
                position="absolute"
                transform="rotate(270deg)"
                top={top}
                color={current ? "beige.200" : "brown.500"}
            >
                {title}
            </Text>
        </Button>
    );
}