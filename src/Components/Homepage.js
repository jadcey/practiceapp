import '../Css/Homepage.css';
import Header from './Header';
import '../Css/Header.css';



const Homepage =() => { 
  return (
    <div>
      <Header/>
        <div className = "home-container1">
          <div className ='home-picture'/>
          <div className ='home-picture1'/>
        </div>
        <div className= "home-container2">
          <h1>More than just a Vape Shop</h1>
        </div>
    </div>
  );
}
export default Homepage;
