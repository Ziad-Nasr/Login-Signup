import React from "react";
import { RadioGroup } from "@ark-ui/react";
import "./RadioField.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { formActions } from "../store/formSlice";

interface RadioFieldProps {
  label: string;
  value: string;
}

export const RadioField: React.FC<RadioFieldProps> = ({ label, value }) => {
  const dispatch: AppDispatch = useDispatch();

  type Gender = "Male" | "Female";
  const genders: Gender[] = ["Male", "Female"];

  const handleValueChange = (details: { value: string }) => {
    console.log(details.value);
    dispatch(formActions.updateForm({ gender: details.value }));
  };
  console.log(value);

  return (
    <RadioGroup.Root className="radio-group" onValueChange={handleValueChange}>
      <RadioGroup.Label>Gender</RadioGroup.Label>
      <RadioGroup.Indicator />
      <div className="d-flex justify-content-evenly">
        {genders.map((item) => (
          <RadioGroup.Item key={item} value={item} className="radio-group-item">
            <RadioGroup.ItemHiddenInput />
            <RadioGroup.ItemControl className="radio-group-item-control" />
            <RadioGroup.ItemText>{item}</RadioGroup.ItemText>
          </RadioGroup.Item>
        ))}
      </div>
    </RadioGroup.Root>
  );
};
