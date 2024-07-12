import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import DetailPage from './components/Details/DetailPage';
import NewVideo from './components/NewVideo/NewVideo';
import EditForm from './components/EditForm/EditForm'; // Importa el formulario de edición

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/detail" element={<DetailPage />} />
          <Route path="/nuevo-video" element={<NewVideo />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
