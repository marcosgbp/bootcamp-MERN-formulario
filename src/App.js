import React,{useState} from 'react';
import Form from './components/Form';
import Result from './components/Result';

function App() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email:"",
    password:"",
    confirmPassword:""
  })
  return (
    <div className="App container">
      <Form inputs={state} setInputs={setState}/>
      <Result data={state}/>
    </div>
  );
}

export default App;
