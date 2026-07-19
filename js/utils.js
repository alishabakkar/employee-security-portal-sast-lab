// Navigation and helpers
function showSection(id) {
    document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));

    const target = document.getElementById(id);

    if (target) {
        target.classList.add('active');
    }
}

// Keep only one version of formatPhone()
function formatPhone(phone) {
    return phone.replace(/-/g, '');
}

// Removed unused variable and legacy function

function tempDebug() {
    // Debug logging removed for production
}