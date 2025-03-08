import { useForm } from "react-hook-form"
import './LoginPage.css'

interface ILoginForm {
    email: string,
    password: string,
}

// yup validation
export function LoginPage (){
    // Пишем скобки, которые отвечают за то, что мы будем деструктуризировать
    // register в данном случае не нужно деструктуризировать
    const {register, handleSubmit, formState} = useForm <ILoginForm>({
        mode: 'onSubmit'
    })
    
    function onSubmit(data: ILoginForm){
        fetch('http://localhost:8000/user/login',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }


    return(
        <div className="loginDiv">
            <form  className="loginForm" onSubmit={handleSubmit(onSubmit)}>
                <input type="email"  placeholder="email" {...register('email', {
                    required: {value: true, message: 'Це поле обов\'язкове'}, 
                    // minLength: {value: 7, message: 'This field should be more than 7 symbols'}, 
                    maxLength: {value: 100, message: 'Ваша пошта повина бути менше ніж 100 символів'}, })} />
                <p>{formState.errors.email?.message}</p>

                <input type="password"  placeholder="password" {...register('password', {
                    required: {value: true, message: 'Це поле обов\'язкове'}, 
                    minLength: {value: 8, message: 'Ваш пароль повинен бути більше ніж 8 символів'}, 
                    maxLength: {value: 100, message: 'Ваш пароль повинен бути менше ніж 100 символів'}, })} />
                <p>{formState.errors.password?.message}</p>

                <button type="submit">Авторизуватися</button>
            </form>
        </div>
    )
}
