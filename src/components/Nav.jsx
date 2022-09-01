import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="nav_div">
            <nav>
                <li><Link to="/">Home</Link></li>
            </nav>
        </div >
    )
}

export default Nav;