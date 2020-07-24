import React from "react";

export class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="base-container" ref={this.props.containerRef}>
                <div class="header">Login</div>
                <div class="content">\
                    <div class="form">
                        <div class="form-group">
                            <label for="username">Username</label>
                            <input type="text" name="username" placeholder="username" />
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" name="password" placeholder="password" />
                        </div>
                    </div>
                </div>
                <div class="footer">
                    <button type="button" class="btn">
                        Login
          </button>
                </div>
            </div>
        );
    }
}