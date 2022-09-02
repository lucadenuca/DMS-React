import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from "./pages/Register";
import axios from 'axios';
import Prijava from "./pages/Prijava";
import Docs from "./pages/Docs";
import ViewDocuments from "./pages/ViewDocuments";
import Edit from "./pages/Edit";

axios.defaults.baseURL = "http://localhost:8000/"
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = true;


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="registracija" element={<Register />} />
          <Route path="prijava" element={<Prijava />} />
          <Route path="docs" element={<Docs />} />
          <Route path="view" element={<ViewDocuments />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </Router >
    </div>
  );
}

export default App;
