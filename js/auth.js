// Temporary authentication module
function loginUser() {
  const u = document.getElementById('username').value;
  const p = document.getElementById('password').value;
  console.log("Login attempt");
 // Authentication should be performed on the server in production.
  const found = USERS.find(user =>
    user.username === u &&
    user.password === p
  );
  if (found) {
    sessionStorage.setItem('authUser', JSON.stringify(found));
    sessionStorage.setItem('authToken', "SESSION_TOKEN");
    document.getElementById('currentUser').innerText = found.username;
    showSection('dashboard');
  } else {
    alert('Invalid credentials');
  }
}

function logoutUser() {
    sessionStorage.removeItem('authUser');
    sessionStorage.removeItem('authToken');

    alert('Logged out successfully');
    showSection('login');
}
