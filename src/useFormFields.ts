import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store/store";
import { formActions } from "./store/formSlice"; // Assuming formActions is defined in formSlice
import RadioField from "./Components/RadioField"; // Assuming RadioField is a custom component
import React, { useState } from "react";

interface FormField {
  label: string;
  placeholder?: string;
  type: string;
  value: string;
  action: (e: ChangeEvent<HTMLInputElement>) => void;
  component?: React.ComponentType<any>; // For custom components like RadioField
}

const useFormFields = (): FormField[] => {
  const dispatch: AppDispatch = useDispatch();
  const formItems = useSelector((state: RootState) => state.myForm);
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const formFields: FormField[] = [
    {
      label: "First Name",
      placeholder: "First name...",
      type: "text",
      value: formItems.firstName,
      action: (e) =>
        dispatch(formActions.updateForm({ firstName: e.target.value })),
    },
    {
      label: "Last Name",
      placeholder: "Last name...",
      type: "text",
      value: formItems.lastName,
      action: (e) =>
        dispatch(formActions.updateForm({ lastName: e.target.value })),
    },
    {
      label: "Email",
      placeholder: "Enter Email...",
      type: "email",
      value: formItems.email,
      action: (e) =>
        dispatch(formActions.updateForm({ email: e.target.value })),
    },
    {
      label: "Phone Number",
      placeholder: "Enter Phone Number...",
      type: "text",
      value: formItems.phoneNumber,
      action: (e) =>
        dispatch(formActions.updateForm({ phoneNumber: e.target.value })),
    },
    {
      label: "Password",
      placeholder: "Enter Password...",
      type: "password",
      value: formItems.password,
      action: (e) =>
        dispatch(formActions.updateForm({ password: e.target.value })),
    },
    {
      label: "Confirm Password",
      placeholder: "Confirm Password...",
      type: "password",
      value: confirmPassword,
      action: (e) => setConfirmPassword(e.target.value),
    },
    {
      label: "Gender",
      type: "radio",
      value: formItems.gender,
      action: (e) =>
        dispatch(formActions.updateForm({ gender: e.target.value })),
      component: RadioField,
    },
  ];

  return formFields;
};

export default useFormFields;
