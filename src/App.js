import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/Home';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SingleProject from './components/singleProject/SingleProject';
import Blogs from './components/blogs/Blogs';


function App() {
  return (
    <div className="body-container">
    <div className="content-container">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/detail/:projectId" element={<SingleProject/>}></Route>
        <Route path="/blogs" element={<Blogs/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  </div>
  );
}

export default App;
