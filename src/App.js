import { useState, useRef} from 'react';
import Navbar from "./components/Navbar";
import TextForm from './components/TextForm';
import Alert from 'react-bootstrap/Alert';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


function App() {
  const [theme, setTheme] = useState('light');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');

  const timeoutRef = useRef(null);

  function Alert2(message, type){
    setAlertMessage(message);
    setAlertType(type);
    setShowAlert(true);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  }

  function toggleMode() {
    if(theme === 'light') {
      setTheme('dark')
      document.body.style.backgroundColor='#343a40';
      Alert2("Dark Mode is Enabled", "success");
    }
    else{
      setTheme('light')
      document.body.style.backgroundColor='white';
      Alert2("Light Mode is Enabled", "success");
    }
  }

  return (
    <>
    <Router>
      <Navbar title={"React-JS"} aboutText={"About"} theme={theme} toggleMode={toggleMode} />
      {showAlert &&
        <Alert variant="info" onClose={() => setShowAlert(false)} dismissible>
          {alertType}: {alertMessage}
        </Alert>
      }
      <div className='container my-3'>

      <Routes>
      <Route path="/" element={<TextForm heading={"Enter Your Text Here"} theme={theme} />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Navigate to="/" />} />
      </Routes>
        
      </div>
      </Router>
    </>
  );
}

export default App;


