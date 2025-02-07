// import { createSelector } from '@reduxjs/toolkit';
// import { rootSelector } from './root';

// const recipeRootSelector = createSelector(rootSelector, state => state.recipe);

// export const selectRecipe = createSelector(recipeRootSelector, state => state.data);
// export const selectRecipeLoading = createSelector(recipeRootSelector, state => state.isLoading);
// export const selectRecipeError = createSelector(recipeRootSelector, state => state.error);

// import { mainApi } from '../services/mainApi';

// export const selectRecipeById = (id: string) => (state: RootState) =>
//   mainApi.endpoints.getRecipe.select(id)(state).data;
