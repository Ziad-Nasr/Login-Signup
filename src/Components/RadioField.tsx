import { Field } from "@ark-ui/react";
import "./InputField.css";
interface InputFieldProps {
  label: string;
  type: string;
  items: string;
  value: string;
  setValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputField({
  label,
  type,
  value,
  setValue,
}: InputFieldProps) {
  type Gender = "male" | "female";

  const genders: Gender[] = ["male", "female"];

  return (
    <Field.Root className="inputField d-flex flex-column justify-content-center">
      <Field.Label className="formLabel">{label}</Field.Label>
      {genders.map((items) => (
        <Field.Input value={items} onChange={setValue} type="radio" />
      ))}
      {/* <Field.ErrorText>Error Info</Field.ErrorText> */}
    </Field.Root>
  );
}
