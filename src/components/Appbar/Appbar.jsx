import { useDispatch, useSelector } from "react-redux"
import { getUserEmail } from "Redux/phonebookSlice"
import { logOut } from "Redux/authOperations"
import { Container, Button } from "./Appbar.styled"
export const Appbar = () => {
    const userEmail = useSelector(getUserEmail);
    const dispatch = useDispatch();
    const handleLogout = (e) => {
        dispatch(logOut());
    }
    return <Container>
        <p>{userEmail}</p>
        <Button type="button" onClick={handleLogout}>Logout</Button>
    </Container>
}