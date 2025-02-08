import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { URLs } from "../../../__data__/urls"
import { pan } from "./index"

interface VideoProps {
    src?: string;
    fallbackImage?: string;
}

const getEmbeddedYouTubeURL = (url: string) => {
    return url?.includes("youtube.com/watch?v=")
        ? url.replace("watch?v=", "embed/")
        : url;
};

export const Video: React.FC<VideoProps> = ({ src, fallbackImage }) => {
    return src
        ? (
            <Box
                as="iframe"
                src={getEmbeddedYouTubeURL(src)}
                frameBorder="0"
                allowFullScreen
                width="51vw"
                height="33vw"
                borderRadius="md"
                boxShadow="lg"
                mx="auto"
                {...({} as React.ComponentProps<"iframe">)}
            />
        )
        : (
            <Box w="51vw" h="33vw" display="flex" alignItems="center" justifyContent="center">
                <Image
                    src={fallbackImage ? `${URLs.api.images}${fallbackImage.slice(1)}` : pan} // Используем картинку блюда, если нет видео
                    alt="Готовое блюдо"
                    width="100%"
                    height="100%"
                    objectFit="cover"
                    borderRadius="md"
                    boxShadow="lg"
                />
            </Box>
        );
};

