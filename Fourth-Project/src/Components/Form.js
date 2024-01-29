import React, {Component} from 'react';

class Form extends Component{
    constructor(props)
    {
        super(props);
        this.state={};
    }

    nameChangeHandler = (event) => {
        console.log(event.target.value);
    };

    submitHandler = (event) => {
        event.preventDefault();
        console.log(this.state);
        const name = event.target.name.value;
        const country = event.target.country.value;
        this.setState({name,country}, ()=>{
            console.log(this.state);
        });

    };

    render()
    {
        return (
        <div>
          <form onSubmit={this.submitHandler}>
            <div>
                <label>Name: </label>
                <input type="text" name="name" onKeyUp={this.nameChangeHandler}></input>
            </div>
            <div>
                <label>Country: </label>
                <select>
                    <option value="1"></option>
                    <option value="2"></option>
                    <option value="3"></option>
                    <option value="4"></option>
                </select>
            </div>
            <button type="button">Submit</button>
          </form>

        </div>)
    }
}

export default Form;