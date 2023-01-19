
import { ContactList } from "./ContactList/ContactList";
import { Container } from "./App.styled";
import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { Register } from "./Register/Register";
import { Login } from "./Login/Login";
import { useSelector } from "react-redux";
import { getUserToken } from "Redux/phonebookSlice";
export const App = () => {
  const token = useSelector(getUserToken);
  return (<Container>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="register" element={!token ? <Register /> : <Navigate to={"/contacts"} replace />} />
        <Route path="login" element={!token ? <Login /> : <Navigate to={"/contacts"} replace />} />
        <Route path="contacts" element={token ? <ContactList /> : <Navigate to={"/login"} replace />} />
      </Route>
    </Routes>
  </Container >)
}