import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import { getUserToken } from "Redux/phonebookSlice"
import { NavItem } from "./Layout.styled"
export const Layout = () => {
    const token = useSelector(getUserToken)
    return <><header>
        <nav>
            <NavItem to={"/home"}>Home</NavItem>
            <NavItem to={"/register"}>Register</NavItem>
            {!token ? <NavItem to={"/login"}>Login</NavItem> : <NavItem to={"/contacts"}>Contacts</NavItem>}
        </nav>
    </header>
        <main><Outlet /></main>
    </>
}