// import react from 'react';
import './App.css';

import UserForm from './components/Form'

function App() {
  return (
    <div className="App">
      <UserForm firstname={""} lastname={""} email={""} password={""} conpassword={""}/>
    </div>
  );
}

export default App;



