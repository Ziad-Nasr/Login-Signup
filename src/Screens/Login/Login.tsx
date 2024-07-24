import "./Login.css";
import Logo from "../../assets/badge.png";
import { useNavigate } from "react-router";
function Login() {
  const navigate = useNavigate();
  return (
    <div className="Login-Body">
      <div className="Login-Container">
        <div className=" Login-Card ">
          <img src={Logo} alt="Logo" />
          <h2 className="Login-Title">Welcome Back</h2>
          <p className="Login-Subtitle">Glad to see you again</p>
          <p className="Login-Subtitle">Sign in back to your account 👋</p>
          <form>
            <div className="Login-Form">
              <label htmlFor="email" className="text-start">
                E-mail
              </label>
              <input type="email" id="email" />
            </div>
            <div className="Login-Form">
              <label htmlFor="password" className="text-start">
                Password
              </label>
              <input type="email" id="password" />
            </div>
            <button className="Login-Button" type="submit">
              Login
            </button>
          </form>
          <p className="Login-Subtitle">
            Don't have an account ?{" "}
            <span
              className="Login-Signup"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Sign up
            </span>{" "}
            now
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
