import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './component/reg';
import Login from './component/login';
function App() {
  return (
   <>
    <BrowserRouter>
        <Routes>
          <Route path='/Reg' element={<Register />} />
          <Route path='/Login' element={<Login />} />
          {/*<Route path='/Dashboard' element={<Dashboard/>} />
          <Route path='/Update/:id' element={<Update/>} />
           */}
      </Routes>
      </BrowserRouter>
   
   </>
  );
}

export default App;
