

document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('add-task-form').addEventListener('submit', function(event) {
        event.preventDefault();
        addTask();
        
    });
// for task function her called all function and complete new task added 

    function addTask() {
        const taskName = document.getElementById('new-task').value;
        const taskDescription = document.getElementById('task-description').value;

        

        const table = document.getElementById('incomplete-tasks');
        const row = table.insertRow(); 

        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);

        cell1.textContent = taskName;
        cell2.textContent = taskDescription;




        const editButton = document.createElement('button'); // create button for edit 
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', function() {
            editTask(row);
        
        });

        const completeButton = document.createElement('button');// create button for complete 
        completeButton.textContent = 'Complete';
        completeButton.addEventListener('click', function() {
            completeTask(row);
        });

        const deleteButton = document.createElement('button');// create button for delete
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            deleteTask(row);
        });


        // btn add in action row  table 
        cell3.appendChild(editButton);

        cell3.appendChild(completeButton);
        cell3.appendChild(deleteButton);



        document.getElementById('new-task').value = '';
        document.getElementById('task-description').value = '';
    }
 
    function editTask(row) {
        const taskName = row.cells[0].textContent;
        const taskDescription = row.cells[1].textContent;
        document.getElementById('new-task').value = taskName;
        document.getElementById('task-description').value = taskDescription;
        deleteTask(row);
    }

    function completeTask(row) {
        const table = document.getElementById('completed-tasks');
        table.appendChild(row);

        while (row.cells[2].firstChild) {
            row.cells[2].removeChild(row.cells[2].firstChild);
        }

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            deleteTask(row);
        });
        row.cells[2].appendChild(deleteButton);
    }

    function deleteTask(row) {
        row.parentNode.removeChild(row);
    }
    
});
