import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/Home';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SingleProject from './components/singleProject/SingleProject';


function App() {
  return (
    <div className="body-container">
    <div className="content-container">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/detail/:projectId" element={<SingleProject/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  </div>
  );
}

export default App;
