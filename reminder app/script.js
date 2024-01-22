// Reminder App

//     Create a reminder app
//     There should be:
//         An input for entering the title
//         An input for entering priority
//         An input for color
//         A textarea for adding a description
//         A button for adding the reminder
//         A button for showing all reminders
//     When the button for adding is clicked an object needs to be created with the properties from the inputs ( title, priority, color, and description )
//     The object should then be added to an array of reminders
//     When the button for showing all reminders is clicked it should show a table with title, priority, and description columns
//     The title should be the color of the "color" property

const addReminderBtn = document.getElementById("addReminderBtn");
const showReminderBtn = document.getElementById("showReminderBtn");

let reminders = [];

function addReminder() {
    const title = document.getElementById('title').value;
    const priority = document.getElementById('priority').value;
    const color = document.getElementById('color').value;
    const description = document.getElementById('description').value;

    const reminder = { title, priority, color, description };
    reminders.push(reminder);
    
    document.getElementById('title').value = '';
    document.getElementById('priority').value = '';
    document.getElementById('color').value = '';
    document.getElementById('description').value = '';

}

function showReminders() {
    const tableBody = document.getElementById('remindersBody');
    tableBody.innerHTML = '';

    reminders.forEach(reminder => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td style="color: ${reminder.color};">${reminder.title}</td>
            <td>${reminder.priority}</td>
            <td>${reminder.description}</td>
        `;
        tableBody.appendChild(row);
    });
}

addReminderBtn.addEventListener("click", addReminder);
showReminderBtn.addEventListener("click", showReminders);