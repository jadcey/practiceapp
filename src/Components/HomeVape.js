import { useNavigate } from 'react-router-dom';
const HomeVape=()=>{
    const navigate = useNavigate();
    const homepage = () => {      
        navigate('/home');
    }
    return(
        <div>
            VapeN'Hell
            <button onClick={homepage}>Home</button>
        </div>
    );
}
export default HomeVape;