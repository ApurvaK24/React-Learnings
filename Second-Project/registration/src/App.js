//class based
import React, {Component} from "react";
import './App.css';
import Register from "./Components/Register";
import Greet from "./Components/Greet";

class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      isRegistered: false,
      name: null,
      email: null,
      password: null,
      showPass: false,
    };
  }
//no need to bind becz of =>, pass as a prop to register component
//when submit clicked, event catched here
registrationHandler = (event) => {
  const name=event.target.name.value; //event.target brings a particular data of form
  const email= event.target.email.value;
  const password=event.target.password.value;
  //store it in state
  this.setState({name,email,password, isRegistered: true});
  event.preventDefault();
};

showPasswordHandler = () =>{
  console.log(this.state);
  this.setState({ showPass: !this.state.showPass}, () =>{
    console.log(this.state);

  })
}

  render()
  {
  return (
    <div>
    {
      this.state.isRegistered?
      <Greet name={this.state.name} email={this.state.email}></Greet> : 
      <Register submit={this.registrationHandler}
       showPass={this.state.showPass}
       click={this.showPasswordHandler}></Register>
    }
    </div>
  );
  }
}

export default App;
