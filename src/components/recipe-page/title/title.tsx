// import React from "react";
// import { Text } from "@chakra-ui/react";

// export const Title = () => {
//     return (
//         <Text
//             fontSize="2vw"
//             fontWeight="900"
//             fontStyle="italic"
//             color="brown.500"
//             textAlign="center" // Центрирует текст
//             mb="calc(11px * 1.2)"
//         >
//             Блинчики с мясом, сыром и лучком
//         </Text>
//     )
// }

import React from "react";
import { Text } from "@chakra-ui/react";

interface TitleProps {
    title: string;
}

export const Title: React.FC<TitleProps> = ({ title }) => {
    return (
        <Text
            fontSize="2vw"
            fontWeight="900"
            fontStyle="italic"
            color="brown.500"
            textAlign="center"
            mb="calc(11px * 1.2)"
        >
            {title}
        </Text>
    );
};
