import { Outlet, Link } from "react-router-dom";
import "./login.css"

const Layout = () => {
    return (
        <>
            <nav className="navbar navbar-inverse">
             <div className="container-fluid">
                <div className="navbar-header">
                    
                    <a className="navbar-brand" href="/">Todo-Note</a>
            </div>
            <ul className="nav navbar-nav">
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/signup">Sign Up</Link>
                </li>
                
            </ul>
             </div>
           </nav>
         <Outlet />
        </>
    )
}

export default Layout