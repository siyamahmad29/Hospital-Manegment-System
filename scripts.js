document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const userType = validateCredentials(username, password);
    
    if (userType) {
        // user type
        if (userType === 'doctor') {
            window.location.href = 'doctor-dashboard.html';
        } else if (userType === 'patient') {
            window.location.href = 'patient-dashboard.html';
        } else if (userType === 'hospital') {
            window.location.href = 'hospital-dashboard.html';
        }
    } else {
        document.getElementById('error-message').innerText = 'Invalid username or password';
    }
});

function validateCredentials(username, password) {
    // Dummy user name or pass
    const users = {
        doctor: { username: 'doctor', password: '2223' },
        patient: { username: 'patient', password: '2223' },
        hospital: { username: 'hospital', password: '2223' }
    };

    for (const userType in users) {
        if (username === users[userType].username && password === users[userType].password) {
            return userType;
        }
    }
    return null;
}

