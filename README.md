# React Portfolio Website

A modern, customizable portfolio website built with React and a dark theme with bold cyan/purple accents.

## 🎨 Features

- **Dark Mode Design** with animated gradient background
- **Fully Customizable** via JSON files - no code changes needed
- **Smooth Animations** and scroll effects
- **Responsive Design** - works on all devices
- **Clean Component Structure** - easy to maintain and extend

## 📁 Project Structure

```
portfolio-react/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   ├── Hero.jsx
│   │   ├── Expertise.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   └── Contact.jsx
│   ├── data/              # 👈 EDIT THESE FILES TO CUSTOMIZE
│   │   ├── personal.json
│   │   ├── expertise.json
│   │   ├── projects.json
│   │   ├── experience.json
│   │   └── contact.json
│   ├── App.jsx
│   ├── App.css
│   ├── index.js
│   └── index.css
└── package.json
```

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm start
   ```

3. **Open browser:**
   Navigate to `http://localhost:3000`

## ✏️ How to Customize

All content is stored in JSON files in `src/data/`. Simply edit these files to update your portfolio:

### 1. Personal Information (`personal.json`)
```json
{
  "name": "Your Name",
  "title": "Your Job Title",
  "subtitle": "Your Greeting",
  "description": "Your introduction",
  "email": "your@email.com",
  "linkedin": "/in/yourprofile",
  "github": "@yourusername"
}
```

### 2. Expertise/Skills (`expertise.json`)
Add or modify your skills:
```json
{
  "skills": [
    {
      "id": 1,
      "icon": "⚛️",
      "title": "Your Skill",
      "description": "Description of your skill",
      "technologies": ["Tech1", "Tech2", "Tech3"]
    }
  ]
}
```

### 3. Projects (`projects.json`)
Update your projects:
```json
{
  "projects": [
    {
      "id": 1,
      "title": "Project Name",
      "category": "Project Type",
      "description": "Project description",
      "link": "https://project-url.com",
      "image": "/path/to/image.jpg"
    }
  ]
}
```

### 4. Experience (`experience.json`)
Add your work history:
```json
{
  "experiences": [
    {
      "id": 1,
      "title": "Job Title",
      "company": "Company Name",
      "period": "2020 - Present",
      "description": "What you did",
      "technologies": ["Tech1", "Tech2"]
    }
  ]
}
```

### 5. Contact Information (`contact.json`)
Update your contact details and social links.

## 🎨 Customizing Colors

Want to change the color scheme? Edit the CSS variables in `src/App.css`:

```css
:root {
  --bg-primary: #0a0e27;        /* Main background */
  --bg-secondary: #111633;      /* Card backgrounds */
  --accent-primary: #00d4ff;    /* Cyan accent */
  --accent-secondary: #7c3aed;  /* Purple accent */
  /* ... other colors ... */
}
```

## 📦 Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## 🌐 Deployment

You can deploy this to:
- **Vercel:** `vercel --prod`
- **Netlify:** Drag and drop the `build/` folder
- **GitHub Pages:** Follow [these instructions](https://create-react-app.dev/docs/deployment/#github-pages)

## 📝 Adding Project Images

1. Place images in `public/images/`
2. Reference them in `projects.json`:
   ```json
   "image": "/images/your-project.jpg"
   ```

## 🔧 Tech Stack

- React 18
- CSS3 with CSS Variables
- Google Fonts (Outfit & JetBrains Mono)
- Intersection Observer API for animations

## 📄 License

Feel free to use this template for your personal portfolio!

## 💡 Tips

- Keep descriptions concise and impactful
- Use high-quality images for projects (recommended: 1200x630px)
- Update the meta tags in `public/index.html` for better SEO
- Test on mobile devices for responsive design

## 🆘 Need Help?

- Check the JSON files for examples
- All components are in `src/components/`
- Styles are in `src/App.css`
- Questions? Open an issue!

---

Built with ❤️ using React
