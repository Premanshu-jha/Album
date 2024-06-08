import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { albumsApi } from './apis/albumsApi';
import { photosApi } from './apis/photosApi';
import { usersReducer } from './slices/usersSlice';

export const store = configureStore({
    reducer: {
        users: usersReducer,
        [albumsApi.reducerPath]: albumsApi.reducer,
        [photosApi.reducerPath]: photosApi.reducer
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        albumsApi.middleware
    ).concat(
        photosApi.middleware
    )
});

setupListeners(store.dispatch);
export * from './apis/albumsApi';
export * from './apis/photosApi';
export * from './thunks/addUsers';
export * from './thunks/fetchUsers';
export * from './thunks/removeUsers';


