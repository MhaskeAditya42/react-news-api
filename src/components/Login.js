import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const handleUpClick = () => {
    navigate("/");
  };

  return (
    <>
      <div className="container my-3 w-50 border border-secondary mb-5">
        <form>
          <div class="form-group my-3">
            <label for="exampleInputEmail1 ">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>

          <button
            type="submit"
            class="btn btn-primary my-2"
            onClick={handleUpClick}
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
}
