import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FileType } from '../model/common';

interface tagsState {
    tags: FileType[];
}

const initialState: tagsState = {
    tags: []
};

const tagsSlice = createSlice({
    name: 'tags',
    initialState,
    reducers: {
        setTags: (state, action: PayloadAction<FileType[]>) => {
            state.tags = action.payload;
        },
    }
});

export const { setTags } = tagsSlice.actions;
export default tagsSlice.reducer;