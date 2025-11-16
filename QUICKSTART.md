# Quick Start Guide - React Portfolio

## Prerequisites

Before you begin, make sure you have installed:
- **Node.js** (v14 or higher) - [Download here](https://nodejs.org)
- **Git** - [Download here](https://git-scm.com)
- A **GitHub account** - [Create here](https://github.com)
- A **Code Editor** - VS Code recommended - [Download here](https://code.visualstudio.com)

## Step 1: Install Dependencies

Open terminal/command prompt in the portfolio folder and run:

```bash
npm install
```

This will install all required dependencies including React and build tools.

## Step 2: Run Locally

Start the development server:

```bash
npm start
```

Your portfolio will open at `http://localhost:3000`

## Step 3: Customize Your Portfolio

Edit the component files in `src/components/`:

1. **Hero.jsx** - Update your name and introduction
2. **About.jsx** - Modify your bio and statistics
3. **Projects.jsx** - Add your real projects
4. **Skills.jsx** - List your technical skills
5. **Contact.jsx** - Update contact information

## Step 4: Create GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Click **New** to create a new repository
3. Name it `portfolio`
4. Click **Create repository**

## Step 5: Update Homepage in package.json

Open `package.json` and update this line:

```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/portfolio"
```

Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username.

## Step 6: Initialize Git and Push

In your portfolio folder, run these commands:

```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/portfolio.git
git push -u origin main
```

Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username.

## Step 7: Deploy to GitHub Pages

Run this command to build and deploy:

```bash
npm run deploy
```

Wait for the deployment to complete (usually 1-2 minutes).

## Step 8: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings**
3. Select **Pages** from the left menu
4. Under "Source", select **Deploy from a branch**
5. Select `gh-pages` branch
6. Click **Save**

## Step 9: View Your Portfolio

Your portfolio is now live at:

```
https://YOUR_GITHUB_USERNAME.github.io/portfolio
```

Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username.

## Making Updates

To update your portfolio after deployment:

1. Make changes to the files
2. Run these commands:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push
   npm run deploy
   ```

## Common Issues

### Issue: Port 3000 is already in use

**Solution:** Run on a different port:
```bash
npm start -- --port 3001
```

### Issue: npm command not found

**Solution:** Install Node.js from [nodejs.org](https://nodejs.org)

### Issue: Git command not found

**Solution:** Install Git from [git-scm.com](https://git-scm.com)

### Issue: Deploy not working

**Solution:** 
1. Check homepage in package.json is correct
2. Run: `npm run build` (should succeed)
3. Verify gh-pages branch exists in GitHub repository

## Useful Commands

```bash
npm start              # Run development server
npm run build          # Create production build
npm run deploy         # Deploy to GitHub Pages
npm test               # Run tests
npm run eject          # Eject from Create React App (not recommended)
```

## Additional Resources

- [React Documentation](https://react.dev)
- [GitHub Pages Docs](https://pages.github.com)
- [Create React App Docs](https://create-react-app.dev)
- [Font Awesome Icons](https://fontawesome.com/icons)

## Need Help?

1. Check the [README.md](./README.md) for more information
2. Review the component files in `src/components/`
3. Check GitHub repository settings
4. Look for errors in the terminal output

---

**Your portfolio is ready to showcase your skills to the world! Good luck! 🚀**
