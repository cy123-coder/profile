import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Hover from './pages/Hover';
import Mainpage from './pages/Mainpage';
import Music from './pages/Music';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Hover/>}/>
        <Route path="/mainpage" element =  {<Mainpage/>} />
        <Route path="/music" element =  {<Music/>} />


      </Routes>
    
    </BrowserRouter>
     
  );
}

export default App;

