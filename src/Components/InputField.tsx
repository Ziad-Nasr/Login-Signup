import { Field } from "@ark-ui/react";
import "./InputField.css";
interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  setValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputField({
  label,
  type,
  placeholder,
  value,
  setValue,
}: InputFieldProps) {
  return (
    <Field.Root className="inputField d-flex flex-column justify-content-center">
      <Field.Label className="formLabel">{label}</Field.Label>
      <Field.Input
        placeholder={placeholder}
        value={value}
        onChange={setValue}
        type={type}
        className="formInput"
      />
      {/* <Field.ErrorText>Error Info</Field.ErrorText> */}
    </Field.Root>
  );
}
