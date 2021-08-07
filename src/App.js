import './App.css';
import Navigasion from './screens/navigationBar/navigationBar'
import ParticleAnimation from 'react-particle-animation'
import Header from './screens/header/Header';
import AboutMe from './screens/aboutMe/AboutMe'


function App() {
  return (
    <div className="App">
      <Navigasion/>
      <Header/>
      <ParticleAnimation
      id="tsparticles"
      style={{ height: '96vh'}}
      background={{ r: 21, g: 22, b: 23, a: 1 }}
      particleSpeed={0.05}
      particleRadius={0.7}
      color={{r: 158, g: 217, b: 249, a: 255}}
      />
      <AboutMe/>
    </div>
  );
}

export default App;
