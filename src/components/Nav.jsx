import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Nav = () => {

    const navigate = useNavigate();

    function odjava() {

        axios.post(`api/odjava`).then(res => {
            localStorage.removeItem('Username');
            localStorage.removeItem('Login_token');
            localStorage.removeItem('Vrsta_korisnika');
            localStorage.removeItem('Id');

            if (res.data.value) {
                alert("Odjavljivanje uspesno")
                navigate('/prijava');
            } else {
                alert("Odjavljivanje neuspesno")
            }

        });
    }


    return (
        <div className="nav_div">
            <nav>
                {localStorage.getItem('Id') ? (localStorage.getItem('Vrsta_korisnika') === 'admin' ? <li><Link to="/admin">Home</Link></li> : <li> <Link to="/view">Home</Link></li>)
                    : <li><Link to="/">Home</Link></li>}
                {localStorage.getItem('Username') ? <li id='srr'><Link to='#' onClick={odjava}>Logout</Link></li> : ''}
                {localStorage.getItem('Username') ? <li id='srr'><Link to='/check'>Check</Link></li> : ''}
            </nav>
        </div >
    )
}

export default Nav;