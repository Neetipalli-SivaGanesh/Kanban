import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Sidebar from './cleaningliquids/Sidebar';
import Home from './cleaningliquids/Home';
import Admin from './cleaningliquids/Admin';
import About from './cleaningliquids/About';
function App() {
  return (
    <Router>
        <Sidebar/>
        <Routes>
            <Route path='/home' element ={<Home/>}/>
            <Route path='/About' element ={<About/>}/>
            <Route path='/Admin' element ={<Admin/>}/>
          </Routes>
    </Router>
  );
}

export default App;
