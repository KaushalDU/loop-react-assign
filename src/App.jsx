
import './App.css';
import Body from './Components/Body';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import ProductBox from './Components/ProductBox';
import SavingPlan from './Components/SavingPlan';
import WellnessBonus from './Components/WellnessBonus';



function App() {
  return (
    <div className="App">
    <Navbar/>
    <Hero/>
    <Body/>
    <ProductBox/>
    <SavingPlan/>
    <WellnessBonus/>
    <Footer/>
    </div>
  );
}

export default App;
