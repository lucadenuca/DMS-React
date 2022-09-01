import Nav from "../components/Nav";
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="home_page_div">
            <Nav />
            <h2 id="dms-h2">Document Management System</h2>
            <Link to="prijava"><button className="btn btn-light" id="button-prijavi-se">Prijavi se</button></Link>
            <p id="nn">Nemate nalog? Registrujte se <Link to="/registracija"><u>ovde</u></Link>.</p>
        </div>
    )
}

export default HomePage;