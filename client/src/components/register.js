import React from "react";

export class Register extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="base-container" ref={this.props.containerRef}>
                <div class="header">Register</div>
                <div class="content">
                    <div class="form">
                        <div class="form-group">
                            <label for="username">Username</label>
                            <input type="text" name="username" placeholder="username" />
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="text" name="email" placeholder="email" />
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="text" name="password" placeholder="password" />
                        </div>
                    </div>
                </div>
                <div class="footer">
                    <button type="button" class="btn">
                        Register
          </button>
                </div>
            </div>
        );
    }
}