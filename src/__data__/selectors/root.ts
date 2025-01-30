import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../store';

export const rootSelector = createSelector((state: RootState) => state, state => state);
