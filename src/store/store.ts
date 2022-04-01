import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReduser = combineReducers({});

export const store = configureStore({
  reduser: rootReduser,
});

export type RootState = ReturnType<typeof rootReduser>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
