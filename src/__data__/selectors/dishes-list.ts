import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const selectFilters = createSelector(
    (state: RootState) => state.dishes.ingredientTitles,
    (state: RootState) => state.dishes.excludeIngredientTitles,
    (state: RootState) => state.dishes.tagIds,
    (state: RootState) => state.dishes.cookTime,
    (state: RootState) => state.dishes.title,
    (ingredientTitles, excludeIngredientTitles, tagIds, cookTime, title) => ({
        ingredientTitles,
        excludeIngredientTitles,
        tagIds,
        cookTime,
        title
    })
);