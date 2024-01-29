import React, {Component} from 'react';
import Man from "./Man";
import './Person.css';

class Person extends Component{
    constructor(props)
    {
        super(props);
        this.props=props;
        this.state={
            name:"Apu",
            age:22,
        };
    }

    buttonClickHandler=()=>{
        alert("hello");
      }

    render()
    {
        return(
            <div className="box">
               <div> <h3>Name:{this.props.name}</h3> <h3>Apurva</h3></div>
                <div><h3>Age:{this.props.age}</h3> <h3>20</h3></div>
                
                <Man></Man>
                <button onClick={this.buttonClickHandler}>Click Me</button>

            </div>
        )
    }
}

export default Person