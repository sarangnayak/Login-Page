// --- Initialize Particle.js Background ---
// This loads the particle animation configuration from a JSON file.
particlesJS.load('particles-js', 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/demo/particles.json', function() {
    console.log('callback - particles.js config loaded');
});

// --- Main Form Logic & Animations ---
// We wrap everything in DOMContentLoaded to make sure the HTML is ready before we try to access it.
document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const showRegisterLink = document.getElementById('show-register');
    const showLoginLink = document.getElementById('show-login');
    const formBox = document.querySelector('.form-box');
    
    // Flag to ensure the registration form animation only runs once.
    let registerFormAnimated = false; 

    // --- GSAP-powered form switching ---
    // This function handles the 3D flip animation between the login and register forms.
    const switchForms = (showRegister) => {
        if (showRegister) {
            // Flips to the register form
            gsap.to(formBox, { duration: 0.8, rotationY: 180, ease: 'power2.inOut' });
            if(registerBtn) registerBtn.classList.add('white-btn');
            if(loginBtn) loginBtn.classList.remove('white-btn');

            // Animate register form elements if it hasn't been animated yet
            if (!registerFormAnimated) {
                anime({
                    targets: '.register-container .top, .register-container .input-group, .register-container .password-strength',
                    translateY: [50, 0],
                    opacity: [0, 1],
                    delay: anime.stagger(100, {start: 400}), // Delay to start after flip
                    easing: 'easeOutExpo',
                    duration: 1000
                });
                registerFormAnimated = true; // Set flag so it doesn't run again
            }
        } else {
            // Flips back to the login form
            gsap.to(formBox, { duration: 0.8, rotationY: 0, ease: 'power2.inOut' });
            if(loginBtn) loginBtn.classList.add('white-btn');
            if(registerBtn) registerBtn.classList.remove('white-btn');
        }
    };
    
    // Event listeners for all buttons and links that trigger the form switch
    if(loginBtn) loginBtn.addEventListener('click', () => switchForms(false));
    if(registerBtn) registerBtn.addEventListener('click', () => switchForms(true));
    if(showLoginLink) showLoginLink.addEventListener('click', (e) => { e.preventDefault(); switchForms(false); });
    if(showRegisterLink) showRegisterLink.addEventListener('click', (e) => { e.preventDefault(); switchForms(true); });

    // --- Initial Anime.js Animation for Login Form ---
    // This runs on page load to animate the login form into view.
    anime({
        targets: '.login-container .top, .login-container .input-group, .login-container .form-options, .login-container .social-login',
        translateY: [50, 0],
        opacity: [0, 1],
        delay: anime.stagger(100, {start: 300}),
        easing: 'easeOutExpo',
        duration: 1000
    });
    
    // --- Password Visibility Toggle ---
    // This allows users to show or hide the password.
    const passwordToggles = document.querySelectorAll('.password-toggle');
    passwordToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const passwordField = toggle.parentElement.querySelector('input');
            if (passwordField.type === 'password') {
                passwordField.type = 'text';
                toggle.classList.remove('bx-show');
                toggle.classList.add('bx-hide');
            } else {
                passwordField.type = 'password';
                toggle.classList.remove('bx-hide');
                toggle.classList.add('bx-show');
            }
        });
    });

    // --- Password Strength Meter ---
    // This provides real-time feedback on password strength during registration.
    const regPassword = document.getElementById('reg-password');
    const strengthBar = document.querySelector('.strength-bar');
    const strengthText = document.querySelector('.password-strength p');

    if (regPassword && strengthBar && strengthText) {
        regPassword.addEventListener('input', () => {
            const password = regPassword.value;
            let strength = 0;
            if (password.length >= 6) strength++;
            if (password.length >= 10) strength++;
            if (/[A-Z]/.test(password)) strength++;
            if (/[0-9]/.test(password)) strength++;
            if (/[^A-Za-z0-9]/.test(password)) strength++;
            
            // Update the UI based on the calculated strength score
            switch (strength) {
                case 0:
                case 1:
                    strengthBar.style.setProperty('--strength-width', '20%');
                    strengthBar.style.setProperty('--strength-color', '#e74c3c'); // Red
                    strengthText.textContent = 'Password is weak';
                    break;
                case 2:
                    strengthBar.style.setProperty('--strength-width', '40%');
                    strengthBar.style.setProperty('--strength-color', '#f1c40f'); // Yellow
                    strengthText.textContent = 'Password is okay';
                    break;
                case 3:
                     strengthBar.style.setProperty('--strength-width', '60%');
                     strengthBar.style.setProperty('--strength-color', '#f1c40f'); // Yellow
                     strengthText.textContent = 'Password is good';
                    break;
                case 4:
                    strengthBar.style.setProperty('--strength-width', '80%');
                    strengthBar.style.setProperty('--strength-color', '#2ecc71'); // Light Green
                    strengthText.textContent = 'Password is strong';
                    break;
                case 5:
                    strengthBar.style.setProperty('--strength-width', '100%');
                    strengthBar.style.setProperty('--strength-color', '#27ae60'); // Dark Green
                    strengthText.textContent = 'Password is very strong';
                    break;
                default:
                    strengthBar.style.setProperty('--strength-width', '0%');
                    strengthText.textContent = '';
            }
        });
    }
});

// --- Mobile Menu Function ---
// Toggles the 'responsive' class on the navigation menu for mobile view.
function myMenuFunction() {
    var i = document.getElementById("navMenu");
    if (i) {
        i.classList.toggle('responsive');
    }
}
