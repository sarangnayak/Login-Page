const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg-canvas'),
    alpha: true 
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);


const geometry = new THREE.IcosahedronGeometry(1, 0);
const material = new THREE.MeshStandardMaterial({
    color: 0x6a5af9,
    metalness: 0.6,
    roughness: 0.3,
    emissive: 0x111111,
});


const crystals = [];
for (let i = 0; i < 100; i++) {
    const mesh = new THREE.Mesh(geometry, material);

    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));
    mesh.position.set(x, y, z);

    const [rx, ry, rz] = Array(3).fill().map(() => Math.random() * Math.PI);
    mesh.rotation.set(rx, ry, rz);
    
    const scale = THREE.MathUtils.randFloat(0.5, 1.5);
    mesh.scale.set(scale, scale, scale);

    scene.add(mesh);
    crystals.push(mesh);
}


const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(pointLight, ambientLight);

const mouse = new THREE.Vector2();
window.addEventListener('mousemove', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
});



function animate() {
    requestAnimationFrame(animate);

    crystals.forEach(crystal => {
        crystal.rotation.x += 0.001;
        crystal.rotation.y += 0.002;
    });

    
    pointLight.position.x = mouse.x * 20;
    pointLight.position.y = mouse.y * 20;

    renderer.render(scene, camera);
}

animate();


window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});



document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const showRegisterLink = document.getElementById('show-register');
    const showLoginLink = document.getElementById('show-login');

    const formBox = document.querySelector('.form-box');


    const switchForms = (showRegister) => {
        if (showRegister) {
            gsap.to(formBox, { duration: 0.8, rotationY: 180, ease: 'power2.inOut' });
            if(registerBtn) registerBtn.classList.add('white-btn');
            if(loginBtn) loginBtn.classList.remove('white-btn');
        } else {
            gsap.to(formBox, { duration: 0.8, rotationY: 0, ease: 'power2.inOut' });
            if(loginBtn) loginBtn.classList.add('white-btn');
            if(registerBtn) registerBtn.classList.remove('white-btn');
        }
    };
    
    if(loginBtn) loginBtn.addEventListener('click', () => switchForms(false));
    if(registerBtn) registerBtn.addEventListener('click', () => switchForms(true));
    if(showLoginLink) showLoginLink.addEventListener('click', (e) => { e.preventDefault(); switchForms(false); });
    if(showRegisterLink) showRegisterLink.addEventListener('click', (e) => { e.preventDefault(); switchForms(true); });

    
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
            
            switch (strength) {
                case 0:
                case 1:
                    strengthBar.style.setProperty('--strength-width', '20%');
                    strengthBar.style.setProperty('--strength-color', '#e74c3c');
                    strengthText.textContent = 'Password is weak';
                    break;
                case 2:
                    strengthBar.style.setProperty('--strength-width', '40%');
                    strengthBar.style.setProperty('--strength-color', '#f1c40f');
                    strengthText.textContent = 'Password is okay';
                    break;
                case 3:
                     strengthBar.style.setProperty('--strength-width', '60%');
                     strengthBar.style.setProperty('--strength-color', '#f1c40f');
                     strengthText.textContent = 'Password is good';
                    break;
                case 4:
                    strengthBar.style.setProperty('--strength-width', '80%');
                    strengthBar.style.setProperty('--strength-color', '#2ecc71');
                    strengthText.textContent = 'Password is strong';
                    break;
                case 5:
                    strengthBar.style.setProperty('--strength-width', '100%');
                    strengthBar.style.setProperty('--strength-color', '#27ae60');
                    strengthText.textContent = 'Password is very strong';
                    break;
                default:
                    strengthBar.style.setProperty('--strength-width', '0%');
                    strengthText.textContent = '';
            }
        });
    }

});


function myMenuFunction() {
    var i = document.getElementById("navMenu");
    if (i) {
        i.classList.toggle('responsive');
    }
}


