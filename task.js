const createBtn = document.querySelector("#create");
const formDiv = document.querySelector(".form-div"); 
const closeBtn = document.querySelector("#close");


const form = document.querySelector("form");


const taskInput = document.querySelector("input");
const category = document.querySelector("select");

const productsArr=[];


closeBtn.addEventListener('click', ()=>{
    formDiv.style.display ="none";
});

createBtn.addEventListener('click', ()=>{
    formDiv.style.display = "flex";
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
    }

    productsArr.push(obj);

    console.log(productsArr);
    formDiv.style.display="none";
    
})


