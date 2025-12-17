# Login-Page 🔐

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen?style=for-the-badge&logo=github)](https://sarangnayak.github.io/Login-Page/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Status](https://img.shields.io/badge/status-active-success?style=for-the-badge)](https://github.com/sarangnayak/Login-Page/deployments)

A modern, responsive login page built with vanilla HTML, CSS, and JavaScript. Features smooth animations, form validation, and a clean design that works across all devices. Perfect as a starter template for authentication interfaces.

## ✨ Features

- **🎨 Modern UI Design** – Clean layout with subtle animations and transitions
- **📱 Fully Responsive** – Adapts to desktop, tablet, and mobile screens
- **🔒 Form Validation** – Client-side validation with user feedback
- **🌙 Theme Ready** – Easy to customize colors and styles
- **⚡ Fast Loading** – No external dependencies, pure vanilla code
- **♿ Accessible** – ARIA labels and keyboard navigation support
- **🔐 Visual Feedback** – Interactive elements with hover and focus states

## 🚀 Live Demo

Check out the live version: [https://sarangnayak.github.io/Login-Page/](https://sarangnayak.github.io/Login-Page/)

## 📁 Project Structure
```
Login-Page/
├── index.html # Main login page
├── style.css # All styles and animations
├── script.js # Form validation and interactivity
├── preview.png # Project screenshot
└── README.md # Project documentation
```


## 🛠️ Getting Started

### Quick Start
Simply download the files and open `index.html` in your browser.

### Local Development
1. Clone the repository:
   ```bash
   git clone https://github.com/sarangnayak/Login-Page.git
   cd Login-Page
   ```
   Open >index.< html in your browser, or use a local server:

   ### GitHub Pages Deployment
Automatically deployed from the `main` branch.

## 🔧 Technical Details

### Frontend Stack
- **HTML5** – Semantic markup with modern elements
- **CSS3** – Flexbox/Grid layout, CSS animations, custom properties
- **Vanilla JavaScript** – Form handling and validation

### Key Components
- **Form Validation System** – Real-time input validation
- **Animation Controller** – Smooth transitions and effects
- **Responsive Manager** – Media queries for all screen sizes
- **Theme System** – CSS custom properties for easy theming

### Browser Support
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome for Android)

## 🎯 Use Cases

- **Web Applications** – Authentication interface starter
- **Portfolio Projects** – Showcase frontend skills
- **Learning Resource** – Study modern CSS and JavaScript patterns
- **Template** – Quick start for login/register pages
- **UI/UX Reference** – Example of form design best practices

## 🔧 Customization

### Change Colors
Edit the CSS custom properties in `style.css`:
```css
:root {
  --primary-color: #your-color;
  --secondary-color: #your-color;
  --background-color: #your-color;
}
```
### Add Features
- Password strength indicator
- "Remember me" functionality
- Social login buttons (Google, GitHub, etc.)
- Dark/light mode toggle
- CAPTCHA integration
- Forgot password flow

### Modify Validation
Update validation rules in `script.js`:
```
javascript
const validationRules = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
};
```

🤝 Contributing
Contributions are welcome! Here's how you can help:

Report Issues – Found a bug? Open an issue

Suggest Features – Have ideas for improvements?

Submit PRs – Implement enhancements and submit pull requests

Improve Docs – Help enhance the documentation
---

Development Workflow
Fork the repository

Create a feature branch

Make your changes

Test across browsers

Submit a pull request
----
📝 License
This project is licensed under the MIT License - see the LICENSE file for details.
---

🙏 Acknowledgments
Modern CSS Techniques – Used for responsive design and animations

MDN Web Docs – For comprehensive web development documentation

Browser Developer Tools – For debugging and optimization

GitHub Community – For hosting and continuous deployment

📊 Project Status
Active – Regularly maintained and deployed via GitHub Pages

Deployment History: 11 successful deployments to GitHub Pages

Latest Update: Form validation improvements and accessibility enhancements
