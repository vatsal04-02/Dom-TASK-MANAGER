
//Basic Form Actions
const createBtn = document.querySelector("#create");
const formDiv = document.querySelector(".form-div"); 
const closeBtn = document.querySelector("#close");

const form = document.querySelector("form");

const taskInput = document.querySelector("input");
const category = document.querySelector("select");

const home = document.querySelector(".home");
const createHome = document.querySelector("#hero-create");

const themeToggle = document.querySelector("#theme-toggle");
const toggleIcon = document.querySelector(".toggle-icon");

const productsArr=[];

createHome.addEventListener('click' , ()=>{
    formDiv.style.display = "flex";
    document.querySelector(".task-container").classList.add("form-open");
});


createBtn.addEventListener('click', ()=>{
    formDiv.style.display = "flex";
    document.querySelector(".task-container").classList.add("form-open");
});

closeBtn.addEventListener('click', ()=>{
    formDiv.style.display ="none";
    document.querySelector(".task-container").classList.remove("form-open");
});



form.addEventListener("submit", (event)=>{
    event.preventDefault();
    
    const taskName = taskInput.value;
    const taskCategory = category.value;

    if(taskName.trim()==="" || taskCategory.trim() === ""){

        alert('Please Fill All the fields');
        return;
    }

    const id = crypto.randomUUID();

    let obj ={
        id,
        taskName,
        category:taskCategory,
        status: "pending",
    }

    productsArr.push(obj);
    
    // called card function
    Taskcard(obj);
  
   home.style.display="none";
   console.log(productsArr);
   form.reset();
   formDiv.style.display="none";
   document.querySelector(".task-container").classList.remove("form-open");
    
});


//Dynamically made the card 

let Taskcard = (obj) =>{

   const taskContainer = document.querySelector(".task-container");
   const card = document.createElement("div");

   //Task Id
   card.classList.add("task-card");

   //Custom data attributes
   card.dataset.id = obj.id;
   card.dataset.status = "pending";
   card.dataset.category = obj.category;


   //TOP
   const cardTop = document.createElement("div");
   cardTop.classList.add("card-top");

   const taskNumber = document.createElement("span");
   taskNumber.classList.add("task-number");
   taskNumber.innerText =`#${productsArr.length
    .toString()
    .padStart(2,"0")}`;

   const deleteBtn = document.createElement("button");
   deleteBtn.classList.add("delete-btn");
   deleteBtn.innerText = "🗑";


   cardTop.append(taskNumber, deleteBtn);


   //Content

   const content = document.createElement("div");
   content.classList.add("task-content");

   const title = document.createElement("h2");
   title.innerText = obj.taskName;

   const categoryText = document.createElement("p");
   categoryText.innerText = obj.category;

   content.append(title,categoryText);


   //BOTTOM

   const cardBottom = document.createElement("div");
   cardBottom.classList.add("card-bottom");

   const status = document.createElement("span");
   status.classList.add("card-status");
   status.innerText = obj.status.toUpperCase();

   //Buttons container
   const actions = document.createElement("div");
   actions.classList.add("card-actions");

   //Edit
   const editBtn = document.createElement("button");
   editBtn.classList.add("edit-btn");
   editBtn.innerText = "Edit";

   //Complete Button
   const completeBtn = document.createElement("button");
   completeBtn.classList.add("complete-btn");
   completeBtn.innerText = "✓";

   actions.append(editBtn,completeBtn);

   cardBottom.append(status,actions);

   card.append(cardTop, content, cardBottom);

   taskContainer.append(card);




   

}


//Dark theme toggle

themeToggle.addEventListener('click', ()=>{
    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        toggleIcon.innerText = "☀️";
    }else{
         toggleIcon.innerText = "🌙";
    }
});





