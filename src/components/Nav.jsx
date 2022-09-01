import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Nav = () => {

    const navigate = useNavigate();

    function odjava() {

        axios.post(`api/odjava`).then(res => {
            localStorage.removeItem('Username');
            localStorage.removeItem('Login_token');

            alert("Odjavljivanje uspesno")

            navigate('/prijava');
        });
    }


    return (
        <div className="nav_div">
            <nav>
                <li><Link to="/">Home</Link></li>
                {localStorage.getItem('Username') ? <li id='srr'><Link to='#' onClick={odjava}>Logout</Link></li> : ''}
            </nav>
        </div >
    )
}

export default Nav;