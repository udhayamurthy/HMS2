﻿// Simulated JSON data
const data = {
	"version": "1.0.1",
    "users": [
        { "userID": "admin", "password": "Admin123", "name": "SYS ADMIN", "role": "ADMIN" },
        { "userID": "smith", "password": "Doctor123", "name": "Dr Smith Right", "role": "DOCTOR" },
        { "userID": "sony", "password": "Doctor123", "name": "Sony J", "role": "DOCTOR" },
        { "userID": "sofi", "password": "Front123", "name": "Sofi Varghese", "role": "FRONT DESK" }
    ],
    "appointments": [
        { "patientID": "P001", "patientName": "John Doe", "doctor": "Dr. Smith Right", "date": "2024-08-28 10:00:00", "status": "Pending" },
        { "patientID": "P002", "patientName": "Adam White", "doctor": "Dr. Sony J", "date": "2024-08-28 15:00:00", "status": "Confirmed" }
    ],
    "appointments1": [
        { "patientID": "P001", "patientName": "John Doe", "doctor": "Dr. Smith Right", "date": "2024-08-28 10:00:00", "status": "Pending" },
        { "patientID": "P002", "patientName": "Adam White", "doctor": "Dr. Sony J", "date": "2024-08-28 10:30:00", "status": "Confirmed" },
        { "patientID": "P003", "patientName": "Emily Clark", "doctor": "Dr. Smith Right", "date": "2024-08-28 11:00:00", "status": "Pending" }
    ],
    "appointments2": [
        { "patientID": "P001", "patientName": "John Doe", "doctor": "Dr. Smith Right", "date": "2024-08-28 10:00:00", "status": "Pending" },
        { "patientID": "P002", "patientName": "Adam White", "doctor": "Dr. Sony J", "date": "2024-08-28 10:30:00", "status": "Confirmed" },
        { "patientID": "P003", "patientName": "Emily Clark", "doctor": "Dr. Smith Right", "date": "2024-08-28 11:00:00", "status": "Pending" },
        { "patientID": "P004", "patientName": "Michael Brown", "doctor": "Dr. Sony J", "date": "2024-08-28 11:30:00", "status": "Confirmed" },
        { "patientID": "P005", "patientName": "Jessica Blue", "doctor": "Dr. Smith Right", "date": "2024-08-28 12:00:00", "status": "Pending" },
        { "patientID": "P006", "patientName": "William Black", "doctor": "Dr. Sony J", "date": "2024-08-28 12:30:00", "status": "Confirmed" },
        { "patientID": "P007", "patientName": "Sophia Green", "doctor": "Dr. Smith Right", "date": "2024-08-28 13:00:00", "status": "Pending" },
        { "patientID": "P008", "patientName": "James Purple", "doctor": "Dr. Sony J", "date": "2024-08-28 13:30:00", "status": "Confirmed" },
        { "patientID": "P009", "patientName": "Isabella Yellow", "doctor": "Dr. Smith Right", "date": "2024-08-28 14:00:00", "status": "Pending" },
        { "patientID": "P010", "patientName": "Ethan Gray", "doctor": "Dr. Sony J", "date": "2024-08-28 14:30:00", "status": "Confirmed" }
    ]
};

// Login function
function login(event) {
    event.preventDefault();
    const userID = document.getElementById('userID').value;
    const password = document.getElementById('password').value;
	 console.log(`Attempting login with UserID: ${userID}, Password: ${password}`);
    const user = data.users.find(u => u.userID === userID && u.password === password);
    if (user) {
		  console.log(`Login successful for User: ${user.name}, Role: ${user.role}`);
      localStorage.setItem('loggedInUser', JSON.stringify(user)); // Store user data in localStorage
        switch (user.role) {
            case 'ADMIN':
                window.location.href = 'admin.html';
                break;
            case 'DOCTOR':
                window.location.href = 'doctor.html';
                break;
            case 'FRONT DESK':
                window.location.href = 'frontdesk.html';
                break;
            default:
                alert("Invalid role!");
        }
    } else {
        alert("Invalid credentials!");
    }
}

// Add listeners for the login form
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('#loginForm')) {
        document.getElementById('loginForm').addEventListener('submit', login);
    }
});
/*
// Populate user table
function populateUserTable() {
    const tableBody = document.querySelector('#userTable tbody');
    tableBody.innerHTML = '';
    data.users.forEach(
	(user.index) => 
	{
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.userID}</td>
            <td>${user.name}</td>
            <td>${user.role}</td>
            <td>
                <button onclick="editUser(${index})">Edit</button>
                <button onclick="deleteUser(${index})">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    }
	);
} */

// Populate user table
function populateUserTable() {
    const tableBody = document.querySelector('#userTable tbody');
    tableBody.innerHTML = '';
    data.users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.userID}</td>
            <td>${user.name}</td>
            <td>${user.role}</td>
            <td>
                <button onclick="editUser('${user.userID}')">Edit</button>
                <button onclick="deleteUser('${user.userID}')">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function addNewUser() {
    alert('Add functionality not implemented.');
}
function editUser(index) {
    alert('edit functionality not implemented.');
}

function deleteUser(index) {
    data.users.splice(index, 1);
    populateUserTable();
}

