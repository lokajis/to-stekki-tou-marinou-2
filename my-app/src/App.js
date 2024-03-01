import './App.css';

import Navbar from './components/navBar';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import ContuctPage from './pages/contactPage';
import PageOne from './pages/pageOne';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>   
           <Route path="/" element={<PageOne />} />
     
            <Route path="contactPage" element={<ContuctPage />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
