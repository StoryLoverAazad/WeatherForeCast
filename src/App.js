import './App.css';
import Header from "./components/Header/Header";
import Weather from "./components/Weather/Weather";
import Footer from "./components/Footer/Footer";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route path="/HloovWeatherForeCast" element={
        <div>
      <Header/>
      <Weather/>
      <Footer/>
      </div>} />
        {/* <Route path='/' element={}></Route> */}
        {/* <Header/>
        <Weather/>
        <Footer/>  */}
      </Routes>
    </Router>
  </>
  );
}

export default App;
