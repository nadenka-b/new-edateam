import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Recipe {
  id: number;
  title: string;
}

interface RecipeState {
  recipe: Recipe | null;
}

const initialState: RecipeState = {
  recipe: null,
};

const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    setRecipe: (state, action: PayloadAction<Recipe>) => {
      state.recipe = action.payload;
    }
  }
});

export const { setRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;
