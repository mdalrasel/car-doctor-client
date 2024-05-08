import { FaSearch, FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../src/assets/logo.svg"
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const Navbar = () => {

    const { user, SignOut } = useContext(AuthContext);

    const handleSignOut = () => {
        SignOut()
            .then()
            .catch()
    }

    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to=''>About</Link></li>
        <li><Link to=''>Services</Link></li>
        <li><Link to=''>Blog</Link></li>
        {
            user?.email ? <>
                <li><Link to='/checkOutCard'>My Check List</Link></li>
                <button onClick={handleSignOut}>SignOut</button>
            </>
                : <Link to='/signin'>SignIn</Link>
        }
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost w-20"><img src=
                    {logo} alt="" />  </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end gap-5">
                <button><FaShoppingBag /></button>
                <button><FaSearch /></button>

                <a className="btn btn-outline btn-secondary">Appointment</a>
            </div>
        </div>
    );
};

export default Navbar;