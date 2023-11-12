import React from "react";
import { Simulate } from "react-dom/test-utils";
import error = Simulate.error;

type UserType = {
  username: string;
  password: string;
};

interface LoginFormInterface {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  user: UserType;
  error: string;
}

const LoginForm: React.FC<LoginFormInterface> = ({
  user,
  onChange,
  onSubmit,
  error,
}: LoginFormInterface) => {
  return (
    <div>
      <div className="display-5">Login</div>
      {error && <div className="mt-4 alert alert-danger">{error}</div>}
      <div className="card mt-4">
        <div className="card-body">
          <form action="#" onSubmit={onSubmit}>
            <div className="form-group">
              <label className="label">Username</label>
              <input
                onChange={onChange}
                value={user.username}
                required
                type="text"
                className="form-control"
                name="username"
                placeholder="Enter username"
              />
            </div>
            <div className="mt-4">
              <label className="label">Password</label>
              <input
                onChange={onChange}
                required
                value={user.password}
                type="password"
                className="form-control"
                name="password"
                placeholder="Enter password"
              />
            </div>
            <div className="mt-4">
              <button className="form-control btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
