import {MainImage} from '../src/components/MainImage';
import {Header} from '../src/components/Header';
import './styles/App.scss'
import lastSupper from './assets/images/last_supper.jpg'


function App() {
  return (
    <div className="App">
      <Header />
      <MainImage source={lastSupper}/>
    </div>
  );
}

export default App;
