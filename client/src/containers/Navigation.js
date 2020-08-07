import React from "react";
import {Link} from "react-router-dom";
import {HomeWrapper, Navbar, NavItem} from "./Home.styled";

export default function Navigation() {
    return (
        <HomeWrapper>
            <Navbar>
                <NavItem>
                    <Link to="/exams" style={{textDecoration:"none", color: "white"}}>
                        <p>Exams</p>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link to="/users" style={{textDecoration:"none", color: "white"}}>
                        <p>Users</p>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link to="/register" style={{textDecoration:"none", color: "white"}}>
                        <p>Register</p>
                    </Link>
                </NavItem>
                <NavItem>
                <label>Search</label>
                <input type="text"/>
                </NavItem>
            </Navbar>

        </HomeWrapper>
    );
}
