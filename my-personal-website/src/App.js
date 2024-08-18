import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
// import About from './components/About';
// import Writings from './components/Writings';
// import Prototypes from './components/Prototypes';

function App() {
  const title = "Welcome to the new blog";
  return (
    <BrowserRouter>
      <div className="App">
        <Home />
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/writings" element={<Writings />} />
          <Route path="/prototypes" element={<Prototypes />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
