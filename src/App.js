import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="registracija" element={<RegisterPage />} />
        </Routes>
      </Router >
    </div>
  );
}

export default App;
