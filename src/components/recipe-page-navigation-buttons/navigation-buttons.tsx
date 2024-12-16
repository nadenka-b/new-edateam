import React from "react";
import { HStack, Button, Circle, createIcon } from '@chakra-ui/react';

const CustomArrowLeftIcon = createIcon({
    displayName: 'ArrowIcon',
    viewBox: '0 0 50 80',
    path: (
        <path
            d="M45 5L5 40.3633L45 75"
            stroke="#FF9F5F"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
        />
    ),
});

const CustomArrowRightIcon = createIcon({
    displayName: 'ArrowIcon',
    viewBox: '0 0 50 80',
    path: (
        <path
            d="M5 75L45 39.6367L5 5"
            stroke="#FF9F5F"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
        />
    ),
});

export const NavigationButtons = ({ 
    activeStep, 
    stepsData, 
    goToPrevious, 
    goToNext, 
    position 
}: { 
    activeStep: number; 
    stepsData: { title: string; description: string; image: string }[]; 
    goToPrevious?: VoidFunction; 
    goToNext?: VoidFunction; 
    position: "previous" | "next"; 
}) => {
    const isPrevious = position === "previous";
    const isNext = position === "next";

    return (
        <Button
            variant="unstyled"
            boxSize="9px"
            onClick={isPrevious ? goToPrevious : goToNext}
            isDisabled={
                isPrevious ? activeStep === 0 : activeStep === stepsData.length - 1
            }
            display="flex"
            alignItems="center"
            justifyContent="center"
            ml={isPrevious ? "52px" : "0"}
            mr={isNext ? "52px" : "0"}
        >
            {isPrevious ? (
                <CustomArrowLeftIcon boxSize="70px" />
            ) : (
                <CustomArrowRightIcon boxSize="70px" />
            )}
        </Button>
    );
};
