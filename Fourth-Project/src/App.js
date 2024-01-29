
import './App.css';
import Person from "./Components/Person";
import Man from "./Components/Man";
import { Component } from 'react';
import Form from "./Components/Form";
import ControlledComponent from "./Components/ContolledComponent";

class App extends Component{

  constructor(props){
    super(props);
    this.state={
      persons:[
        {
          name:"bunny",
          age: 40,
        },
        {
          name:"sagar",
          age: 21,
        }
      ],
      isShow: true
    };
    this.toggleHandler=this.toggleHandler.bind(this);
  }

buttonClickHandler=()=>{
  alert("hello");
}

toggleHandler()
{
 this.setState({isShow: !this.state.isShow});
}

render() {
  let persons;
  persons = this.state.persons.map((p) => {
    return <Person name={p.name} age={p.age}/>;
  });

  return (
    
    <div className="App">
      <button onClick={this.toggleHandler}>Toggle</button>
       {
      this.state.isShow=== true ? persons : ""}
      <Person name="John" age="12"></Person>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
      
      <Man></Man>
     
      <button type="button" onClick={this.buttonClickHandler}>Click Me</button>
    <Form></Form>
    <ControlledComponent></ControlledComponent>
    </div>
  );
}
}
export default App;
