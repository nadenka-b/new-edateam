import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface userDishesState {
    favouritesPage: number;
    recipesPage: number;
}

const initialState: userDishesState = {
    favouritesPage: 0,
    recipesPage: 0
};

const userDishesSlice = createSlice({
    name: 'userDishes',
    initialState,
    reducers: {
        setFavouritesPage: (state, action: PayloadAction<number>) => {
            state.favouritesPage = action.payload;
        },
        setRecipesPage: (state, action: PayloadAction<number>) => {
            state.recipesPage = action.payload;
        },
    }
});

export const { setFavouritesPage, setRecipesPage } = userDishesSlice.actions;
export default userDishesSlice.reducer;