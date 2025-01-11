import { Outlet, NavLink } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg bg-primary navbar-dark" data-bs-theme="dark">
                    <div className="container-fluid">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link fs-4"
                                    style={({ isActive }) => ({ color: isActive ? '#9acd32' : '#ee82ee' })}
                                    to="/"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link fs-4"
                                    style={({ isActive }) => ({ color: isActive ? '#9acd32' : '#ee82ee' })}
                                    to="/about"
                                >
                                    Chi Siamo
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link fs-4"
                                    style={({ isActive }) => ({ color: isActive ? '#9acd32' : '#ee82ee' })}
                                    to="/posts"
                                >
                                    Post
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <main>
                <Outlet /> 
            </main>
        </>
    );
};

export default Layout;