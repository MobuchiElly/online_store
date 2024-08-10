import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import cartReducer from "./features/cartSlice";

const rootReducer = combineReducers({
  lapiscart: cartReducer,
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['lapiscart'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefautMiddleware) => 
    getDefautMiddleware({
      serializableCheck: false,
    }),
})

export const persistor = persistStore(store);