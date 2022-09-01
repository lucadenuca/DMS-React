import { useState } from 'react';

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


    return (
        <div className="reg_page_div">

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


                <button className='btn btn-dark' id='reg-btn'>Registruj se</button>
            </div>

        </div>
    )
}

export default Register;