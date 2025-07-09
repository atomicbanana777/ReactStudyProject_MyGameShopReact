import { NavLink } from "react-router";

const MyNavBar = () => {
    return (
        <header>
            <nav>
                <div className="container">
                    <div id="myNavbar">
                        <ul>
                            <div id="myLogo"></div>
                            <li><NavLink to="/" className={({isActive}) => isActive ? 'navbarBtn_On' : 'navbarBtn_Off'} >Home</NavLink></li>
                            <li><NavLink to="/games" className={({isActive}) => isActive ? 'navbarBtn_On' : 'navbarBtn_Off'}>Game List</NavLink></li>
                            <li><NavLink to="/addnews" className={({isActive}) => isActive ? 'navbarBtn_On' : 'navbarBtn_Off'}>Add News</NavLink></li>
                        </ul>
                        <ul>
                            <li><NavLink to="/about" className={({isActive}) => isActive ? 'navbarBtn_On' : 'navbarBtn_Off'}>About</NavLink></li>
                            <li><NavLink to="/contact" className={({isActive}) => isActive ? 'navbarBtn_On' : 'navbarBtn_Off'}>Contact Us</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default MyNavBar;