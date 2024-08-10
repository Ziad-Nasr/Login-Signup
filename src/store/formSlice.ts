import { createSlice } from "@reduxjs/toolkit";

export interface Form {
  id: string;
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  password: string;
  confirmPassword: string;
  dateOfBirth: string;
  phoneNumber: string;
  country: string;
  state: string;
  city: string;
  address: string;
  zipCode: string;
  dob: string;
  occupation: string;
  company: string;
  position: string;
  experience: string;
  education: string;
}

const initialFormState: Form = {
  id: "",
  firstName: "",
  lastName: "",
  gender: "",
  email: "",
  password: "",
  confirmPassword: "",
  dateOfBirth: "",
  phoneNumber: "",
  country: "",
  state: "",
  city: "",
  address: "",
  zipCode: "",
  dob: "",
  occupation: "",
  company: "",
  position: "",
  experience: "",
  education: "",
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
