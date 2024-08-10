import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store/store";
import { formActions } from "./store/formSlice"; // Assuming formActions is defined in formSlice
import { RadioField } from "./Components/RadioField"; // Assuming RadioField is a custom component
import React, { useState } from "react";
import { DateField } from "./Components/DateField";
import { ComboBoxField } from "./Components/ComboBoxField";
import DropDown from "./Components/DropDown";
import MutliSelect from "./Components/MultiSelect";
import Builds from "./Components/Builds";

interface FormField {
  label: string;
  placeholder?: string;
  type: string;
  value: string;
  action: (e: ChangeEvent<HTMLInputElement>) => void;
  component?: React.ComponentType<any>; // For custom components like RadioField
}

const useFormFields = (pageNumber: number): FormField[] => {
  const dispatch: AppDispatch = useDispatch();
  const formItems = useSelector((state: RootState) => state.myForm);
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const page1Fields: FormField[] = [
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
      value: formItems.confirmPassword,
      action: (e) =>
        dispatch(formActions.updateForm({ confirmPassword: e.target.value })),
    },
  ];

  const page2Fields: FormField[] = [
    {
      label: "Country",
      placeholder: "Country...",
      type: "text",
      value: formItems.country,
      action: (e) =>
        dispatch(formActions.updateForm({ country: e.target.value })),
    },
    {
      label: "State",
      placeholder: "State...",
      type: "text",
      value: formItems.state,
      action: (e) =>
        dispatch(formActions.updateForm({ state: e.target.value })),
    },
    {
      label: "City",
      placeholder: "City...",
      type: "text",
      value: formItems.city,
      action: (e) => dispatch(formActions.updateForm({ city: e.target.value })),
    },
    {
      label: "Address",
      placeholder: "Address...",
      type: "text",
      value: formItems.address,
      action: (e) =>
        dispatch(formActions.updateForm({ address: e.target.value })),
    },
    {
      label: "Zip Code",
      placeholder: "Zip Code...",
      type: "text",
      value: formItems.zipCode,
      action: (e) =>
        dispatch(formActions.updateForm({ zipCode: e.target.value })),
    },
  ];

  const page3Fields: FormField[] = [
    {
      label: "Date of Birth",
      placeholder: "Date of Birth...",
      type: "date",
      value: formItems.dob,
      action: (e) => dispatch(formActions.updateForm({ dob: e.target.value })),
      component: DateField,
    },
    {
      label: "Gender",
      type: "radio",
      value: formItems.gender,
      action: (e) =>
        dispatch(formActions.updateForm({ gender: e.target.value })),
      component: RadioField,
    },
    {
      label: "Occupation",
      placeholder: "Occupation...",
      type: "text",
      value: formItems.occupation,
      action: (e) =>
        dispatch(formActions.updateForm({ occupation: e.target.value })),
    },
    {
      label: "Company",
      placeholder: "Company...",
      type: "text",
      value: formItems.company,
      action: (e) =>
        dispatch(formActions.updateForm({ company: e.target.value })),
      component: ComboBoxField,
    },
    {
      label: "Position",
      placeholder: "Position...",
      type: "text",
      value: formItems.position,
      action: (e) =>
        dispatch(formActions.updateForm({ position: e.target.value })),
    },
    {
      label: "Experience",
      placeholder: "Experience...",
      type: "text",
      value: formItems.experience,
      action: (e) =>
        dispatch(formActions.updateForm({ experience: e.target.value })),
      component: DropDown,
    },
  ];

  const page4Fields: FormField[] = [
    {
      label: "Skills",
      placeholder: "Skills...",
      type: "text",
      value: formItems.education,
      action: (e) =>
        dispatch(formActions.updateForm({ education: e.target.value })),
      component: MutliSelect,
    },
    {
      label: "Languages",
      placeholder: "Languages...",
      type: "text",
      value: formItems.education,
      action: (e) =>
        dispatch(formActions.updateForm({ education: e.target.value })),
      component: Builds,
    },
  ];

  switch (pageNumber) {
    case 1:
      return page1Fields;
    case 2:
      return page2Fields;
    case 3:
      return page3Fields;
    case 4:
      return page4Fields;
    default:
      return [];
  }
};

export default useFormFields;
