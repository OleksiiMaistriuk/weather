import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import currentWeatherSliceReduser from './slices/currentWeatherSlice';

const rootReduser = combineReducers({
  currentWeatherSliceReduser,
});

export const store = configureStore({
  reducer: rootReduser,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof rootReduser>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
