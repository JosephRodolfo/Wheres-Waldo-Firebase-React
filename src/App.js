import {MainImage} from '../src/components/MainImage';
import {Header} from '../src/components/Header';
import './styles/App.scss'
import lastSupper from './assets/images/last_supper.jpg'
import { firebase, dbRef } from "../src/firebase/firebase";
import AppRouter from './routers/AppRouter'


function App() {
  return (
    <div className="App">

      <AppRouter />
      {/* <Header database={dbRef}/>
      <MainImage source={lastSupper} database={dbRef}/> */}
    </div>
  );
}

export default App;


