import './App.css';
import MyComponent from './pages/test'
import Navbar from './components/navBar';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import ContuctPage from './pages/contactPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>   
           <Route path="/" element={<MyComponent />} />
     
            <Route path="contactPage" element={<ContuctPage />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
