// import React from "react";
// import { Box, Text } from "@chakra-ui/react"

// export const Tags = () => {
//     return (
//         <Box textAlign="center" my="1vw" >
//             <Text as="span"
//                 fontSize="1vw"
//                 fontWeight="900"
//                 fontStyle="italic"
//                 color="orange.100"
//                 textDecoration="underline"
//                 textAlign="center"
//             >
//                 завтрак
//             </Text>
//             <Text as="span"
//                 fontSize="1vw"
//                 fontWeight="900"
//                 fontStyle="italic"
//                 color="orange.100"
//                 textAlign="center"
//                 mx="0.1vw">
//                 -
//             </Text>
//             <Text as="span"
//                 fontSize="1vw"
//                 fontWeight="900"
//                 fontStyle="italic"
//                 color="orange.100"
//                 textDecoration="underline"
//                 textAlign="center"
//             >
//                 выпечка и десерты
//             </Text>
//         </Box>

//     )
// }

import React from "react";
import { Box, Text } from "@chakra-ui/react";

interface TagsProps {
    tags: { id: number; value: string }[];
}

export const Tags: React.FC<TagsProps> = ({ tags }) => {
    if (!tags || tags.length === 0) return null; // Если тегов нет, не рендерим

    return (
        <Box textAlign="center" my="1vw">
            {tags.map((tag, index) => (
                <React.Fragment key={tag.id}>
                    <Text
                        as="span"
                        fontSize="1vw"
                        fontWeight="900"
                        fontStyle="italic"
                        color="orange.100"
                        textDecoration="underline"
                        textAlign="center"
                    >
                        {tag.value}
                    </Text>
                    {index < tags.length - 1 && (
                        <Text
                            as="span"
                            fontSize="1vw"
                            fontWeight="900"
                            fontStyle="italic"
                            color="orange.100"
                            textAlign="center"
                            mx="0.1vw"
                        >
                            -
                        </Text>
                    )}
                </React.Fragment>
            ))}
        </Box>
    );
};
