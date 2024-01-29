import React, {Component} from "react";

class ControlledComponent extends Component{
    constructor(props)
    {
        super(props);
        this.state ={
            name:"Apurva",
        };
    }

    changeHandler = (event) => {
        console.log(this.state);
        const name = event.target.value;
        this.setState({name}, () =>{
            console.log(this.state);

        });
    };

    render()
    {
        return(
            <div>
             <form>
                <input type="text" name="user" value={this.state.name}
                onChange={this.changeHandler}></input>
             </form>
            </div>
        )
    }
}

export default ControlledComponent