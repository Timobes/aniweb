import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authSlice from './slice/authSlice';
import bookdelSlice from './slice/bookdelSlice';
import isrevSlice from './slice/isrevSlice';

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, authSlice);

export const store = configureStore({
    reducer: {
        auth: persistedReducer,
        bookdel: bookdelSlice,
        isrev: isrevSlice
    },
});

export const persistor = persistStore(store);

