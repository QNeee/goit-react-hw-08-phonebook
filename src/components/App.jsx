
import { ContactList } from "./ContactList/ContactList";
import { Container } from "./App.styled";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { Register } from "./Register/Register";
import { Login } from "./Login/Login";
import { Home } from "./Home/Home";
import { useDispatch, useSelector } from "react-redux";
import { getUserToken } from "Redux/phonebookSlice";
import { Appbar } from "./Appbar/Appbar";
import { useEffect } from "react";
import { fetchRefresh } from "Redux/authOperations";
export const App = () => {
  const token = useSelector(getUserToken);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRefresh(token));
  }, [dispatch, token])
  return (<Container>
    {token && <Appbar />}
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={!token && <Login />} />
        <Route path="contacts" element={token ? <ContactList /> : <div>goLOgin</div>} />
      </Route>
    </Routes>
  </Container >)
}