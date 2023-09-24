

import './App.css';
import Home from './Components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import CustomNavbar from './Components/CustomNavbar';
import Login from './Components/Login';
import SignUp from './Components/SignUp';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login'  element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>

      </Routes>
   
    </div>
  );
}

export default App;
