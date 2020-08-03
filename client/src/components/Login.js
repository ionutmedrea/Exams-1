import React from "react";

function Login() {
    return (
        <div className="base-container">
            <div className="header">Login</div>
            <div className="content">
                <div className="form">
                    <div className="form-group">
                        <label for="username">Username</label>
                        <input type="text" name="username" placeholder="username" />
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" name="password" placeholder="password" />
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="button" className="btn">
                    Login
                </button>
            </div>
        </div>
    );
}
export default Login;
