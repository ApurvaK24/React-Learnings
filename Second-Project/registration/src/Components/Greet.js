import React from "react";

export default function greet(props){
    return(
        <div className="container card p-3 mt2 register text-center">
            <h3>{props.name}</h3>
            <h3>Thank you for joining</h3>
            <h3>Verification sent to {props.email}</h3>

        </div>
    )
}