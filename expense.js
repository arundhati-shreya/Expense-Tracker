const amnt=document.querySelector(".amount")
const des=document.querySelector(".des")
const cat=document.querySelector("#cat")
const btn=document.querySelector(".btn")
const tbod=document.querySelector(".tbody")

btn.onclick = function() {
    const key = amnt.value; 
    const value = des.value; 
    const category = cat.value; 


    localStorage.setItem(key, JSON.stringify({ description: value, category: category })); // Store an object with description and category
    location.reload();
   
}

for(let i=0;i<localStorage.length;i++){
    const key=localStorage.key(i)
    const value = localStorage.getItem(key);
    tbod.innerHTML+=`${key}:${value}<br>`
}

tbod.innerHTML = ""; 

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const expense = JSON.parse(localStorage.getItem(key));
    const newRow = document.createElement("tr");


    newRow.innerHTML = `
        <td>${key}</td>
        <td>${expense.description}</td>
        <td>${expense.category}</td>
        <td><button class="delete-btn" data-key="${key}">Delete</button></td>
        <td><button class="edit-btn" data-key="${key}">Edit</button></td>
    `;

    
    tbod.appendChild(newRow);
}


const deleteButtons = document.querySelectorAll(".delete-btn");
deleteButtons.forEach(button => {
    button.addEventListener("click", function() {
        const key = button.getAttribute("data-key");
        localStorage.removeItem(key);
        location.reload();
    });
});

const editButtons = document.querySelectorAll(".edit-btn");
editButtons.forEach(button => {
    button.addEventListener("click", function() {
        const key = button.getAttribute("data-key");
        const expense = JSON.parse(localStorage.getItem(key));
        amnt.value = key;
        des.value = expense.description;
        cat.value = expense.category;
    });
});


