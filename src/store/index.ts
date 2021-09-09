import { configureStore, ConfigureStoreOptions } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import todosSlice from './todosSlice';

export const storeOptions: ConfigureStoreOptions = {
  reducer: {
    todos: todosSlice,
  },
};

export const makeStore = (options: ConfigureStoreOptions) =>
  configureStore(options);

export const store = makeStore(storeOptions);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
