// Temporary authentication module
function loginUser() {
    const u = document.getElementById('username').value.trim();
    const p = document.getElementById('password').value.trim();

    if (u === "" || p === "") {
        alert("Please enter both username and password.");
        return;
    }

    // Create a temporary user session
    const user = {
        username: u,
        role: "user",
        email: ""
    };

    sessionStorage.setItem('authUser', JSON.stringify(user));
    sessionStorage.setItem('authToken', "SESSION_TOKEN");

    document.getElementById('currentUser').innerText = u;

    showSection('dashboard');
}

function logoutUser() {
    sessionStorage.removeItem('authUser');
    sessionStorage.removeItem('authToken');

    document.getElementById('currentUser').innerText = "Guest";

    alert("Logged out successfully");
    showSection('login');
}