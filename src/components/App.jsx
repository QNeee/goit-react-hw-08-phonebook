
import { Form } from "./Form/Form";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { Container, Title } from "./App.styled";
import { Register } from "./Register/Register";
import { Login } from "./Login/Login";
export const App = () => {
  return (<Container>
    {/* <Register /> */}
    <Login />
    {/* <Title>Phonebook</Title>
    <Form />
    <Title>Contacts</Title>
    <Filter />
    <ContactList /> */}
  </Container >)
}