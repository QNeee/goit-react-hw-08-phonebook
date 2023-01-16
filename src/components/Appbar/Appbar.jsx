import { useDispatch, useSelector } from "react-redux"
import { getUserEmail } from "Redux/phonebookSlice"
import { logOut } from "Redux/authOperations"
export const Appbar = () => {
    const userEmail = useSelector(getUserEmail);
    const dispatch = useDispatch();
    const handleLogout = (e) => {
        dispatch(logOut());
    }
    return <div>
        <p>{userEmail}</p>
        <button type="button" onClick={handleLogout}>Logout</button>
    </div>
}