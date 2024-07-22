import { useState } from "react";
import InputField from "../../Components/InputField";
import Logo from "../../assets/badge.png";
import "./Signup.css";
function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="Signup-body d-flex justify-content-center align-items-center">
      <div className="bg-white rounded-4">
        <div className="text-start">
          <img src={Logo} alt="Logo" />
          <h2>Signup</h2>
          <p>Enter your details to signup</p>
        </div>
        <div className="text-start d-flex justify-content-start align-items-start">
          <div className="me-3">
            <InputField
              label="First Name"
              placeholder="First Name..."
              type="email"
              value={email}
              setValue={(e) => setEmail(e.target.value)}
            />
          </div>
          <InputField
            label="Email"
            placeholder="Enter Email..."
            type="email"
            value={email}
            setValue={(e) => setEmail(e.target.value)}
          />
        </div>
        <InputField
          label="Email"
          placeholder="Enter Email..."
          type="email"
          value={email}
          setValue={(e) => setEmail(e.target.value)}
        />
        <InputField
          label="Password"
          placeholder="Enter Password..."
          type="password"
          value={password}
          setValue={(e) => setPassword(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Signup;
