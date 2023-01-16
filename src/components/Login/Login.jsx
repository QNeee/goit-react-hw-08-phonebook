import { useState } from "react"
import { LoginForm } from "./Login.styled";
import { login } from "Redux/authOperations";
import { useDispatch } from "react-redux";
export const Login = () => {
    const dispatch = useDispatch();
    const inputHandler = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: value,
        }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            email: form.email,
            password: form.password
        }
        dispatch(login(user));
        setForm({ password: '', email: '' });
    }
    const [form, setForm] = useState({ email: '', password: '' })
    return <div><h1>Login Page</h1>
        <LoginForm onSubmit={handleSubmit}>
            <label>E-mail
                <input type="email" name="email" value={form.email} onChange={inputHandler} autoComplete="off" />
            </label>
            <label>Password
                <input type="password" name="password" value={form.password} onChange={inputHandler} autoComplete="off" />
            </label>
            <button type="submit">Login</button>
        </LoginForm>
    </div>
}