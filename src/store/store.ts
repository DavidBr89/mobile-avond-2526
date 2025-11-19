import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import favoritesReducer from "./favorites/slice";
import counterReducer from "./counter/slice";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Configuratie object om onze storage mogelijk te maken en te customizen
const persistConfig = {
  key: "parkings-state",
  version: 1,
  storage: AsyncStorage,
};

// Meerdere rekken combineren tot 1 root reducer
const rootReducer = combineReducers({
  favorites: favoritesReducer,
  counter: counterReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST, FLUSH, REHYDRATE, PAUSE, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
