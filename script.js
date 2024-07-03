document.addEventListener('DOMContentLoaded', function() {
    let editRow = null;

    document.getElementById('add-task-form').addEventListener('submit', function(event) {
        event.preventDefault();
        addOrUpdateTask();
    });

    function addOrUpdateTask() {
        const taskName = document.getElementById('new-task').value;
        const taskDescription = document.getElementById('task-description').value;

        if (editRow) {
            editRow.cells[0].textContent = taskName;
            editRow.cells[1].textContent = taskDescription;
            editRow = null;
        } else {
            const table = document.getElementById('incomplete-tasks');
            const row = table.insertRow();

            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            const cell3 = row.insertCell(2);

            cell1.textContent = taskName;
            cell2.textContent = taskDescription;

            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.addEventListener('click', function() {
                editTask(row);
            });

            const completeButton = document.createElement('button');
            completeButton.textContent = 'Complete';
            completeButton.addEventListener('click', function() {
                completeTask(row);
            });

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', function() {
                deleteTask(row);
            });

            cell3.appendChild(editButton);
            cell3.appendChild(completeButton);
            cell3.appendChild(deleteButton);
        }

        document.getElementById('new-task').value = '';
        document.getElementById('task-description').value = '';
    }

    function editTask(row) {
        document.getElementById('new-task').value = row.cells[0].textContent;
        document.getElementById('task-description').value = row.cells[1].textContent;
        editRow = row;
    }

    function completeTask(row) {
        const table = document.getElementById('completed-task');
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
