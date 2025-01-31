// import React from "react";
// import { HStack, Text, Image } from "@chakra-ui/react";

// import { clockIcon } from "./index";

// export const TimeCooking = () => {
//     return (
//         <HStack
//             align="center"
//             w="24vw"
//             h="3.9vw"
//             borderWidth="0.1vw"
//             borderColor="brown.500"
//             bg="brown.150"
//             borderRadius="1.56vw"
//             px="0.2vw"
//             mr="7.8vw"
//         >
//             <Image
//                 src={clockIcon}
//                 alt="Часы"
//                 boxSize="2.6vw"
//             />
//             <Text
//                 fontSize="1.2vw"
//                 fontWeight={900}
//                 fontStyle="italic"
//                 color="brown.500"
//             >
//                 Время приготовления: 30 мин
//             </Text>
//         </HStack>
//     )
// }

import React from "react";
import { HStack, Text, Image } from "@chakra-ui/react";
import { clockIcon } from "./index";

interface TimeCookingProps {
    cookingTime: string;
}

export const TimeCooking: React.FC<TimeCookingProps> = ({ cookingTime }) => {
    return (
        <HStack
            align="center"
            w="24vw"
            h="3.9vw"
            borderWidth="0.1vw"
            borderColor="brown.500"
            bg="brown.150"
            borderRadius="1.56vw"
            px="0.2vw"
            mr="7.8vw"
        >
            <Image
                src={clockIcon}
                alt="Часы"
                boxSize="2.6vw"
            />
            <Text
                fontSize="1.2vw"
                fontWeight={900}
                fontStyle="italic"
                color="brown.500"
            >
                Время приготовления: {cookingTime}
            </Text>
        </HStack>
    );
};
