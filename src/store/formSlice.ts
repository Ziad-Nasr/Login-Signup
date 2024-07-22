import { createSlice, combineReducers } from "@reduxjs/toolkit";

interface Form {
  id: string;
}

type FormState = Form[];

const initalFormState: FormState = [];

const formSlice = createSlice({
  name: "mSform",
  initialState: initalFormState,
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
