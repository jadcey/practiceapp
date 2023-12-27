import { useNavigate } from 'react-router-dom';
import Header from './Header';
const HomeGoodDudes=()=>{
    const navigate = useNavigate();
    const homepage = () => {      
        navigate('/home');
    }
    return(
        <div>
            <Header/>
            GoodDudes!!
            <button onClick={homepage}>Home</button>
        </div>
    );
}
export default HomeGoodDudes;