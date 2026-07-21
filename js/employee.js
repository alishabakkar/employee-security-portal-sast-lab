function renderEmployees(data) {
    const tbody = document.getElementById('employeeTable');
    tbody.innerHTML = "";

    data.forEach(emp => {
        const row = document.createElement("tr");
        row.className = "border-b";

        const name = document.createElement("td");
        name.className = "p-2";
        name.textContent = emp.name;

        const email = document.createElement("td");
        email.className = "p-2";
        email.textContent = emp.email;

        const phone = document.createElement("td");
        phone.className = "p-2";
        phone.textContent = emp.phone;

        const salary = document.createElement("td");
        salary.className = "p-2";
        salary.textContent = "$" + emp.salary;

        row.appendChild(name);
        row.appendChild(email);
        row.appendChild(phone);
        row.appendChild(salary);

        tbody.appendChild(row);
    });
}

function searchEmployees(q) {
    const filtered = EMPLOYEES.filter(e =>
        (e.name + e.email + e.phone)
            .toLowerCase()
            .includes(q.toLowerCase())
    );

    renderEmployees(filtered);
}

function loadEmployeeProfile() {
    const params = new URLSearchParams(location.search);

    const id = Number(params.get('id')) || 1;
    const note = params.get('note') || 'No note provided';

    const emp = EMPLOYEES.find(e => e.id === id) || EMPLOYEES[0];

    

    // Removed eval()
    const extra = params.get('extra') || '';

    const container = document.getElementById('employeeProfileContent');
    container.innerHTML = "";

    const fields = [
        `Name: ${emp.name} (ID: ${id})`,
        `Email: ${emp.email}`,
        `Phone: ${emp.phone}`,
        `Salary: Confidential`,
        `Department: ${emp.department}`,
        `Host: [REDACTED]`,
        `IP: [REDACTED]`,
        `Note: ${note}`,
        `Extra: ${extra || "None"}`
    ];
    fields.forEach(text => {
        const div = document.createElement("div");
        div.className = "text-sm";

        if (text.startsWith("Name:")) {
            div.className = "font-semibold text-lg";
        }

        div.textContent = text;
        container.appendChild(div);
    });

    
}