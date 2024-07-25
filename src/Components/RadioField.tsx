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
    dispatch(formActions.updateForm({ gender: details.value }));
  };
  console.log(value);

  return (
    <RadioGroup.Root
      className="radio-group-root"
      value={value}
      onValueChange={handleValueChange}
    >
      <RadioGroup.Label className="radio-group-label">{label}</RadioGroup.Label>
      <RadioGroup.Indicator className="radio-group-indicator" />
      <div className="radio-group-items">
        {genders.map((item) => (
          <RadioGroup.Item key={item} value={item} className="radio-group-item">
            <RadioGroup.ItemText className="radio-group-item-text">
              {item}
            </RadioGroup.ItemText>
            <RadioGroup.ItemControl className="radio-group-item-control" />
            <RadioGroup.ItemHiddenInput className="radio-group-item-hidden-input" />
          </RadioGroup.Item>
        ))}
      </div>
    </RadioGroup.Root>
  );
};
