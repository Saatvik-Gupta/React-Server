import React from 'react'

// Method - 01 Manipulating or rendering App via states
/*function Counter_state() {

    // alert("App is rendered");
    console.log("App is Rendered!")
    const [countstate,countfunc]=React.useState(0);

    const [colorstate,colorfunc]=React.useState("aqua");

    function fn(e){
        console.log("Button Clicked!");
        console.log(countstate+1);
        countfunc(countstate+1);
    }

    return(
        <div style={{border:"2px solid black",backgroundColor:colorstate}}>
            <h1>{countstate}</h1>
            <button onClick={fn}>Click for Counter Increment</button>

            <button onClick={()=>{
                colorfunc(colorstate==="aqua"?"red":"aqua")
            }}>{colorstate === "aqua" ? "Change to Red" : "Change to Aqua"}</button>
        </div>
    ); 
}*/

// Method-02 State as a Snapshot (Read only within a snap until rendered) + State as a memory of Component

/*function Counter1({countstate1,countfunc1}){

    console.log("Counter1 is rendered!");

    return(
        // <div style={{border:"2px solid black",backgroundColor:"aqua",height:"20vh",display: "flex",
        // justifyContent: "center",alignItems: "center"}}> //--> If Only Increase counter button

        <div style={{border:"2px solid black",backgroundColor:"aqua"}}>
            <h1>App Counter 1 : {countstate1}</h1>
            <button onClick={()=>{
                countfunc1(countstate1+1);
            }}>Inc Counter 1</button>
        </div>
    );
}

function Counter2({countstate2,countfunc2}){

    console.log("Counter2 is rendered!");

    return(
        // <div style={{border:"2px solid black",backgroundColor:"red", height:"20vh", display: "flex",
        // justifyContent: "center", alignItems: "center"}}> //--> If Only Increase counter button

        <div style={{border:"2px solid black",backgroundColor:"red"}}>
            <h1>App Counter 2 : {countstate2}</h1>
            <button onClick={()=>{
                countfunc2(countstate2+1);
            }}>Inc Counter 2</button>
        </div>
    );
}

function Counter_state(){

    console.log("App Rendered");
    
    const [countstate,countfunc]=React.useState(0);
    const [countstate1,countfunc1]=React.useState(0);
    const [countstate2,countfunc2]=React.useState(0);

    return(
        <div style={{border:"2px solid black",padding:20}}>
            <h1>App Counter : {countstate}</h1>

            <Counter1 countstate1={countstate1} countfunc1={countfunc1}/>

            <Counter2 countstate2={countstate2} countfunc2={countfunc2}/>
            <br></br>

            <button onClick={()=>{
                countfunc(countstate+1);
            }}>Click This!</button>
        </div>
    );
} */

// NOT PASSING STATES AS PROPS EITHER CREATING THEM INDIVIDUALLY SO THAT APP DON'T NEED TO RENDER WHEN COUNTER 1 & 2 INCREASES

/*function Counter1(){

    console.log("Counter1 is rendered!");
    const [countstate1,countfunc1]=React.useState(0);

    return(
        <div style={{border:"2px solid black",backgroundColor:"aqua"}}>
            <h1>App Counter 1 : {countstate1}</h1>
            <button onClick={()=>{
                countfunc1(countstate1+1);
            }}>Inc Counter 1</button>
        </div>
    );
}

function Counter2(){

    console.log("Counter2 is rendered!");
    const [countstate2,countfunc2]=React.useState(0);

    return(
        <div style={{border:"2px solid black",backgroundColor:"red"}}>
            <h1>App Counter 2 : {countstate2}</h1>
            <button onClick={()=>{
                countfunc2(countstate2+1);
            }}>Inc Counter 2</button>
        </div>
    );
}

function Counter_state(){

    console.log("App Rendered");
    
    const [countstate,countfunc]=React.useState(0);
    // const [countstate1,countfunc1]=React.useState(0);
    // const [countstate2,countfunc2]=React.useState(0);

    return(
        <div style={{border:"2px solid black",padding:20}}>
            <h1>App Counter : {countstate}</h1>

            <Counter1/>
            <Counter2/>
            <br></br>

            <button onClick={()=>{
                countfunc(countstate+1);
            }}>Click This!</button>
        </div>
    );
} */

// Method - 03 State Toggling State as a memory of component i.e to preserve the lost state

function Counter1({countstate1,countfunc1}){

    console.log("Counter1 is rendered!");
    // const [countstate1,countfunc1]=React.useState(0);

    return(
        <div style={{border:"2px solid black",backgroundColor:"aqua"}}>
            <h1>App Counter 1 : {countstate1}</h1>
            <button onClick={()=>{
                countfunc1(countstate1+1);
            }}>Inc Counter 1</button>
        </div>
    );
}

function Counter2({countstate2,countfunc2}){

    console.log("Counter2 is rendered!");
    // const [countstate2,countfunc2]=React.useState(0);

    return(
        <div style={{border:"2px solid black",backgroundColor:"red"}}>
            <h1>App Counter 2 : {countstate2}</h1>
            <button onClick={()=>{
                countfunc2(countstate2+1);
            }}>Inc Counter 2</button>
        </div>
    );
}

function Counter_state(){

    console.log("App Rendered");
    
    const [countstate,countfunc]=React.useState(0); // if not passed as props in app and declared in components then state lost occured as app is mounted 
    const [countstate1,countfunc1]=React.useState(0);
    const [countstate2,countfunc2]=React.useState(0);
    const [isComponent1,isFunction]=React.useState(true);

    return(
        <div style={{border:"2px solid black",padding:20}}>
            <h1>App Counter : {countstate}</h1>
{/* 
            <Counter1/>
            <Counter2/> */}
            {
            isComponent1?<Counter1 countstate1={countstate1} countfunc1={countfunc1}/>:
                <Counter2 countstate2={countstate2} countfunc2={countfunc2}/>
            }
            <br></br>

            <button onClick={()=>{
                countfunc(countstate+1);
            }}>Click This!</button>

            <button onClick={()=>{
                isFunction(!isComponent1)}}>Toggle</button>
        </div>
    );
}

export default Counter_state;