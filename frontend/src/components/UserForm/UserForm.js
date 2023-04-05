import {useEffect} from "react";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {userService} from "../../services";
import {userValidator} from "../../validators";
import css from "./UserForm.module.css";

const UserForm = ({setNewUser, userForUpdate, setUpdatedUser, setUserForUpdate}) => {

    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({
        resolver: joiResolver(userValidator),
        mode: 'onTouched',
    });

    useEffect(() => {
        if (userForUpdate) {
            const {name, age, email, password} = userForUpdate;
            setValue('name', name)
            setValue('age', age)
            setValue('email', email)
            setValue('password', password)
        }
    }, [userForUpdate]);

    const submit = async (user) => {
        try {
            if (userForUpdate) {
                const {data} = await userService.updateById(userForUpdate._id, {
                    name: user.name,
                    age: user.age,
                    email: user.email,
                });
                setUpdatedUser(data);
                setUserForUpdate(false);
            } else {
                const {data} = await userService.create(user);
                setNewUser(data)

            }
            reset()
        } catch (e) {
            // setFormError(e.response.data)
        }
    };

    const clearForm = () => {
        setUserForUpdate(false);
        reset();
    }

    return (
        <div className={css.FormWrap}>

            <form onSubmit={handleSubmit(submit)} >

                <input type="text" placeholder={'name'} {...register('name')} className={css.input}/>
                <input type="text" placeholder={'age'} {...register('age', {valueAsNumber: true})} className={css.input}/>
                <input type="text" placeholder={'email'} {...register('email')} className={css.input}/>
                <input type="text" placeholder={'password'} {...register('password')} className={css.input}/>

                <button disabled={!isValid} className={css.Btn}>{userForUpdate ? 'Update changes' : 'Create'}</button>
                {/*<button >{userForUpdate ? 'Update changes' : 'Create'}</button>*/}
                {
                    !!userForUpdate && <button onClick={clearForm}>clear form</button>
                }

                <div className={css.errorForm}>
                    {errors.name && <span>{errors.name.message}</span>}
                    {errors.age && <span>{errors.age.message}</span>}
                    {errors.email && <span>{errors.email.message}</span>}
                    {/*{errors.password && <span>{errors.password.message}</span>}*/}
                </div>

            </form>
        </div>
    );
};

export {UserForm};