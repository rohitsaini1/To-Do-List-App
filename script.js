//Creating instances of document objects
const inputBox  = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

//adds the task in main list
function addTask(){
    if(inputBox.value === ''){
        alert("Please Enter Your Task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}
//event listeners for filtersk
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);
//this function for the save the task data in local storage
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
//this is using to the refresh the page and show the again task
showTask();