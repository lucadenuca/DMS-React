import Nav from "../components/Nav";
import { useState } from 'react'

const Prijava = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleUsername(e) {
        setUsername(e.target.value)
    }

    function handlePassword(e) {
        setPassword(e.target.value)
    }



    return (
        <div className="prijava_div">
            <Nav />
            <h2 id="dms-h2">Document Management System</h2>

            <div className="prijava_form">

                <div className="reg_form_field_div text-center">
                    <label>Username</label>
                    <input type='text' className="form-control mt-2 mb-2" value={username} onChange={handleUsername} />
                </div>

                <div className="reg_form_field_div text-center">
                    <label className="">Password </label>
                    <input type='password' className="form-control mt-2 mb-2" value={password} onChange={handlePassword} />
                </div>

                <button className="btn btn-light" id="button-prijavi-se-frm">Prijavi se</button>
            </div>
        </div>
    )
}

export default Prijava;