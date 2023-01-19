import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import { getUserToken } from "Redux/phonebookSlice"
import { NavItem } from "./Layout.styled"
import { Appbar } from "components/Appbar/Appbar"
import { Header } from "./Layout.styled"
export const Layout = () => {
    const token = useSelector(getUserToken)
    return <><Header>
        <nav>
            {!token && <NavItem to={"/register"}>Register</NavItem>}
            {!token ? <NavItem to={"/login"}>Login</NavItem> : <NavItem to={"/contacts"}>Contacts</NavItem>}
        </nav>
        {token && <Appbar />}
    </Header>
        <main><Outlet /></main>
    </>
}