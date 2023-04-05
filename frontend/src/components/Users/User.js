import css from './User.module.css'
import {userService} from "../../services";

const User = ({user, index, setUserForUpdate, setDeletedUserId}) => {
    const {_id, name, age, email,} = user;

    const deleteUser = async () => {
        await userService.deleteById(_id);
        setDeletedUserId(_id)
    }

    return (
        <div className={css.User}>
            <p>{index + 1}) name: {name}</p>
            <p>age: {age}</p>
            <p>email: {email}</p>


            <button onClick={() => deleteUser()}>Delete</button>
            <button onClick={() => setUserForUpdate(user)}>Update</button>
        </div>
    );
};

export {User};
