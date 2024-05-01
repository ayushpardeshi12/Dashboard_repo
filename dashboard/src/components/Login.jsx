import React from "react";

function Login() {
  return (
    <>
      <div className="Login">
        <div className="Login-bg">
          <img src="../public/images/Wallpaper.png" className="bg-image-1" />
          <img src="../public/images/Wallpaper.png" className="bg-image-2" />
        </div>

        <div className="Login-bg-2"></div>
        <div className="Login-form-rev">
          <img
            src="../public/Images/9225b8bc-2f93-4304-84d9-0868a6f62ca3 4.png"
            className="logo-rev"
          />
          <div className="Login-form">
            <div className="Login-profile">
              <img src="../public/Images/Ellipse 33.png" />
            </div>

            <div className="form">
              <h1>Welcome Back...</h1>
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="username"
                required
              />
              <br />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="password"
                required
              />
              <br />
              <div className="rem-check-div">
                <input type="checkbox" className="rem-check" />
                <h3 className="rem-div">Remember Me</h3>
              </div>
              <br />
              <button>Login</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
