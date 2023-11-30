function present() {
    const attendanceTable = document.getElementById('attendanceTable');
    const name = document.getElementById('name').value;
    const rollNo = document.getElementById('rollNo').value;
    const row = attendanceTable.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    const cell5 = row.insertCell(4);

    const today = new Date();
    cell1.innerHTML = name;
    cell2.innerHTML = rollNo;
    cell3.innerHTML = today.toDateString();
    cell4.innerHTML = today.toLocaleTimeString();
    cell5.innerHTML = 'Present';
}

function absent() {
    const attendanceTable = document.getElementById('attendanceTable');
    const name = document.getElementById('name').value;
    const rollNo = document.getElementById('rollNo').value;
    const row = attendanceTable.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    const cell5 = row.insertCell(4);

    const today = new Date();
    cell1.innerHTML = name;
    cell2.innerHTML = rollNo;
    cell3.innerHTML = today.toDateString();
    cell4.innerHTML = today.toLocaleTimeString();
    cell5.innerHTML = 'Absent';
}
