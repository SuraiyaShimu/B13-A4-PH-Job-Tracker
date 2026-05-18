console.log("Machine Loaded");

function getElement (id){
    return document.getElementById(id);
}
function updateText (id, value){
   getElement(id).innerText = value;
}
function getElement (id){
   getElement(id).classList.remove("hidden");
}
function getElement (id){
    getElement(id).classList.add("hidden");
}