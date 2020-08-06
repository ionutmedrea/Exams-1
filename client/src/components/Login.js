import React from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Wrapper} from "./Auth.styled";
import {loginUser} from "../actions/userActions";

function Login() {

    const dispatch = useDispatch();

   let editedUser = useSelector(state => state.users.editedUser);

    function handleSubmit(event) {
        event.preventDefault();

        if (editedUser.userName &&  editedUser.password) {
            dispatch(loginUser(editedUser.userName, editedUser.password));
        }
    }

    function handleChange(event) {
        const {name, value} = event.target;
        editedUser = {
            ...editedUser,
            [name]: value
        };
    }

    return (
       <Wrapper>
           <div>
               <p>Sign In</p>
           </div>
           <div>
               <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column"}}>
                   <label>Username</label>
                   <input type="text"
                          defaultValue={editedUser.userName}
                          name="userName"
                          style={{textAlign: "center"}}
                          onChange={handleChange}/>
                   <label>Password</label>
                   <input type="password"
                          autoComplete="on"
                          name="password"
                          style={{textAlign: "center"}}
                          onChange={handleChange}/>
                   <hr/>
                   <button onClick={() => console.log("I Logged in and sent: ", editedUser)} type="submit">Log in</button>
               </form>
           </div>
           <div>
               <p>Don't have an account? : <Link to={"/register"}>Register</Link></p>
           </div>
       </Wrapper>
    );
}
export default Login;
