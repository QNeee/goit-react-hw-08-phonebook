import { useState } from "react"
import { LoginForm } from "./Login.styled";
export const Login = () => {
    const inputHandler = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: value,
        }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();

    }
    const [form, setForm] = useState({ email: '', password: '' })
    return <div>
        <LoginForm>
            <label>E-mail
                <input type="email" name="email" value={form.email} onChange={inputHandler} autoComplete="off" />
            </label>
            <label>Password
                <input type="password" name="password" value={form.password} onChange={inputHandler} autoComplete="off" />
            </label>
            <button type="submit">Register</button>
        </LoginForm>
    </div>
}