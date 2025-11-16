# Aman - React Portfolio

A modern, responsive portfolio website built with React.js. This portfolio showcases your projects, skills, and experience in a professional and visually appealing way.

## Features

- ⚛️ **React.js** - Modern JavaScript library for UI
- 🎨 **Modern Design** - Beautiful gradient backgrounds and smooth transitions
- 📱 **Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- ✨ **Animated Elements** - Smooth fade-in animations for components
- 🔗 **Smooth Scrolling** - Smooth navigation between sections
- 🎯 **Active Navigation** - Navigation links highlight based on scroll position
- 💻 **Component-Based** - Modular and reusable React components

## Sections

1. **Navigation Bar** - Sticky navigation with smooth scroll links
2. **Hero Section** - Eye-catching introduction with call-to-action buttons
3. **About** - Personal background with key statistics
4. **Projects** - Featured project showcase with descriptions
5. **Skills** - Technical skills organized by category
6. **Contact** - Contact information and social media links
7. **Footer** - Copyright and professional closing

## Project Structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── index.js
│   └── index.css
├── package.json
├── .gitignore
└── README.md
```

## Technologies Used

- **React 18.2.0** - UI Library
- **React Scripts 5.0.1** - Build tools
- **CSS3** - Styling with gradients and animations
- **Font Awesome** - Icons library
- **Google Fonts** - Poppins font family

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```
   The app will open at `http://localhost:3000`

## Development

### Running Locally
```bash
npm start
```

### Building for Production
```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## Deployment to GitHub Pages

### Setup GitHub Pages

1. **Create a new GitHub repository**
   - Go to [GitHub](https://github.com/new)
   - Create a repository named `portfolio` (or any name you prefer)
   - Don't add README, .gitignore, or license

2. **Update package.json**
   - Replace `yourusername` with your actual GitHub username in the `homepage` field:
   ```json
   "homepage": "https://yourusername.github.io/portfolio"
   ```

3. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```
   This will build and deploy your portfolio to GitHub Pages.

5. **Enable GitHub Pages**
   - Go to your repository settings
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose `gh-pages` branch
   - Click Save

Your portfolio will be live at: `https://yourusername.github.io/portfolio`

## Customization

### Update Your Information

1. **Hero Section** - Edit `src/components/Hero.jsx`
   - Change name and title
   - Update description

2. **About Section** - Edit `src/components/About.jsx`
   - Update your bio
   - Modify statistics

3. **Projects** - Edit `src/components/Projects.jsx`
   - Add your actual projects
   - Include real project links
   - Update technology tags

4. **Skills** - Edit `src/components/Skills.jsx`
   - Add your technical skills
   - Organize by categories

5. **Contact** - Edit `src/components/Contact.jsx`
   - Update email address
   - Add phone number
   - Update social media links

### Change Colors

Edit the CSS variables in `src/index.css`:
```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #f5576c;
    /* ... other colors ... */
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Performance Optimization

- Intersection Observer for lazy animations
- CSS gradients and transforms for smooth performance
- Optimized React components with functional patterns
- Responsive images and proper sizing

## Available Scripts

- `npm start` - Run development server
- `npm run build` - Create production build
- `npm run deploy` - Deploy to GitHub Pages
- `npm test` - Run tests

## Git Commands Reference

### Initial Setup
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

### Making Changes
```bash
git add .
git commit -m "Your commit message"
git push
```

### Deploy Updates
```bash
npm run deploy
```

## Tips for Success

1. **Keep it Updated** - Regularly update projects and experience
2. **Add Real Projects** - Link to deployed projects and GitHub repos
3. **Optimize Images** - Compress images for faster loading
4. **Test Responsiveness** - Test on mobile devices
5. **Engage Socially** - Ensure social media links are active
6. **Professional Content** - Keep writing professional and clear
7. **Keep Contact Updated** - Make it easy for people to reach you
8. **Add More Details** - Expand project descriptions with technologies used

## Future Enhancements

Consider adding:
- Blog section
- Client testimonials
- Achievement badges
- Resume/CV download
- Dark mode toggle
- Contact form with backend
- Project filtering
- More animation effects

## Troubleshooting

### Port 3000 Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
# Or use a different port
npm start -- --port 3001
```

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Deployment Issues
- Check `homepage` in package.json
- Verify GitHub Pages is enabled
- Check gh-pages is installed: `npm list gh-pages`

## License

This project is open source and available for personal use.

---

**Created with ❤️ for your professional presence online**

Last Updated: November 2025

## Questions or Need Help?

Feel free to reach out or check the [React documentation](https://react.dev) for more information.
