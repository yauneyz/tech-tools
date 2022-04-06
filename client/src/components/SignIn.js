import React from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { connect } from "react-redux";

const SignIn = (_props) => {
  const [password, setPassword] = useState({ passwprd: "" });
  const passwordKey = process.env.REACT_APP_ADMIN_PASSWORD;

  const navigate = useNavigate();

  function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

  let query = useQuery();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.password === passwordKey) {
      // Success
      localStorage.setItem("isAuthenticated", "true");

      // If we know where to go next, go there
      const next = query.get("next");
      debugger;
      if (next) {
        navigate("/" + next);
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
    <div className="container">
      <div className="row">
        <div className="col-md">
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
      </div>
    </div>
  );
};

const mapStateToProps = (_state, ownProps) => {
  return { navigate: ownProps.navigate };
};

export default connect(mapStateToProps, {})(SignIn);
