import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const selectFilters = createSelector(
    (state: RootState) => state.dishes.ingredientTitles,
    (state: RootState) => state.dishes.excludeIngredientTitles,
    (state: RootState) => state.dishes.tagIds,
    (state: RootState) => state.dishes.cookTime,
    (ingredientTitles, excludeIngredientTitles, tagIds, cookTime) => ({
        ingredientTitles,
        excludeIngredientTitles,
        tagIds,
        cookTime,
    })
);