// Populate appointments table on frontdesk page
function populateAppointmentTable() {
    const tableBody = document.querySelector('#appointmentTable tbody');
    tableBody.innerHTML = '';
    data.appointments.forEach((appointment, index) => 
	{
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${appointment.patientID}</td>
            <td>${appointment.patientName}</td>
            <td>${appointment.doctor}</td>
            <td>${appointment.date}</td>
            <td>${appointment.status}</td>
            <td>
                <button onclick="editAppointment(${index})">Edit</button>
                <button onclick="deleteAppointment(${index})">Cancel</button>	 
				<button onclick="confirmAppointment(${index})">Confirm</button>
            </td>
        `;
        tableBody.appendChild(row);
    }
	);
}

function populateAppointmentTable1() {
    const tableBody = document.querySelector('#appointmentTable tbody');
    tableBody.innerHTML = '';
    data.appointments1.forEach((appointment, index) => 
	{
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${appointment.patientID}</td>
            <td>${appointment.patientName}</td>
            <td>${appointment.doctor}</td>
            <td>${appointment.date}</td>
            <td>${appointment.status}</td>
            <td>
                <button onclick="editAppointment(${index})">Edit</button>
                <button onclick="deleteAppointment1(${index})">Cancel</button>	 
				<button onclick="confirmAppointment1(${index})">Confirm</button>
            </td>
        `;
        tableBody.appendChild(row);
    }
	);
}
function editAppointment(index) {
	alert('Edit Appointment not implemented.');
}

function addNewAppointment() {
    alert('Add Appointment not implemented.');
}

function confirmAppointment(index) {
    data.appointments[index].status = 'Confirmed';
    populateAppointmentTable();
}


function deleteAppointment(index) {
	data.appointments[index].status = 'Cancelled';
    populateAppointmentTable();
}

function confirmAppointment1(index) {
    data.appointments1[index].status = 'Confirmed';
    populateAppointmentTable1();
}


function deleteAppointment1(index) {
	data.appointments1[index].status = 'Cancelled';
    populateAppointmentTable1();
}

// Populate appointments table on doctor page
function populateDoctorAppointmentTable() {
    const tableBody = document.querySelector('#doctorAppointmentTable tbody');
    tableBody.innerHTML = '';
    data.appointments.forEach((appointment, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${appointment.patientID}</td>
            <td>${appointment.patientName}</td>
            <td>${appointment.date}</td>

            <td>${appointment.status}</td>
            <td>
                <button onclick="closeAppointment(${index})">Close</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Close appointment function

function closeAppointment(index) {
    data.appointments[index].status = "Closed";
    populateDoctorAppointmentTable(); // Refresh the table after updating
}

function populateDoctorAppointmentTable2() {
    const tableBody = document.querySelector('#doctorAppointmentTable tbody');
    tableBody.innerHTML = '';
    data.appointments2.forEach((appointment, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${appointment.patientID}</td>
            <td>${appointment.patientName}</td>
            <td>${appointment.date}</td>

            <td>${appointment.status}</td>
            <td>
                <button onclick="closeAppointment2(${index})">Close</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Close appointment function

function closeAppointment2(index) {
    data.appointments2[index].status = "Closed";
    populateDoctorAppointmentTable2(); // Refresh the table after updating
}
// Refresh button handlers
function setupRefreshButtons() {
    const refreshDoctorBtn = document.getElementById('refreshDoctorBtn');
    if (refreshDoctorBtn) {
        refreshDoctorBtn.addEventListener('click', populateDoctorAppointmentTable2);
    }
const refreshAdminBtn = document.getElementById('refreshAdminBtn');
    if (refreshAdminBtn) {
        refreshAdminBtn.addEventListener('click', populateUserTable);
    }
    const refreshFrontdeskBtn = document.getElementById('refreshFrontdeskBtn');
    if (refreshFrontdeskBtn) {
        refreshFrontdeskBtn.addEventListener('click', populateAppointmentTable1);
    }
}

function displayVersion() {
    const versionElement = document.getElementById('version');
    if (versionElement) {
        versionElement.textContent = `Version: ${data.version}`;
    }
}

// Display logged-in user name
function displayUser() {
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    if (user) {
        const userElement = document.getElementById('loggedInUserName');
        if (userElement) {
            userElement.innerHTML = `Welcome, <b>${user.name}</b>	`;
        }
    }
}

function logout() {
   
	 const messageDiv = document.createElement('div');
        messageDiv.textContent = 'Logged out successfully';
        messageDiv.style.backgroundColor = 'Blue';
        messageDiv.style.color = 'white';
        messageDiv.style.padding = '10px';
        messageDiv.style.position = 'fixed';
        messageDiv.style.top = '20px';
        messageDiv.style.left = '50%';
        messageDiv.style.transform = 'translateX(-50%)';
        document.body.appendChild(messageDiv);
    setTimeout(() => {
        window.location.href = 'index.html';
     localStorage.removeItem('loggedInUser'); // Remove user data from localStorage
    }, 2000);
}






// Add listeners and handlers based on the page
document.addEventListener('DOMContentLoaded', () => {
    displayVersion();
	displayUser();
	if (document.querySelector('#loginForm')) {
        document.getElementById('loginForm').addEventListener('submit', login);
    } else if (document.querySelector('#userTable')) {
        populateUserTable();
    } else if (document.querySelector('#appointmentTable')) {
        populateAppointmentTable();
        setupRefreshButtons();
    } else if (document.querySelector('#doctorAppointmentTable')) {
        populateDoctorAppointmentTable();
        setupRefreshButtons();
    }
	
});
