import React from "react";
import Login from "../../components/login";
const LoginPage: React.FC = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-6 offset-lg-3">
          <Login />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
