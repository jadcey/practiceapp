import { useNavigate } from 'react-router-dom';
import '../Css/Homepage.css';

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
        <button onClick = {toHomeVape}>VapeN'Hell</button>
        <button onClick = {toHomeGoodDudes}>GoodDudes</button>
    </div>
  );
}
export default Homepage;
