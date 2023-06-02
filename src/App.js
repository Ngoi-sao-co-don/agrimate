import './Global.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';
import LoginPage from './pages/LoginPage';
import IntroducePage from './pages/IntroducePage';

function App() {
  return <div className="App">
    <Router>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/AdminPage" element={<AdminPage />}></Route>
          <Route path="/LoginPage" element={<LoginPage />}></Route>
          <Route path="/IntroducePage" element={<IntroducePage />}></Route>
        </Routes>
    </Router>
  </div>
}

export default App;
