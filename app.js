

const data = [
    {name:"Optimus Prime", class: "LEADER", afl:"Autobot", vehicle:"Truck", color:"blue"},
    {name:"Megatron", class: "LEADER", afl:"Decepticon", vehicle:"Tank", color:"green"},
    {name:"Bumblebee", class: "SCOUT", afl:"Autobot", vehicle:"Car", color:"gold"},
    {name:"Starscream", class: "SCOUT", afl:"Decepticon", vehicle:"Plane", color:"white"},
    {name:"Ironhide", class: "SOLDIER", afl:"Autobot", vehicle:"Truck", color:"blue"},
    {name:"Brawl", class: "SOLDIER", afl:"Decepticon", vehicle:"Tank", color:"green"},
];

const eleMaker=(itm)=>{
    let ele=document.createElement("div");
    let nameEle=document.createElement("h1");
    let classEle=document.createElement("h1");
    let aflEle=document.createElement("h2");
    let vehicleEle=document.createElement("h2");
    let messEle=document.createElement("p");

    nameEle.innerHTML="Name: "+itm.name;
    classEle.innerHTML="Class: "+itm.class;
    aflEle.innerHTML="Afl: "+itm.afl;
    vehicleEle.innerHTML="Vehicle: "+itm.vehicle;


    ele.style.color=itm.color;
    ele.classList.add("character");
    ele.classList.add("autobot");
    ele.classList.add("decepticon");


    ele.appendChild(nameEle);
    ele.appendChild(classEle);
    ele.appendChild(aflEle);
    ele.appendChild(vehicleEle);
    ele.appendChild(messEle);

    document.body.appendChild(ele);
}

for(let i=0; i<data.length; i++) {
    eleMaker(data[i]);
}