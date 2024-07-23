import { configureStore } from "@reduxjs/toolkit";
import { formReducer as myFormReducer } from "./formSlice";

const store = configureStore({
  reducer: { myForm: myFormReducer }, 
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
