import { Field } from "@ark-ui/react";

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
    <Field.Root>
      <Field.Label>{label}</Field.Label>
      <Field.Input
        placeholder={placeholder}
        value={value}
        onChange={setValue}
        type={type}
      />
      <Field.ErrorText>Error Info</Field.ErrorText>
    </Field.Root>
  );
}
