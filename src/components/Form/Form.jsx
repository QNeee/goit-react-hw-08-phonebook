import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from 'nanoid'
import { ContainerForm, Label, Button } from "./Form.styled";
import { getContacts } from "Redux/phonebookSlice";
import { addContact } from "Redux/phonebookOperations";
export const Form = () => {
    const contacts = useSelector(getContacts);
    const dispatch = useDispatch();
    const [form, setForm] = useState({ name: '', number: '' });
    const inputNameId = nanoid();
    const inputNumberId = nanoid();
    const onSubmit = (e) => {
        e.preventDefault();
        const newContact = {
            name: form.name,
            number: form.number
        }
        const findContact = contacts.find(item => item.name.toLowerCase() === form.name.toLowerCase())

        if (!findContact) {
            dispatch(addContact(newContact));
            return setForm({ name: '', number: '' });
        }
        return alert(`${form.name} is already in list`);

    }
    const inputHandler = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: value,

        }));
    }
    return (<ContainerForm onSubmit={onSubmit}>
        <Label htmlFor={inputNameId}>Name
            <input
                type="text"
                name="name"
                value={form.name}
                onChange={inputHandler}
                id={inputNameId}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            /></Label>
        <Label htmlFor={inputNumberId}>Phone
            <input
                type="tel"
                name="number"
                value={form.number}
                onChange={inputHandler}
                id={inputNumberId}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            /></Label>
        <Button type="submit">Add Contact</Button>
    </ContainerForm>);
}

