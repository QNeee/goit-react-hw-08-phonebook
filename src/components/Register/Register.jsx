import { useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "Redux/authOperations";
import { RegisterForm, Button, Label } from "./Register.styled";
export const Register = () => {
    const navigate = useNavigate();
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
        if (form.email === '' || form.password === '' || form.name === '') return;
        dispatch(register(newUser));
        setForm({ name: '', email: '', password: '' });
        navigate('/login');
    }
    return <div><h1>Register Page</h1>
        <RegisterForm onSubmit={handleSubmit}>
            <Label>Name
                <input type="text" name="name" value={form.name} required onChange={inputHandler} autoComplete="off" />
            </Label>
            <Label>E-mail
                <input type="email" name="email" value={form.email} required onChange={inputHandler} placeholder="example@mail.com" pattern="^([^ ]+@[^ ]+\.[a-z]{2,6}|)$" autoComplete="off" />
            </Label>
            <Label>Password
                <input type="password" name="password" value={form.password} onChange={inputHandler} placeholder="minimum 8 characters"
                    required minLength="8" autoComplete="off" />
            </Label>
            <Button type="submit">Register</Button>
        </RegisterForm>
    </div>
}