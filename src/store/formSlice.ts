// formSlice.ts
import { createSlice, combineReducers } from "@reduxjs/toolkit";

export interface Form {
  id: string;
}

type FormState = Form[];

const initialFormState: FormState = [];

const formSlice = createSlice({
  name: "myform",
  initialState: initialFormState,
  reducers: {
    addForm(state, action) {
      state.push(action.payload);
    },
    removeForm(state, action) {
      return state.filter((form) => form.id !== action.payload);
    },
  },
});

export const formActions = formSlice.actions;
export const formReducer = formSlice.reducer;
