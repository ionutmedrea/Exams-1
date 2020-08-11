import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Spinner from "../../shared/Spinner";
import {fetchUsers} from "../../actions/userActions";
import UserCard from "../../components/users/UserCard";
import {
    FancyFilterWrapper,
    FancyLabel, FancySelect,
    FancySelectWrapper,
    SearchBarWrapper,
    UserContainer,
    UserListStyled
} from "./UserList.styled";
import UsersSearchForm from "./UsersSearchForm";

function Exams() {

    const users = useSelector(state => state.users.users);
    const dispatch = useDispatch();

    // Use effect will only run once with component render
    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    return (
        <UserContainer>
            <div style={{margin: "5%"}}>
                <SearchBarWrapper>
                    <UsersSearchForm/>
                    <FancySelectWrapper>
                        <FancyFilterWrapper>
                            <FancyLabel htmlFor="filters">Filter</FancyLabel>
                        <FancySelect name="filters" id="filters" defaultValue="">
                            <option disabled defaultValue=""></option>
                            <option value="byUserName">Filter by Username Ascending</option>
                            <option value="byUserName">Filter by Username Descending</option>
                            <option value="byEmail">Filter by Email Ascending</option>
                            <option value="byEmail">Filter by Email Descending</option>
                        </FancySelect>
                        </FancyFilterWrapper>
                    </FancySelectWrapper>
                </SearchBarWrapper>
                <UserListStyled>
                    {users ? users.map(user => <UserCard
                        key={user.uid}
                        id={user.uid}
                        username={user.userName}
                        password={user.password}
                        email={user.email}
                        role={user.role}/>) : <Spinner/>}
                </UserListStyled>
            </div>
        </UserContainer>
    );
}

export default Exams;
