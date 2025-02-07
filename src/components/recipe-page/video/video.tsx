import React from "react";
import { Box } from "@chakra-ui/react";

interface VideoProps {
    src?: string;
}

export const Video: React.FC<VideoProps> = ({ src }) => {
    const videoUrl = src ? src : "https://youtube.com/embed/yTk3iwTyBwY"; // Если нет ссылки, показываем видео-заглушку

    return (
        <Box
            as="iframe"
            src={videoUrl}
            frameBorder="0"
            allowFullScreen
            width="51vw"
            height="33vw"
            borderRadius="md"
            boxShadow="lg"
            mx="auto"
            {...({} as React.ComponentProps<"iframe">)}
        />
    );
};
