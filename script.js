//console.log("Hello world")

const input = document.querySelector('.addInput');
//console.log(input)
const listContainer = document.querySelector(".listContainer");
//console.log(listContainer);

const button = document.querySelector(".addButton");
//console.log(button)

function buttonClicked(){
    if(input.value === ""){
        alert("You must write something!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        listContainer.appendChild(li)
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = "";
    saveData(); 
}

button.addEventListener("click", function(){
  buttonClicked();
})

input.addEventListener("keyup", function(event){
    if (event.keyCode === 13) {
        buttonClicked();
    }
})

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
e.target.classList.toggle("checked")
saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false)

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showData();

