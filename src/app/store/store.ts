import { combineReducers, configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./postTask/postTask";
import buttonsStateReducer from "./buttonStates/buttonStates";
import weeksReducer from "./weeks/weeks";
import todayReducer from "./entryDateState/entryDateState";
import statisticsReducer from "./statisticsData/statisticsData";
import dayStatisticsReducer from "./statisticsData/dayStatistics";
import numberClickedBarReducer from "./numberClickedBar/numberClickedBar";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/es/storage";
import longBreakReducer from "./longBreakState/longBreakState";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: ["buttonStates"],
};

const rootReducer = combineReducers({
  tasks: tasksReducer,
  buttonStates: buttonsStateReducer,
  weeks: weeksReducer,
  entryDate: todayReducer,
  statisticsData: statisticsReducer,
  dayStatistics: dayStatisticsReducer,
  tomatoLongBreak: longBreakReducer,
  numberClickedBar: numberClickedBarReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
      immutableCheck: false,
    }),
});

export let persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
