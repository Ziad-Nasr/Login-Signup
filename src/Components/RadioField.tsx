// import { Field } from "@ark-ui/react";
// import "./InputField.css";
// interface InputFieldProps {
//   label: string;
//   type: string;
//   value: string;
//   setValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
// }

// export default function InputField({
//   label,
//   type,
//   value,
//   setValue,
// }: InputFieldProps) {
//   type Gender = "Male" | "Female";

//   const genders: Gender[] = ["Male", "Female"];

//   return (
//     <Field.Root className="inputField d-flex flex-column justify-content-center">
//       <Field.Label className="formLabel">{label}</Field.Label>
//       <div className="container">
//         <div className="row">
//           {genders.map((items, index) => (
//             <div className="col-6" key={index}>
//               <Field.Label htmlFor={items} className="me-3">
//                 {items}
//               </Field.Label>
//               <Field.Input
//                 value={value}
//                 id={items}
//                 onChange={setValue}
//                 type={type}
//                 name="gender"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//       {/* <Field.ErrorText>Error Info</Field.ErrorText> */}
//     </Field.Root>
//   );
// }
import React from "react";
import { RadioGroup } from "@ark-ui/react";
import "./RadioField.css";
export const RadioField: React.FC = () => {
  const genders: string[] = ["Male", "Female"];

  return (
    <RadioGroup.Root className="radio-group-root">
      <RadioGroup.Label className="radio-group-label">
        Framework
      </RadioGroup.Label>
      <RadioGroup.Indicator className="radio-group-indicator" />
      <div className="radio-group-items">
        {genders.map((framework) => (
          <RadioGroup.Item
            key={framework}
            value={framework}
            className="radio-group-item"
          >
            <RadioGroup.ItemText className="radio-group-item-text">
              {framework}
            </RadioGroup.ItemText>
            <RadioGroup.ItemControl className="radio-group-item-control" />
            <RadioGroup.ItemHiddenInput className="radio-group-item-hidden-input" />
          </RadioGroup.Item>
        ))}
      </div>
    </RadioGroup.Root>
  );
};
