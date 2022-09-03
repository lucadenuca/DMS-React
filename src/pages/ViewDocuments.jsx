import { useEffect, useState } from 'react';
import axios from 'axios';
import Nav from '../components/Nav';
import { useNavigate, Link } from 'react-router-dom';

const ViewDocuments = () => {

    const [documents, setDocuments] = useState([]);
    var korisnikId = localStorage.getItem('Id');
    const navigate = useNavigate();
    const [input, setInput] = useState('');
    const [sortKolona, setSortKolona] = useState('');
    const [sortPoredak, setSortPoredak] = useState('');

    useEffect(() => {
        axios.get(`api/get-documents/${korisnikId}`).then(res => {
            setDocuments(res.data.documents);
        });

    }, []);


    function deleteDocument(id) {
        axios.delete(`api/delete-document/${id}`).then(res => {
            if (res.data.value) {
                alert('Dokument obrisan')
                navigate(0);
            }
        });
    }


    function handleInput(e) {
        setInput(e.target.value)
    }

    function pretraga() {
        axios.get(`api/search-documents/${korisnikId}/${input}`).then(res => {
            setDocuments(res.data.documents);
        });

    }


    function handleSortKolona(e) {
        setSortKolona(e.target.value)
    }

    function handlePoredakSort(e) {
        setSortPoredak(e.target.value)

    }

    function sort() {
        axios.get(`api/sort-documents/${korisnikId}/${sortKolona}/${sortPoredak}`).then(res => {
            setDocuments(res.data.documents);
        });
    }



    return (
        <div className="vd-div">

            <Nav />

            <h1 id='dcm-h1'>Documents</h1>

            <Link to="/docs"><button className='btn btn-dark' id='add-btn'>ADD</button></Link>

            <div className='fl-div'>
                <div className='sr-div'>
                    <input type="text" onChange={handleInput} value={input} className='form-control' id='in-txt-src' />
                    <button className='btn btn-dark' onClick={pretraga} id='btn-src'>Pretraga</button>
                </div>
                <div className='sr-div'>
                    <select className='form-select' onChange={handleSortKolona} id='kol-s'>
                        <option>Choose item</option>
                        <option value="id">Document ID</option>
                        <option value="naziv">Naziv</option>
                        <option value="kategorija">Kategorija</option>
                        <option value="opis">Opis</option>
                        <option value="putanja">Putanja</option>
                    </select>
                    <select className='form-select' onChange={handlePoredakSort} id='kol-p'>
                        <option>Choose item</option>
                        <option value="asc">Rastuce</option>
                        <option value="desc">Opadajuce</option>
                    </select>
                    <button className='btn btn-dark' onClick={sort} id='btn-src'>Sort</button>
                </div>
            </div>

            <div className='tbl-div'>
                <table className="table table-bordered">
                    <thead id='th-tbl'>
                        <tr>
                            <th>Document ID</th>
                            <th>Naziv</th>
                            <th>Kategorija</th>
                            <th>Opis</th>
                            <th>Putanja</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {documents.map(document => {
                            return (
                                <tr key={document.id}>
                                    <td>{document.id}</td>
                                    <td>{document.naziv}</td>
                                    <td>{document.kategorija}</td>
                                    <td>{document.opis}</td>
                                    <td>{document.putanja}</td>
                                    <td>
                                        <button className='btn btn-dark' onClick={() => deleteDocument(document.id)} id='delbtn'>DELETE</button>
                                        <Link to={`/edit/${document.id}`}><button className="btn btn-dark" id='edtbtn'>EDIT</button></Link>
                                    </td>

                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default ViewDocuments;