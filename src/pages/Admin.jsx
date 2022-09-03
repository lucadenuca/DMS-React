import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Nav from '../components/Nav';


const Admin = () => {

    const [documents, setDocuments] = useState([]);
    const navigate = useNavigate();
    const [input, setInput] = useState('');

    useEffect(() => {
        axios.get(`api/get-documents`).then(res => {
            console.log(res)
            setDocuments(res.data.documents);
        });

        console.log("DCM" + documents)

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
        axios.get(`api/search-documents-admin/${input}`).then(res => {
            setDocuments(res.data.documents);
        });

    }


    return (
        <div className="admin-div">

            <Nav />

            <h1 id='adm-h1'>Admin</h1>

            <Link to="/docs"><button className='btn btn-dark' id='add-btn'>ADD</button></Link>
            <div className='sr-div'>
                <input type="text" onChange={handleInput} value={input} className='form-control' id='in-txt-src' />
                <button className='btn btn-dark' onClick={pretraga} id='btn-src'>Pretraga</button>
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

export default Admin;