import logo from './logo.svg';
import './App.css';
import { isMobile } from 'react-device-detect';

function App() {
  return (
    <div className="App">
      {isMobile ? (
        <h1>Mobile View</h1>
      ):(
        <h1>Desktop view</h1>
      )}

    </div>
  );
}

export default App;
