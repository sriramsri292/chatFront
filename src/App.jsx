import { Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './component/home';
import Chat from './component/chat';
import Login from './component/login';
import Register from './component/register';
import Forgot from './component/forgot';


function App() {
  return (
    <div>
    
    
  <Routes> 
  <Route path='/' element={<Login/>}/>
  <Route path='/register' element={<Register/>}/>
  <Route path='/forgot' element={<Forgot/>}/>
  <Route path='/home' element={<Home/>}/>
  <Route path='/chat' element={<Chat/>}/>
  </Routes>
    </div>
  );
}

export default App;
