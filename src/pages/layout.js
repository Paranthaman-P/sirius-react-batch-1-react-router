import React, { Suspense, lazy } from 'react';
import Footer from './footer';
import Header from './header';
import "./style.css";
import { NavLink, Link, Outlet } from 'react-router-dom';

// const Header = React.lazy(() => {
//     return new Promise(resolve => setTimeout(resolve, 1000)).then(
//         () => import("./header")
//     );
// });

function Layout() {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
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
            </Suspense>
        </>
    )
}

export default Layout;