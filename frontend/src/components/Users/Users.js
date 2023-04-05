import {useEffect, useState} from "react";

import {userService} from "../../services";
import {User} from "./User";
import css from "./Users.module.css";

const Users = ({newUser, setUserForUpdate, updatedUser}) => {

    const [users, setUsers] = useState([]);
    const [deletedUserId, setDeletedUserId] = useState(null)

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data));

    }, [newUser, updatedUser, deletedUserId]);

    // useEffect(() => {
    //     if (newUser) {
    //         setUsers(prevState => [...prevState, newUser])
    //     }
    //
    //     if (deletedUserId) {
    //         setUsers(users.filter(user => user._id !== deletedUserId))
    //     }
    // }, [newUser, deletedUserId]);
    //
    // useEffect(() => {
    //     if (updatedUser){
    //         const user = users.find(user => user._id === updatedUser._id);
    //         Object.assign(user, updatedUser)
    //         setUsers([...users])
    //     }
    // },[updatedUser])


    return (
        <div>

            <div className={css.Users}>

                {users.map((user, index) => <User key={user._id} user={user} index={index}
                                                  setUserForUpdate={setUserForUpdate}
                                                  setDeletedUserId={setDeletedUserId}/>)}

            </div>

        </div>
    );
};

export {Users};


