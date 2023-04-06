import Header from './header';
import Footer from './footer';

import "./style.css";

import { NavLink, Link, Outlet } from 'react-router-dom';

function Layout() {
    return (
        <>
            <Header />

            <nav>
                <NavLink to="/">Home</NavLink>

                <NavLink to="/about">About</NavLink>

                <NavLink to="/contact">Contact</NavLink>

            </nav>
            
            <div>
                <Outlet />
            </div>

            <Footer />            

        </>
    )
}

export default Layout;