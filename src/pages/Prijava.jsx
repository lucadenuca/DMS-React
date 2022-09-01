import Nav from "../components/Nav";
import { useState } from 'react';
import axios from 'axios';


const Prijava = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleUsername(e) {
        setUsername(e.target.value)
    }

    function handlePassword(e) {
        setPassword(e.target.value)
    }

    const user = {
        username: username,
        password: password,
    }

    console.log(user)

    function prijava() {

        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post(`api/prijava`, user).then(res => {
                if (res.data.value) {
                    alert("Prijava uspesna!")
                }
                else {
                    alert("Prijava neuspesna");
                }

            }).catch(error => {
                alert(error.response.data.error)
            })
        })
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

                <button onClick={prijava} className="btn btn-light" id="button-prijavi-se-frm">Prijavi se</button>
            </div>
        </div>
    )
}

export default Prijava;