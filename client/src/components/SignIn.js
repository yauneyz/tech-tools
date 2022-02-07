import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

const SignIn = (props) => {
  const [password, setPassword] = useState({ passwprd: "" });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    debugger;
    //if (this.state.password === process.env.REACT_APP_ADMIN_PASSWORD) {
    if (password.password === "test") {
      // Success
      localStorage.setItem("isAuthenticated", "true");

      // If we know where to go next, go there
      if (props.nextRoute) {
        navigate(props.nextRoute);
      } else {
        navigate("/");
      }
    }
  };

  const handleInputChange = (e) => {
    setPassword({
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h1>Sign In</h1>
      <form>
        <label>Password:</label>
        <input
          className="form-control"
          type="password"
          name="password"
          onChange={(e) => handleInputChange(e)}
        />
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (_state, ownProps) => {
  return { navigate: ownProps.navigate };
};

export default connect(mapStateToProps, {})(SignIn);
