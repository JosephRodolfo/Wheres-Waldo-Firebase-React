import {MainImage} from '../src/components/MainImage';
import {Header} from '../src/components/Header';
import './styles/App.scss'
import lastSupper from './assets/images/last_supper.jpg'
import { firebase, dbRef } from "../src/firebase/firebase";


function App() {
  return (
    <div className="App">
      <Header database={dbRef}/>
      <MainImage source={lastSupper} database={dbRef}/>
    </div>
  );
}

export default App;


/*
33- 157 Bartholemew
157 - 200 James Minor
200 - 242 Andrew
273 - 312 Judas
312- 341 peter
341-428 John/Mary
428-527 Jesus
554-595 Thomas
595-628 James Major
627-720 Phillip
720-814 Matthew
814-880 Thaddeus
880-997 Simon


*/

