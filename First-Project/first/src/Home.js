import React from 'react';
//import React, {useState} from "react";
export default function Home(props)
{
    //const [name,setname]=useState("Apurva");
    //<button onClick={() => setname("Atharva")}>Change {name}</button>}

    return(<div>
        <div class="container px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
               
               
                <div class="col-md-10 col-lg-8 col-xl-7">
                    {props.children}

                    
                    
                </div>
            </div>
        </div>
    </div>)
}