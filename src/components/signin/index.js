//changu codee.......................
import React from "react";
import "./signin.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div className="signIn">
      <div className="signIn__form">
        <Link to="*">
          <img
            src="data:image/png;base64,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"
            alt="logo"
          />
        </Link>
        <div className="signIn__form__fields">
          <h1>Login to continue.</h1>
          <div className="signIn__field">
            <input type="email" placeholder="Email" />
            <MailOutlineIcon className="signIn__icon" />
          </div>
          <div className="signIn__field">
            <input type="password" placeholder="Create a password" />
            <VisibilityOffOutlinedIcon className="signIn__icon" />
          </div>
          <button>LOG IN</button>
        </div>
        <div className="signIn__partition">
          <hr />
          <p>OR</p>
          <hr />
        </div>
        <div className="signIn__bottom">
          <div className="signIn__facebook">
            <FacebookRoundedIcon
              color="primary"
              className="signIn__facebook__icon"
            />
            <button>Continue with Facebook</button>
          </div>
          <div className="signIn__facebook">
            <GoogleIcon color="action" className="signIn__facebook__icon" />
            <button>Continue with Google</button>
          </div>
          <div className="signIn__facebook">
            <AppleIcon className="signIn__apple__icon" />
            <button>Continue with Apple</button>
          </div>
          <h6>
            Dont have an account?{" "}
            <Link to="/signup">
              <a href="/">SIGNUP</a>
            </Link>
          </h6>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
