import { useState } from "react";
import logo from '../images/logo.svg';
import DensityMediumOutlinedIcon from '@mui/icons-material/DensityMediumOutlined';
import { Link } from "react-router-dom";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    console.log("aa", isOpen);
    const HandleToggle = () => {
        console.log("tt", isOpen);
        setIsOpen(!isOpen);
        console.log("tt", isOpen);
    };
    console.log("ss", isOpen);
    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <Link to="/">
                        <img src={logo} alt="Beach Resort" />
                    </Link>
                    <button type="button" className="nav-btn" onClick={HandleToggle}>
                        <DensityMediumOutlinedIcon fontSize="large" className="nav-icon" />
                    </button>
                </div>
                <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Rooms">Rooms</Link>
                    </li>
                </ul>
            </div>

        </nav>
    )
}

export default NavBar;