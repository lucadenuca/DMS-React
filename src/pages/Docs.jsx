import Nav from "../components/Nav";
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const Docs = () => {

    const navigate = useNavigate();
    const [naziv, setNaziv] = useState('');
    const [opis, setOpis] = useState('');
    const [kategorija, setKategorija] = useState('');
    const [fajl, setFajl] = useState();
    const [korisnik, setKorisnik] = useState('');

    function handleNaziv(e) {
        setNaziv(e.target.value)
    }

    function handleOpis(e) {
        setOpis(e.target.value)
    }

    function handleKategorija(e) {
        setKategorija(e.target.value)
    }

    function handleFajl(e) {
        setFajl(e.target.files[0])
    }

    function uploadFile() {

        const file = new FormData();

        file.append('naziv', naziv);
        file.append('opis', opis);
        file.append('kategorija', kategorija);
        file.append('fajl', fajl);
        file.append('korisnik', localStorage.getItem('Id'));

        axios.post(`api/upload`, file).then(res => {
            if (res.data.value) {
                alert("Uspesno uploadovan fajl")

                if (localStorage.getItem('Vrsta_korisnika') === 'admin') {
                    navigate('/admin')
                    return
                }

                navigate("/view")
            } else {
                alert("Greska")
            }
        });


    }


    return (
        <div className="docs_div">
            <Nav />

            <div className="reg_form_div">

                <div className="reg_form_field_div">
                    <label>Naziv</label>
                    <input type='text' className="form-control mt-2 mb-2" value={naziv} onChange={handleNaziv} />
                </div>


                <div className="reg_form_field_div">
                    <label>Opis </label>
                    <input type='text' className="form-control mt-2 mb-2" value={opis} onChange={handleOpis} />
                </div>

                <div className="reg_form_field_div">
                    <label>Kategorija </label>
                    <input type='text' className="form-control mt-2 mb-2" value={kategorija} onChange={handleKategorija} />
                </div>

                <div className="reg_form_field_div">
                    <label>Fajl </label>
                    <input type="file" className="form-controlmt-2 mb-2" onChange={handleFajl} />
                </div>

                <button onClick={uploadFile} className='btn btn-dark' id='reg-btn'>Upload File</button>
            </div>

        </div>
    )
}

export default Docs;