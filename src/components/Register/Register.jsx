import { useState } from "react"
import { useDispatch } from "react-redux";
import { register } from "Redux/authOperations";
import { RegisterForm } from "./Register.styled";
export const Register = () => {
    const [form, setForm] = useState({ name: '', password: '', email: '' });
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
        const newUser = {
            name: form.name,
            email: form.email,
            password: form.password
        }
        dispatch(register(newUser));
        setForm({ name: '', password: '', email: '' });
    }
    return <div><h1>Register Page</h1>
        <RegisterForm onSubmit={handleSubmit}>
            <label>Name
                <input type="text" name="name" value={form.name} onChange={inputHandler} autoComplete="off" />
            </label>
            <label>E-mail
                <input type="email" name="email" value={form.email} onChange={inputHandler} autoComplete="off" />
            </label>
            <label>Password
                <input type="password" name="password" value={form.password} onChange={inputHandler} autoComplete="off" />
            </label>
            <button type="submit">Register</button>
        </RegisterForm>
    </div>
}