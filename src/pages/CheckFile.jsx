import { useState } from 'react';
import axios from 'axios';
import Nav from '../components/Nav';

const CheckFile = () => {

    const [fajl, setFajl] = useState();
    const [naziv, setNaziv] = useState('');
    const [tip, setTip] = useState('');
    const [velicina, setVelicina] = useState('');

    function handleFajl(e) {
        setFajl(e.target.files[0])
    }


    function check() {

        const data = new FormData();
        data.append("file", fajl);

        const options = {
            method: 'POST',
            url: 'https://converter12.p.rapidapi.com/api/converter/1/FileConverter/Convert',
            headers: {
                'X-RapidAPI-Key': '4916172c11msh0beee19c8846ca4p127267jsn0bc7bcd7fc43',
                'X-RapidAPI-Host': 'converter12.p.rapidapi.com'
            },
            data: data
        };

        axios.request(options).then(function (response) {

            setNaziv(response.data.name)
            setTip(response.data.type)
            setVelicina(response.data.size)

        }).catch(function (error) {
            console.error(error);
        });
    }


    return (
        <div className="cf-div">
            <Nav />

            <h1 id='cf-h1'>Check File Info</h1>

            <div className="cf-in">
                <input type="file" className="form-controlmt-2 mb-2" onChange={handleFajl} />
                <button className='btn btn-dark mt-3 mb-2' onClick={check} id='btn-check'>Check</button>
                <h2 className='mt-3'>Naziv: {naziv}</h2>
                <h2>Tip: {tip}</h2>
                <h2>Velicina: {velicina}    B</h2>
            </div>

        </div>
    )
}

export default CheckFile;