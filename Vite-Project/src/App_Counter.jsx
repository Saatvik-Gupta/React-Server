import React from 'react';

function App_Counter() {

//-------------------Method 1------------------------------------
//  App not rendered everytime when counter button clicked as we are not using state variables that renders the app.
    /*
    alert("App is rendered");

    let state={
        count:1,
        color:"aqua"
    }

    function fn(e){
        console.log("Button is clicked!");
        console.log(state.count);
        state.count=state.count+1;
    }

    return (
        <div style={{backgroundColor:state.color}}>
            <h1>{state.count}</h1>
            <button onClick={fn}>Click me</button>
        </div>
    );*/

// Method 2 App Rendered everytime as counter increased taking a single state

    // alert("App is Rendering"); pop up each time as app rendered when counter updated

/*  let count=React.useState(1); // --created a 1 D array containing 2 values--> [valuepassed,function] here [1,f]
    let count_value=count[0];
    let count_function=count[1]; // helps in rendering

    let color="aqua";

    function fn(e){
        console.log("Button is Clicked!");
        count_function(count_value+1);
        console.log(count_value);
    }

    return (
        <div style={{backgroundColor:color}}>
            <h1>{count_value}</h1>
            <button onClick={fn}>Click Me!</button>
        </div>
        
    );*/

// Method 3 App Rendered everytime as counter increased taking a Double state

    let [countstate,countfunc]=React.useState(1); // or above method use indexing
    let [colorstate,colorfunc]=React.useState("aqua");

    function fn(e){
        console.log("Button is clicked!");
        countfunc(countstate+1);
        console.log(countstate);
    }

    // function change_color(newcolor){
    //     colorfunc(newcolor); // rendering to change the color + conditional styling
    // }

    function toggle_color(){
        colorfunc(colorstate==="aqua"?"red":"aqua");
    }

    // function fn2(){
    //     change_color("red");
    // }

    return(
        <div style={{ backgroundColor: colorstate }}>
            <h1>{countstate}</h1>
            <button onClick={fn}>Increase the Counter</button>

          {/* <button onClick={fn2}>Change the Color</button>  */}
          <button onClick={toggle_color}> {colorstate === "aqua" ? "Change to Red" : "Change to Aqua"}</button> 

          {/* {()=>{ // arrow function
            change_color("red")
            }}
           */}

        </div>
    );
}

export default App_Counter;