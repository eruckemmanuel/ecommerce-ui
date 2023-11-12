import React, { useState } from "react";
import LoginForm from "./login-form";
import api from "../../services/api";

const Login: React.FC = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    try {
      const response = await api.login(user);
      localStorage.setItem("token", response.data?.token);
      window.location.assign("/products");
    } catch (e: any) {
      console.log(e);
      setError(e.message);
    }
  };

  return (
    <LoginForm
      error={error}
      user={user}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
};

export default Login;
