import { useState } from "react";
import InputField from "../../Components/InputField";
import Logo from "../../assets/badge.png";
import "./Signup.css";
function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="Signup-body d-flex justify-content-center align-items-center">
      <div className="bg-white rounded-4 container">
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
              placeholder="First Name..."
              type="email"
              value={email}
              setValue={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="col-6">
            <InputField
              label="Email"
              placeholder="Enter Email..."
              type="email"
              value={email}
              setValue={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="text-start row">
          <div className="col-6">
            <InputField
              label="Email"
              placeholder="Enter Email..."
              type="email"
              value={email}
              setValue={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="col-6">
            <InputField
              label="Password"
              placeholder="Enter Password..."
              type="password"
              value={password}
              setValue={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="text-start row">
          <div className="col-6">
            <InputField
              label="Email"
              placeholder="Enter Email..."
              type="email"
              value={email}
              setValue={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="col-6">
            <InputField
              label="Password"
              placeholder="Enter Password..."
              type="password"
              value={password}
              setValue={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="text-start row">
          <div className="col-6">
            <InputField
              label="Email"
              placeholder="Enter Email..."
              type="email"
              value={email}
              setValue={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="col-6">
            <InputField
              label="Password"
              placeholder="Enter Password..."
              type="password"
              value={password}
              setValue={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 mt-3">
            <button className="btn col-3">Cancel</button>
            <button className="btn btn-primary col-3">Confirm</button>
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
      </div>
    </div>
  );
}

export default Signup;
