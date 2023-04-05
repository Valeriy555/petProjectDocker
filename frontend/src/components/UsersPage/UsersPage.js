import React, {useState} from 'react';
import {UserForm} from "../UserForm/UserForm";
import {Users} from "../Users/Users";



const UsersPage = () => {
    const [newUser, setNewUser] = useState(null);
    const [updatedUser, setUpdatedUser] = useState(null);
    const [userForUpdate, setUserForUpdate] = useState(null);
    return (
        <div>
            <UserForm setNewUser={setNewUser} userForUpdate={userForUpdate}
                      setUpdatedUser={setUpdatedUser} setUserForUpdate={setUserForUpdate}/>
            <hr/>
            <Users newUser={newUser} setUserForUpdate={setUserForUpdate} updatedUser={updatedUser}/>

        </div>
    );
};

export {UsersPage};
