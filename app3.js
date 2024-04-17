let listContainer=document.getElementById("list-container");
let inputBox=document.getElementById("input-box");




function addTask(){
    if(inputBox.value ===""){
        alert("fistly add task  !  ");
    }
    else{
        let task =document.createElement("li");
        task.innerHTML=`${inputBox.value} <i class="fa-regular fa-circle-xmark"></i>`;
        listContainer.appendChild(task);
    


task.addEventListener("click",(el)=>{
    if(el.target.tagName=="LI"){
        let span=document.createElement("span")
        task.appendChild(span);
        span.innerHTML=` <i class="fa-solid fa-circle-check"></i>`;
        
    }
    else if(el.target.value="I"){
    task.remove();
    
    }
    })
    inputBox.value="";
    saveData()
}

}

