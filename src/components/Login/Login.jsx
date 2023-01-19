import { useState } from "react"
import { LoginForm } from "./Login.styled";
import { login } from "Redux/authOperations";
import { useDispatch } from "react-redux";
import { Button, Label } from "./Login.styled";
export const Login = () => {
    const [form, setForm] = useState({ email: '', password: '' })
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
        if (form.email === '' || form.password === '') return;
        dispatch(login(user));
        setForm({ email: '', password: '' });
    }
    return <div><h1>Login Page</h1>
        <LoginForm onSubmit={handleSubmit}>
            <Label>E-mail
                <input type="email" name="email" value={form.email} onChange={inputHandler} autoComplete="off" />
            </Label>
            <Label>Password
                <input type="password" name="password" value={form.password} onChange={inputHandler} autoComplete="off" />
            </Label>
            <Button type="submit">Login</Button>
        </LoginForm>
    </div>
}