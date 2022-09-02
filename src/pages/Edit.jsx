import { useState } from 'react'
import Nav from '../components/Nav';
import { useParams } from 'react-router-dom';

const Edit = () => {

    const parametri = useParams();
    const idParametar = parametri.id;
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


    return (
        <div className="ed-div">

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

                <button className='btn btn-dark' id='reg-btn'>Upload File</button>
            </div>



        </div>
    )
}

export default Edit;