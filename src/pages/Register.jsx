import { useState } from 'react';
import axios from 'axios';
import Nav from '../components/Nav';


const Register = () => {

    const [ime_prezime, setImePrezime] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    function handleImePrezime(e) {
        setImePrezime(e.target.value)
    }

    function handleUsername(e) {
        setUsername(e.target.value)
    }

    function handlePassword(e) {
        setPassword(e.target.value)
    }

    function handleEmail(e) {
        setEmail(e.target.value)
    }

    const user = {
        ime_prezime: ime_prezime,
        username: username,
        password: password,
        email: email,
    }


    function registracija() {

        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post(`api/registracija`, user).then(res => {
                if (res.data)
                    alert("Registracija uspesna!")
            }).catch(error => {
                alert(error.response.data.error)
            })
        })
    }



    return (
        <div className="reg_page_div">

            <Nav />

            <div className="reg_form_div">

                <div className="reg_form_field_div">
                    <label>Ime prezime</label>
                    <input type='text' className="form-control mt-2 mb-2" value={ime_prezime} onChange={handleImePrezime} />
                </div>

                <div className="reg_form_field_div">
                    <label>Username</label>
                    <input type='text' className="form-control mt-2 mb-2" value={username} onChange={handleUsername} />
                </div>

                <div className="reg_form_field_div">
                    <label>Password </label>
                    <input type='password' className="form-control mt-2 mb-2" value={password} onChange={handlePassword} />
                </div>

                <div className="reg_form_field_div">
                    <label>Email</label>
                    <input type='email' className="form-control mt-2 mb-2" value={email} onChange={handleEmail} />
                </div>


                <button onClick={registracija} className='btn btn-dark' id='reg-btn'>Registruj se</button>
            </div>

        </div>
    )
}

export default Register;