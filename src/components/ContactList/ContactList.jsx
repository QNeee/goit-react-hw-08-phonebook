import { useDispatch, useSelector } from "react-redux";
import { ContactListUl, ContactListLi, Button, Container, Title } from './ContactList.syled';
import { getFilter, getContacts, getLoading, getErrror, getUserToken, getRefreshed } from "Redux/phonebookSlice";
import { fetchContacts, deleteContact } from "Redux/phonebookOperations";
import { useEffect } from "react";
import { Form } from "components/Form/Form";
import { Filter } from "components/Filter/Filter";
import { fetchRefresh } from "Redux/authOperations";
export const ContactList = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const getFilteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
    const dispatch = useDispatch();
    const loading = useSelector(getLoading);
    const error = useSelector(getErrror);
    const token = useSelector(getUserToken);
    const refreshed = useSelector(getRefreshed);
    useEffect(() => {
        dispatch(fetchRefresh(token));
        dispatch(fetchContacts());
    }, [dispatch, token])
    return (<Container><Title>Phonebook</Title><Form /><Filter /><ContactListUl>
        {contacts.length === 0 && !loading && !error && !refreshed && <p>No contacts</p>}
        {loading && <p>Loading</p>}
        {error && <p>Oops somthing wrong</p>}
        {getFilteredContacts.map(item => <ContactListLi id={item.id} key={item.id}>{item.name}:{item.number}<Button type="button" onClick={() => dispatch(deleteContact(item.id))}>Delete</Button></ContactListLi>)}
    </ContactListUl></Container>)
}

