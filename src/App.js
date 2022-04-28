import Home from './components/pages/home';
import Detail from './components/pages/detail';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/index.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/:movie" element={<Detail />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
