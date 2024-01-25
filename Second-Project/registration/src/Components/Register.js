import React from "react";
//import Styled from "styled-components";
import styled from 'styled-components'
//props passed as parameter
//
export default function register(props){
    let btnStyle={
        backgroundColor: "green",
        color:"white",
    };
    
    let btnText,passbox;
    if(props.showPass === true){
        btnStyle.backgroundColor = "red";
        btnText = "Hide Password";
        passbox = "text";
    }
    else{
        btnText= "Show Password";
        passbox = "password";
    }


    const Button = styled.button`
display: block;
padding: 10px 5px;
background-color: ${(props) => props.bgcolor};
border: none;
color: white;
width: 100%;
margin : 5px;

`;

    const Styleregistration =styled.div`
width: 600px;
&:hover{
    box-shadow: 0px 0px 5px grey;
}
@media (min-width: 0px) and (max-width: 600px){
    width: 300px;
}

`;
    return(
        <Styleregistration className="container card p-3 mt2 register">
        <h1 className="text-center">Registration Form</h1>
         <form onSubmit={props.submit}>
            <div className="form-group">
                <label>Name:</label>
                <input type="text" name="name" required className="form-control"></input>
            </div>

            <div className="form-group">
                <label>Email:</label>
                <input type="text" name="email" required className="form-control"></input>
            </div>

            <div className="form-group">
                <label>Password:</label>
                <input type={passbox} name="password" required className="form-control"></input>
            </div>
            <button type="submit" className="btn btn-primar m-1">Register</button>
            <button type="button" className="btn m-1" onClick={props.click}  style={btnStyle}>{btnText}</button>
            <Button bgcolor="orange">Login</Button>
            <Button bgcolor="green">Login with google</Button>

         </form>
        </Styleregistration>
    )
}