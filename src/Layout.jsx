import { Outlet, NavLink } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <header>
                <nav className='navbar navbar-ligth bg-ligth'>
                    <ul className='navbar-nav'>
                        <li className='navbar-item'>
                            <NavLink style={({isActive}) => ({color: isActive ? 'yellowgreen' : 'violet'})} to='/'>Home</NavLink>
                        </li>
                        <li className='navbar-item'>
                            <NavLink style={({isActive}) => ({color: isActive ? 'yellowgreen' : 'violet'})} to='/about'>Chi Siamo</NavLink>
                        </li>
                        <li className='navbar-item'>
                            <NavLink style={({isActive}) => ({color: isActive ? 'yellowgreen' : 'violet'})} to='/posts'>Post</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </>

    );
};

export default Layout;