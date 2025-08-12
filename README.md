# Interactive Portfolio Website

A modern, responsive, and interactive portfolio website built with HTML, CSS, and JavaScript. Features smooth animations, interactive elements, and a professional design.

## Features

- 🎨 **Modern Design**: Clean and professional layout with gradient backgrounds
- 📱 **Responsive**: Fully responsive design that works on all devices
- ✨ **Interactive Elements**: Hover effects, animations, and smooth transitions
- 📊 **Skills Visualization**: Interactive skill bars with progress indicators
- 📈 **Timeline**: Beautiful timeline for work experience
- 🎓 **Education Cards**: Attractive cards for educational background
- 📞 **Contact Section**: Professional contact information display
- 🚀 **Performance**: Optimized for fast loading and smooth performance

## Sections

1. **Hero Section**: Eye-catching introduction with call-to-action buttons
2. **About**: Personal information with animated statistics
3. **Skills**: Interactive skill bars organized by categories
4. **Experience**: Timeline-based work experience display
5. **Education**: Educational background in card format
6. **Contact**: Contact information and social media links

## Customization Guide

### 1. Personal Information

Update the following in `index.html`:

#### Hero Section
```html
<!-- Update your name and title -->
<h1 class="hero-title">
    Hi, I'm <span class="highlight">Your Name</span>
</h1>
<p class="hero-subtitle">Software Developer & Creative Problem Solver</p>
```

#### Navigation
```html
<div class="nav-logo">
    <h2>Your Name</h2>
</div>
```

#### About Section
```html
<p>
    <!-- Update your personal description -->
    I'm a passionate software developer with a strong foundation in modern web technologies...
</p>

<!-- Update your statistics -->
<div class="stat">
    <h3>3+</h3>
    <p>Years Experience</p>
</div>
```

### 2. Skills Section

Update your skills in the skills section:

```html
<div class="skill-item" data-skill="HTML5">
    <i class="fab fa-html5"></i>
    <span>HTML5</span>
    <div class="skill-level" data-level="90"></div>
</div>
```

**To add new skills:**
1. Copy the skill-item structure
2. Change the icon class (use Font Awesome icons)
3. Update the skill name
4. Set the skill level (0-100) in the `data-level` attribute

### 3. Work Experience

Update the timeline items in the experience section:

```html
<div class="timeline-item">
    <div class="timeline-dot"></div>
    <div class="timeline-content">
        <div class="timeline-header">
            <h3>Senior Software Developer</h3>
            <span class="company">Tech Company Inc.</span>
            <span class="duration">2022 - Present</span>
        </div>
        <p>
            <!-- Update job description -->
            Led development of multiple web applications using React and Node.js...
        </p>
        <div class="tech-stack">
            <span class="tech-tag">React</span>
            <span class="tech-tag">Node.js</span>
        </div>
    </div>
</div>
```

### 4. Education

Update the education cards:

```html
<div class="education-card">
    <div class="education-icon">
        <i class="fas fa-graduation-cap"></i>
    </div>
    <div class="education-content">
        <h3>Bachelor of Computer Science</h3>
        <p class="institution">University Name</p>
        <p class="year">2015 - 2019</p>
        <p class="description">
            <!-- Update education description -->
            Graduated with honors. Specialized in software engineering...
        </p>
    </div>
</div>
```

### 5. Contact Information

Update your contact details:

```html
<div class="contact-item">
    <i class="fas fa-envelope"></i>
    <div>
        <h3>Email</h3>
        <p>your.email@example.com</p>
    </div>
</div>
```

### 6. Social Media Links

Update the social media links in the contact section:

```html
<div class="social-links">
    <a href="https://github.com/yourusername" class="social-link">
        <i class="fab fa-github"></i>
    </a>
    <a href="https://linkedin.com/in/yourusername" class="social-link">
        <i class="fab fa-linkedin"></i>
    </a>
    <!-- Add more social links as needed -->
</div>
```

## Color Customization

You can customize the color scheme by updating the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #7c3aed;
    --accent-color: #fbbf24;
    --text-color: #1f2937;
    --light-bg: #f8fafc;
}
```

## Adding Your Photo

To add your profile photo:

1. Place your image in the project folder
2. Update the profile avatar in the hero section:

```html
<div class="profile-avatar">
    <img src="your-photo.jpg" alt="Your Name" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">
</div>
```

## Adding Projects Section

To add a projects section, insert this before the contact section:

```html
<section id="projects" class="projects">
    <div class="container">
        <h2 class="section-title">Projects</h2>
        <div class="projects-grid">
            <div class="project-card">
                <div class="project-image">
                    <img src="project-image.jpg" alt="Project Name">
                </div>
                <div class="project-content">
                    <h3>Project Name</h3>
                    <p>Project description goes here...</p>
                    <div class="project-tech">
                        <span class="tech-tag">React</span>
                        <span class="tech-tag">Node.js</span>
                    </div>
                    <div class="project-links">
                        <a href="#" class="btn btn-primary">Live Demo</a>
                        <a href="#" class="btn btn-secondary">GitHub</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
```

## Deployment

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Drag and drop your project folder to Netlify
2. Your site will be deployed instantly
3. You'll get a custom URL

### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically deploy your site
3. You'll get a custom URL and can add a custom domain

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Tips

1. Optimize images before adding them
2. Use WebP format for better compression
3. Minimize the number of external requests
4. Consider using a CDN for external resources

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you need help customizing your portfolio, feel free to:
- Check the comments in the code
- Refer to this README
- Look up Font Awesome icons for additional icons
- Use browser developer tools to experiment with styles

## Credits

- Fonts: [Inter](https://fonts.google.com/specimen/Inter) from Google Fonts
- Icons: [Font Awesome](https://fontawesome.com/)
- Design inspiration from modern web design trends 