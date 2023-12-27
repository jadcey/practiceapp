import { useNavigate } from 'react-router-dom';
import '../Css/Homepage.css';
import Header from './Header';
import '../Css/Header.css';


const Homepage =() => {
    const navigate = useNavigate();
    const toHomeVape = () => {
        navigate('/homevape');
    }
    const toHomeGoodDudes = () =>{
      navigate('/homegooddudes');
    }
  return (
    <div>
      <Header/>
        <button onClick = {toHomeVape}>VapeN'Hell</button>
        <button onClick = {toHomeGoodDudes}>GoodDudes</button>
    </div>
  );
}
export default Homepage;
