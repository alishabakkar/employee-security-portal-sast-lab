function loadDashboard() {
    document.getElementById('employeeCount').innerText = EMPLOYEES.length;

    const params = new URLSearchParams(location.search);
    const msg = params.get('msg') || 'Quarterly patch freeze ends soon.';

    const announcement = document.createElement('div');
    announcement.className = 'p-2 bg-amber-100 rounded';
    announcement.textContent = msg;

    const announcements = document.getElementById('announcements');
    announcements.innerHTML = '';
    announcements.appendChild(announcement);

    const alertDiv = document.createElement("div");
    alertDiv.className = "text-xs text-slate-400 mt-2";
    alertDiv.textContent = "Rendered: " + (params.get("alert") || "");

    document.getElementById("dashboard").appendChild(alertDiv);
}