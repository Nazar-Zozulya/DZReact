import { useForm } from "react-hook-form"
import './RegPage.css'

interface IRegForm {
    username: string,
    email: string,
    password: string,
}

// yup validation
export function RegPage (){
    // Пишем скобки, которые отвечают за то, что мы будем деструктуризировать
    const {register: register, handleSubmit, formState} = useForm <IRegForm>({
        mode: 'onSubmit'
    })
    
    function onSubmit(data: IRegForm){
        fetch('http://localhost:8000/user/reg',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }


    return(
        <div className="regDiv">
            <form  className="regForm" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="username" {...register('username', {
                    required: {value: true, message: 'Це поле обов\'язкове'}, 
                    minLength: {value: 7, message: 'Ваше ім\'я повинно бути більше ніж 3 символи'}, 
                    maxLength: {value: 100, message: 'Ваша пошта повина бути менше ніж 100 символів'}, })} />
                <p>{formState.errors.username?.message}</p>

                <input type="email" placeholder="email" {...register('email', {
                    required: {value: true, message: 'Це поле обов\'язкове'}, 
                    // minLength: {value: 7, message: 'This field should be more than 7 symbols'}, 
                    maxLength: {value: 100, message: 'Ваша пошта повина бути менше ніж 100 символів'}, })} />
                <p>{formState.errors.email?.message}</p>

                <input type="password" placeholder="password" {...register('password', {
                    required: {value: true, message: 'Це поле обов\'язкове'}, 
                    minLength: {value: 8, message: 'Ваш пароль повинен бути більше ніж 8 символів'}, 
                    maxLength: {value: 100, message: 'Ваш пароль повинен бути менше ніж 100 символів'}, })} />
                <p>{formState.errors.password?.message}</p>

                <button type="submit">Зареєструватися</button>
            </form>
        </div>
    )
}
