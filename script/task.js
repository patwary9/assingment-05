document.addEventListener("DOMContentLoaded", function() {  
    const completeButtons = document.querySelectorAll(".complete-btn");

    const taskAvailableElement = document.querySelector("#task-avilabel");
    const totalTaskCompletedElement = document.querySelector("#total-task-compelete");

    const historyBox = document.querySelector("#history-box");
    const clearHistoryBtn = document.querySelector(".clear-history-btn"); 

    for (let button of completeButtons) {
        button.addEventListener("click", function() {
            let taskCount = parseInt(taskAvailableElement.innerText);
            let totalTask = parseInt(totalTaskCompletedElement.innerText);

            if (taskCount > 0)  {
                taskAvailableElement.innerText = taskCount - 1;
                totalTaskCompletedElement.innerText = totalTask + 1;

                button.disabled = true;  
                button.style.background = "gray";
            
                const taskTitle = button.getAttribute("title"); 
                const currentTime = new Date().toLocaleTimeString(); 

               
                const pElement = document.createElement("p");
                pElement.innerText = `You have completed: ${taskTitle}. Current Time: ${currentTime}`;

               
                pElement.classList.add("p-3", "rounded-md", "bg-slate-300", "mb-4");

                
                historyBox.appendChild(pElement);
                
                if(taskCount - 1 === 0){
                    alert("All tasks completed!");
                } else {
                    alert("Board Task Completed");
                }
            }
        });
    }

    
    clearHistoryBtn.addEventListener("click", function() {
        historyBox.innerHTML = ""; 
    });
});
