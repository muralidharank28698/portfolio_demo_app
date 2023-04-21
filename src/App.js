import HeaderComponent from './components/headerComponent/HeaderComponent';
// import logo from './logo.svg';
import './App.css';
// import TopComponent from './components/topComponent/TopComponent';
import Aboutus from './components/Aboutuspage/Aboutus';
import Education from './components/EducationPage/Education';
import Profession from './components/Professionpage/Profession';
// import Services from './components/Servicecomponent/Services';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <HeaderComponent /> */}
      {/* 
      <TopComponent />
      <AboutComponent />
      <Services /> */}
      <Routes>
        <Route path="/" element={<HeaderComponent />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/profession" element={<Profession />} />
        <Route path="/education" element={<Education />} />
      </Routes>
    </div>
  );
}

export default App;
