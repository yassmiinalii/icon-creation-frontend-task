import { configureStore } from '@reduxjs/toolkit';
import cartCounterReducer from './reducers/cartCounterSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import {productsTypesApi} from '../service/productsTypes'



export const store = configureStore({
    reducer: {
        // Add the generated reducer as a specific top-level slice
        [productsTypesApi.reducerPath]: productsTypesApi.reducer,
        cartCounter: cartCounterReducer,
      },
      // Adding the api middleware enables caching, invalidation, polling,
      // and other useful features of `rtk-query`.
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsTypesApi.middleware),
    })
    

// setupListeners(store.dispatch)