const calendarBody = document.getElementById('calendar-body');
const dateDisplay = document.querySelector('.date');
const dropdownCalendar = document.querySelector('.dropdown-calendar');
const currentMonthYear = document.getElementById('current-month-year');
const prevMonthBtn = document.getElementById('prev-month');
const nextMonthBtn = document.getElementById('next-month');

let currentDate = new Date(); // Track current displayed month and year

// Object to store completed days for the month
let completedDays = JSON.parse(localStorage.getItem('completedDays')) || {};

// Toggle the calendar visibility
dateDisplay.addEventListener('click', () => {
    dropdownCalendar.style.display = dropdownCalendar.style.display === 'block' ? 'none' : 'block';
});

// Function to populate the calendar
function populateCalendar(year, month) {
    calendarBody.innerHTML = ''; // Clear previous calendar content

    const firstDay = new Date(year, month, 1).getDay(); // Day of the week the month starts
    const daysInMonth = new Date(year, month + 1, 0).getDate(); // Number of days in the month
    const today = new Date(); // Get today's date
    const isToday = today.getFullYear() === year && today.getMonth() === month;

    // Set the current month and year display
    currentMonthYear.textContent = `${new Date(year, month).toLocaleString('default', {
        month: 'long',
    })} ${year}`;

    let row = document.createElement('tr');

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
        row.appendChild(document.createElement('td'));
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
        const cell = document.createElement('td');
        cell.textContent = day;

        // Highlight today's date
        if (isToday && day === today.getDate()) {
            cell.classList.add('today');
        }

        // Construct the date key for this day (e.g., "2024-12-01")
        const dateKey = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

        // Add checkmark if the day is completed
        if (completedDays[dateKey]) {
            cell.classList.add('completed');
            const checkMark = document.createElement('span');
            checkMark.textContent = '✔'; // Checkmark symbol
            cell.appendChild(checkMark);
        }

        // Add click event to toggle completion status
        cell.addEventListener('click', () => {
            if (completedDays[dateKey]) {
                delete completedDays[dateKey]; // Unmark the day if already completed
            } else {
                completedDays[dateKey] = true; // Mark the day as completed
            }

            // Save the updated completion state to localStorage
            localStorage.setItem('completedDays', JSON.stringify(completedDays));

            // Re-populate the calendar to reflect the changes
            populateCalendar(year, month);
        });

        row.appendChild(cell);

        // Start a new row if the week is complete
        if ((firstDay + day) % 7 === 0) {
            calendarBody.appendChild(row);
            row = document.createElement('tr');
        }
    }

    // Add the remaining empty cells to the last row
    while (row.children.length < 7) {
        row.appendChild(document.createElement('td'));
    }
    calendarBody.appendChild(row);
}

// Navigation buttons for changing months
prevMonthBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    populateCalendar(currentDate.getFullYear(), currentDate.getMonth());
});

nextMonthBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    populateCalendar(currentDate.getFullYear(), currentDate.getMonth());
});

// Initialize the calendar with the current month and year
populateCalendar(currentDate.getFullYear(), currentDate.getMonth());




