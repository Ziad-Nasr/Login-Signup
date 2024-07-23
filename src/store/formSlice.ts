import { createSlice } from "@reduxjs/toolkit";

export interface Form {
  id: string;
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  password: string;
  dateOfBirth: string;
  phoneNumber: string;
}

const initialFormState: Form = {
  id: "",
  firstName: "",
  lastName: "",
  gender: "",
  email: "",
  password: "",
  dateOfBirth: "",
  phoneNumber: "",
};

const formSlice = createSlice({
  name: "myform",
  initialState: initialFormState,
  reducers: {
    updateForm(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const formActions = formSlice.actions;
export const formReducer = formSlice.reducer;
