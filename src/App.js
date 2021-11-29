import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/Home';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


function App() {
  return (
    <div className="body-container">
      <div className="content-container">
        <Home/>
      </div>
    </div>
  );
}

export default App;
