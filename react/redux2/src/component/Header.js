import React from 'react';
import { Link} from 'react-router-dom';

const Header = () => {
    return(
        <header>
            <div>
                <Link to="/">News Home</Link>
                <Link to="/forms">Forms</Link>
            </div>
        </header>
    )
}

export default Header;