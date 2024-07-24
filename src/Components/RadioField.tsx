import { Field } from "@ark-ui/react";
import "./InputField.css";
interface InputFieldProps {
  label: string;
  type: string;
  value: string;
  setValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputField({
  label,
  type,
  value,
  setValue,
}: InputFieldProps) {
  type Gender = "Male" | "Female";

  const genders: Gender[] = ["Male", "Female"];

  return (
    <Field.Root className="inputField d-flex flex-column justify-content-center">
      <Field.Label className="formLabel">{label}</Field.Label>
      <div className="container">
        <div className="row">
          {genders.map((items) => (
            <div className="col-6">
              <Field.Label htmlFor={items} className="me-3">
                {items}
              </Field.Label>
              <Field.Input
                value={value}
                id={items}
                onChange={setValue}
                type={type}
                name="gender"
              />
            </div>
          ))}
        </div>
      </div>
      {/* <Field.ErrorText>Error Info</Field.ErrorText> */}
    </Field.Root>
  );
}
