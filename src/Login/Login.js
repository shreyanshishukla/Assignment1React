import { Outlet } from "react-router-dom";

export default function Login() {
  function doLogin() {
    alert("login");
  }
  return (
    <div className="login">
      <Outlet />
      <h4 className="Login-header">Login here</h4>
      <br />
      <label>username</label>
      <input type="text" name="username" />
      <br />
      <br />
      <label>password</label>

      <input type="password" name="password" />
      <br />
      <br />
      <button type="submit" onClick={doLogin}>
        Login
      </button>
    </div>
  );
}
