import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './comp/pages/Home'
import Contato from './comp/pages/Contato'
import Menu from './comp/pages/Menu'

import Header from './comp/layout/Header';

import Container from './comp/layout/Container';



function App() {
  return (
    <Router>
      <Header/>
      <Container customClass="min-height"></Container>
      <Routes>
      <Route  path="/" element={<Home />} />
              <Route  path="Menu" element={<Menu />} />
              <Route  path="Contato" element={<Contato/>} />
      </Routes>

    </Router>
  );
}

export default App;
