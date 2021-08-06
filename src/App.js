import './App.css';
import Navigasion from './screens/navigationBar/navigationBar'
import ParticleAnimation from 'react-particle-animation'

function App() {
  return (
    <div className="App">
      <Navigasion/>
      <ParticleAnimation
      id="tsparticles"
      style={{ height: '96vh'}}
      background={{ r: 21, g: 22, b: 23, a: 1 }}
      particleSpeed={0.05}
      particleRadius={0.7}
      color={{r: 158, g: 217, b: 249, a: 255}}
      />
    </div>
  );
}

export default App;
