import { useDispatch, useSelector } from "react-redux";
import { ContactListUl, ContactListLi, Button } from './ContactList.syled';
import { getFilter, getContacts, getLoading, getErrror } from "Redux/phonebookSlice";
import { fetchContacts, deleteContact } from "Redux/phonebookOperations";
import { useEffect } from "react";
export const ContactList = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const getFilteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
    const dispatch = useDispatch();
    const loading = useSelector(getLoading);
    const error = useSelector(getErrror);
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch])
    return (<ContactListUl>
        {contacts.length === 0 && !loading && !error && <p>No contacts</p>}
        {loading && <p>Loading</p>}
        {error && <p>Oops somthing wrong</p>}
        {getFilteredContacts.map(item => <ContactListLi id={item.id} key={item.id}>{item.name}:{item.number}<Button type="button" onClick={() => dispatch(deleteContact(item.id))}>Delete</Button></ContactListLi>)}
    </ContactListUl>)
}

