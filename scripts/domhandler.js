const root =document.getElementById("root");

function Createtag(tagname,text){
    const element=document.createElement(tagname);
    element.innerText=text;

    root.appendChild(element);

}

function deleterecent(){
    const allele=root.children; 
    const lastele=(allele.length-1);
    lastele.remove();

}