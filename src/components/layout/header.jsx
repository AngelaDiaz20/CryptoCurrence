import './header.css'
import Logo from '../../assets/brands/logo_crypto.png'
import UserProfile from '../../assets/img/user.webp'
import { FaBell, FaMailBulk, FaSearch } from "react-icons/fa";

const Header = () => {
    return(
        <header>
            <img src={Logo} alt="Logo Crypto Currence"/>
            <div className='search-input'>
                <input 
                    type="text" 
                    name="search" 
                    id="search"
                    placeholder='Search'
                />
                <FaSearch className='search'/>
            </div>
            <nav>
                <FaBell className='icon'/>
                <FaMailBulk className='icon'/>
                <img src={UserProfile} alt="Usuario"/>
            </nav>
        </header>
    );
}

export default Header;