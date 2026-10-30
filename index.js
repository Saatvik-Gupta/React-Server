// 1--------------------------creating dom and react root 

/*const reactHeading=React.createElement("h1",null,"Written By React Element");
// in Dom: document.createElement("...type...","...text...")

const rootDOM=document.getElementById("root");

const reactRootEle=ReactDOM.createRoot(rootDOM); // special root with help of dom 

reactRootEle.render(reactHeading); // in Dom: rootDOM.appendChild(Heading);*/

// 2------------------------------------------

/*const h1babel=(
    <h1>Hello</h1>
);

const h1react=React.createElement("h1",null,"Hello");

const root=ReactDOM.createRoot(document.getElementById("root"));

console.log(h1babel===h1react); // false as object comparsion different addresses
console.log(JSON.stringify(h1babel)=== JSON.stringify(h1react)); // true as converted to string no address need

root.render(h1babel); */

// 3-------------------------------- Creating Webpage using React + ReacTDOM + JSX(JAVASCRIPT+XML)
{/* <h1 id="head1" class="headings">hello world</h1> */}

/*const attributes = {
    id: "head1",
    className: "headings"
}

const ele = React.createElement("h1",attributes,"hello world");


// <div id="div1" class="box" arg="xyz">hello</div> 

const div1 = React.createElement("div",{id: "div1", className: "box", arg:"xyz"},"hello");


{ <div class="container">
    <div class="box">box 1</div>
</div> }

const innerEle = React.createElement("div",{className: "box"},"box 1");

const outerEle = React.createElement("div",{className: "container"}, innerEle);


{ <div class="container">
    <div className="box">box1</div>
    <div className="box">box2</div>
    <div className="box">box3</div>
</div> }

// React.createElement(
//     "div",
//     {className: "container"},
//     [React.createElement("div",{className:"box"},"box1"), React.createElement("div",{className:"box"},"box2"), React.createElement("div",{className:"box"},"box3")]
// )

const box1 = React.createElement("div",{className:"box"},"box 1");
const box2 = React.createElement("div",{className:"box"},"box 2");
const box3 = React.createElement("div",{className:"box"},"box 3");

const cont = React.createElement("div",{className:"container"},[box1,box2,box3]);

//jsx
const outer = (<div className="outer">
    <div id="first">
        <h1>heading</h1>
        <p>paragraph</p>
    </div>
    <div className="container">
        <div>box1</div>
        <div>box2</div>
    </div>
</div>);

// const first = React.createElement("div", {id: "first"},
//     [React.createElement("h1",null,"heading"), React.createElement("p",null,"paragraph")]);

// const box11 = React.createElement("div",null,"box 1");
// const box22 = React.createElement("div",null,"box 2");

// const container = React.createElement("div",{className:"container"},[box11,box22]);

// const outer = React.createElement("div",{className:"outer"},[first, container]);

const domRoot = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(domRoot);
*/

// 4--------------------------------- Using Components

/*function Header(){
    return (
        <>
            <h1>This is the Header</h1>
            <p>My Name is Saatvik Gupta</p>
        </>
    );
}

function Footer(){
    return (
        <>
            <h2>This is the footer by Saatvik Gupta</h2>
            <p>Me writing this footer using wrapper tag</p>
        </>
    );
}

function Home(){
    return (
        // <>
        //     <div >About</div>
        //     <div>Contact</div>
        //     <div>Achievements</div>
        // </> or

        <div className="Container" style={
            {display:"flex",color:"red"}
        }> 
        <div>About</div>
        <div>Contact</div>
        <div>Achievements</div>

        </div>
    )
}

function HomeCompo()
{
    return (<h1>this is a home component</h1>);
}

function ContactCompo()
{
    return (<h1>this is contact component</h1>);
}

function AboutCompo()
{
    return (<h1>this is about component</h1>);
}

function NotFound(){
    return (
        <h1>Page Not Found, Error:404</h1>
    )
}

function Page(){
//     const val=20;
//     if(val==10){
//         return <Header/>;
//     }
//     else if(val==20){
//         return <Home/>;
//     }
//     else {
//         return <Footer/>;
//     } or MAde Dynamic

    const pageload="HomeCompo"; // which page you want to open taking place of val
    let Middlesection=null;

    if(pageload==="HomeCompo"){
        Middlesection=HomeCompo;
    }

    else if(pageload==="ContactCompo"){
        Middlesection=ContactCompo;
    }

    else if(pageload==="AboutCompo"){
        Middlesection=AboutCompo;
    }

    else Middlesection=NotFound;

    return (
        <>
        <Header/>
        <Middlesection/>
        <Footer/>
        </>
    );
 }

const domroot=document.getElementById("root");

const root=ReactDOM.createRoot(domroot);

root.render(<Page/>);
*/

// 5------------------------------------ attributes use

function Comp(){
    const val=100;

    return (
        <div className="container">
            <h1>This is a Heading</h1>
            <p>This is a paragraph</p>
            <h1>This is the value :  {val}</h1>
        </div>
    );
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Comp/>); // or {Comp()} or <Comp></Comp>
