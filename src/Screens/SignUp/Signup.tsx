import { useState, ChangeEvent } from "react";
import InputField from "../../Components/InputField";
import RadioField from "../../Components/RadioField";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../../assets/badge.png";
import "./Signup.css";
import { formActions } from "../../store/formSlice";
import { RootState, AppDispatch } from "../../store/store";
import { useNavigate } from "react-router";
interface FormField {
  label: string;
  placeholder?: string;
  type: string;
  value: string;
  action: (e: ChangeEvent<HTMLInputElement>) => void;
  component?: React.ComponentType<any>; // For custom components like RadioField
}

function Signup() {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const formItems = useSelector((state: RootState) => state.myForm);
  const [confirmPassword, setConfirmPassword] = useState("");

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

  return (
    <div className="Signup-body d-flex justify-content-center align-items-center">
      <div className="PreContainer">
        <form className="bg-white rounded-4 container">
          <div className="row">
            <div className="text-start col-12">
              <img src={Logo} alt="Logo" />
              <h2>Signup</h2>
              <p>Enter your details to signup</p>
            </div>
          </div>
          <div className="text-start row">
            {formFields.map((field, index) => (
              <div key={index} className="col-6 mt-2">
                {field.component ? (
                  <field.component
                    label={field.label}
                    type={field.type}
                    value={field.value}
                    setValue={field.action}
                  />
                ) : (
                  <InputField
                    label={field.label}
                    placeholder={field.placeholder || ""}
                    type={field.type}
                    value={field.value}
                    setValue={field.action}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-12 mt-3">
              <button className="btn col-3" type="reset">
                Cancel
              </button>
              <button className="btn btn-primary col-3" type="submit">
                Confirm
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-12 mt-3">
              <p>
                Already have an account?{" "}
                <span
                  className="Login-Signup"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Login
                </span>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
