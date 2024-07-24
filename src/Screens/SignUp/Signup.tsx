import { useState, ChangeEvent } from "react";
import InputField from "../../Components/InputField";
import RadioField from "../../Components/RadioField";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../../assets/badge.png";
import "./Signup.css";
import { formActions } from "../../store/formSlice";
import { RootState, AppDispatch } from "../../store/store";
import { useNavigate } from "react-router";
import useFormFields from "../../useFormFields";

function Signup() {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const formFields = useFormFields();
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="Signup-body d-flex justify-content-center align-items-center">
      <div className="PreContainer">
        <form className="bg-white rounded-4 container">
          <div className="row">
            <div className="text-start col-12">
              <img src={Logo} alt="Logo" />
              <h2>Signup</h2>
              <p className="Login-Subtitle">Enter your details to signup</p>
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
              <button className="Login-Button col-3" type="submit">
                Confirm
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-12 mt-1 mb-3">
              <p className="Login-Subtitle">
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
