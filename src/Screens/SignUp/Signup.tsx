import { useState } from "react";
import InputField from "../../Components/InputField";
import { RadioField } from "../../Components/RadioField";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../../assets/badge.png";
import "./Signup.css";
import { formActions } from "../../store/formSlice";
import { RootState, AppDispatch } from "../../store/store";

function Signup() {
  const dispatch = useDispatch();
  const formItems = useSelector((state: RootState) => state.myForm);
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="Signup-body d-flex justify-content-center align-items-center">
      <form className="bg-white rounded-4 container">
        <div className="row">
          <div className="text-start col-12">
            <img src={Logo} alt="Logo" />
            <h2>Signup</h2>
            <p>Enter your details to signup</p>
          </div>
        </div>
        <div className="text-start row">
          <div className="col-6">
            <InputField
              label="First Name"
              placeholder="First name..."
              type="text"
              value={formItems.firstName}
              setValue={(e) =>
                dispatch(formActions.updateForm({ firstName: e.target.value }))
              }
            />
          </div>
          <div className="col-6">
            <InputField
              label="Last Name"
              placeholder="Last name..."
              type="text"
              value={formItems.lastName}
              setValue={(e) =>
                dispatch(formActions.updateForm({ lastName: e.target.value }))
              }
            />
          </div>
        </div>
        <div className="text-start row">
          <div className="col-6">
            <InputField
              label="Email"
              placeholder="Enter Email..."
              type="email"
              value={formItems.email}
              setValue={(e) =>
                dispatch(formActions.updateForm({ email: e.target.value }))
              }
            />
          </div>
          <div className="col-6">
            <InputField
              label="Password"
              placeholder="Enter Password..."
              type="password"
              value={formItems.password}
              setValue={(e) =>
                dispatch(formActions.updateForm({ password: e.target.value }))
              }
            />
          </div>
        </div>
        <div className="text-start row">
          <div className="col-6">
            <InputField
              label="Confirm Password"
              placeholder="Confirm Password..."
              type="password"
              value={confirmPassword}
              setValue={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="col-6">
            <RadioField />
            {/* <InputField
              label="Gender"
              placeholder="Select Gender..."
              type="radio"
              value={formItems.gender}
              setValue={(e) =>
                dispatch(formActions.updateForm({ gender: e.target.value }))
              } 
            /> */}
          </div>
        </div>
        <div className="text-start row">
          <div className="col-6">
            <InputField
              label="Email"
              placeholder="Enter Email..."
              type="email"
              value={formItems.email}
              setValue={(e) =>
                dispatch(formActions.updateForm({ email: e.target.value }))
              }
            />
          </div>
          <div className="col-6">
            <InputField
              label="Password"
              placeholder="Enter Password..."
              type="password"
              value={formItems.phoneNumber}
              setValue={(e) =>
                dispatch(
                  formActions.updateForm({ phoneNumber: e.target.value })
                )
              }
            />
          </div>
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
              <span className="text-primary">Login</span>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
