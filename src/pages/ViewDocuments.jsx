import { useEffect, useState } from 'react';
import axios from 'axios';
import Nav from '../components/Nav';

const ViewDocuments = () => {

    const [documents, setDocuments] = useState([]);
    var korisnikId = localStorage.getItem('Id');

    useEffect(() => {
        axios.get(`api/get-documents/${korisnikId}`).then(res => {
            setDocuments(res.data.documents);
        });

    }, []);


    return (
        <div className="vd-div">

            <Nav />

            <h1 id='dcm-h1'>Documents</h1>

            <div className='tbl-div'>
                <table className="table table-bordered">
                    <thead id='th-tbl'>
                        <tr>
                            <th>Document ID</th>
                            <th>Naziv</th>
                            <th>Kategorija</th>
                            <th>Opis</th>
                            <th>Putanja</th>
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
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ViewDocuments;