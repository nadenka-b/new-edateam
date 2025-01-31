import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DishesState {
    currentPage: number;
    pageSize: number;
    ingredientTitles: string[];
    excludeIngredientTitles: string[];
    tagIds: number;
    cookTime: number;
    title: string;
}

const initialState: DishesState = {
    currentPage: 0,
    pageSize: 3,
    ingredientTitles: [],
    excludeIngredientTitles: [],
    tagIds: 0,
    cookTime: 0,
    title: ''
};

const dishesSlice = createSlice({
    name: 'dishes',
    initialState,
    reducers: {
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        },
        setPageSize(state, action: PayloadAction<number>) {
            state.pageSize = action.payload;
        },
        setIncludeIngredientsTitles: (state, action: PayloadAction<string[]>) => {
            state.ingredientTitles = action.payload;
        },
        setExcludeIngredientsTitles: (state, action: PayloadAction<string[]>) => {
            state.excludeIngredientTitles = action.payload;
        },
        setTag: (state, action: PayloadAction<number>) => {
            state.tagIds = action.payload;
        },
        setCookTime: (state, action: PayloadAction<number>) => {
            state.cookTime = action.payload;
        },
        setTitle: (state, action: PayloadAction<string>) => {
            state.title = action.payload;
        },
    }
});

export const {
    setCurrentPage,
    setPageSize,
    setIncludeIngredientsTitles,
    setExcludeIngredientsTitles,
    setTag, setCookTime,
    setTitle
} = dishesSlice.actions;

export default dishesSlice.reducer;