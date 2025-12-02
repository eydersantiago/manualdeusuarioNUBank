import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import HelpPage from './components/HelpPage/HelpPage';
import Home from './components/Home/Home';
import ModulesPage from './components/ModulesPage/ModulesPage';
import SupportPage from './components/SupportPage/SupportPage';
import UseCasesPage from './components/UseCasesPage/UseCasesPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/modulos" element={<ModulesPage />} />
          <Route path="/ayuda" element={<HelpPage />} />
          <Route path="/casos" element={<UseCasesPage />} />
          <Route path="/soporte" element={<SupportPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
