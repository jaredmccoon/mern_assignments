// import react from 'react';
import './App.css';

import PersonCard from './components/personCard'

function App() {
  return (
    <div className="App">
    <PersonCard firstName={"first0"} lastName={"last0"} age={20} hairColor={"color0"}/>
    <PersonCard firstName={"first1"} lastName={"last1"} age={21} hairColor={"color1"}/>
    <PersonCard firstName={"first2"} lastName={"last2"} age={22} hairColor={"color2"}/>
    <PersonCard firstName={"first3"} lastName={"last3"} age={23} hairColor={"color3"}/>
    </div>
  );
}

export default App;
