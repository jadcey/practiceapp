import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './Components/Homepage';
import HomeVape from './Components/HomeVape';
import HomeGoodDudes from './Components/HomeGoodDudes';
import LoginForm from './Components/LoginForm';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element = {<Homepage/>}/>
          <Route path = "/home" element ={<Homepage/>}/>
          <Route path = "/homevape" element ={<HomeVape/>}/>
          <Route path = "/homegooddudes" element ={<HomeGoodDudes/>}/>
          <Route path = "/login" element = {<LoginForm/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

