import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";
import { homeSlice } from "../../handles/home/utils/data/homeSlice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: { homeStore: homeSlice.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
      serializableCheck: false,
      immutableCheck: false,
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

// const configureAppStore = () => {
//     const reduxSagaMonitorOptions = {};
//     const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);

//     // Create the store with saga middleware
//     const middleware: any = [];
//     middleware.push(sagaMiddleware);

//     const store = configureStore({
//         reducer: { homeStore: homeSlice.reducer },
//         middleware: (getDefaultMiddleware) => [
//             ...getDefaultMiddleware({
//                 thunk: false,
//             }),
//             ...middleware,
//         ],
//         devTools: process.env.NODE_ENV !== "production",
//     });

//     sagaMiddleware.run(rootSaga);

//     return store;
// };

// export default configureAppStore;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
