# 📝 Content Customization Guide

This guide shows you exactly what to edit in each JSON file to personalize your portfolio.

## 🎯 Quick Overview

All your content lives in `src/data/`:
- `personal.json` - Your name, title, contact info
- `expertise.json` - Your skills and what you do
- `projects.json` - Your work and projects
- `experience.json` - Your job history
- `contact.json` - How people can reach you

## 1️⃣ Personal Information

**File:** `src/data/personal.json`

```json
{
  "name": "Alex Morgan",           // 👈 Change to your name
  "title": "Full Stack Developer", // 👈 Your job title
  "subtitle": "Hello, I'm",        // 👈 Greeting text
  "description": "I craft...",     // 👈 Your intro paragraph
  "logo": "<AM/>",                 // 👈 Your initials for logo
  "email": "alex@example.com",     // 👈 Your email
  "linkedin": "/in/alexmorgan",    // 👈 LinkedIn username
  "github": "@alexmorgan",         // 👈 GitHub username
  "twitter": "@alexmorgan"         // 👈 Twitter/X handle
}
```

## 2️⃣ Skills & Expertise

**File:** `src/data/expertise.json`

Each skill is an object. You can add/remove skills:

```json
{
  "id": 1,                         // 👈 Unique number
  "icon": "⚛️",                    // 👈 Emoji icon
  "title": "Frontend Development", // 👈 Skill name
  "description": "Building...",    // 👈 What you do
  "technologies": [                // 👈 Tech stack (add/remove as needed)
    "React",
    "Next.js",
    "TypeScript"
  ]
}
```

**Common emojis to use:**
- Frontend: ⚛️ 💻 🎨 🖥️
- Backend: 🔧 ⚙️ 🛠️ 🗄️
- Cloud: ☁️ 🚀 🌐 📡
- Mobile: 📱 📲 
- AI/ML: 🤖 🧠 
- Design: 🎨 ✨

## 3️⃣ Projects

**File:** `src/data/projects.json`

Add your projects here:

```json
{
  "id": 1,                              // 👈 Unique number
  "title": "E-Commerce Platform",       // 👈 Project name
  "category": "Web Application",        // 👈 Type of project
  "description": "Full-stack...",       // 👈 Brief description
  "link": "https://github.com/...",    // 👈 Project link/demo
  "image": "/images/project1.jpg"      // 👈 Optional: project screenshot
}
```

**Categories examples:**
- Web Application
- Mobile App
- SaaS Product
- Open Source
- AI Integration
- Enterprise
- E-Commerce
- Dashboard
- API
- Chrome Extension

**Adding project images:**
1. Put image in `public/images/`
2. Reference it: `"image": "/images/myproject.png"`

## 4️⃣ Work Experience

**File:** `src/data/experience.json`

List your jobs (most recent first):

```json
{
  "id": 1,                                    // 👈 Unique number
  "title": "Senior Full Stack Developer",    // 👈 Job title
  "company": "TechCorp Solutions",           // 👈 Company name
  "period": "2022 - Present",                // 👈 Time period
  "description": "Leading development...",   // 👈 What you did (2-3 sentences)
  "technologies": [                          // 👈 Tech used in this role
    "React",
    "Node.js",
    "AWS"
  ]
}
```

**Tips:**
- Start with action words: "Led", "Built", "Architected", "Implemented"
- Include metrics: "serving 500K+ users", "reduced load time by 60%"
- Keep it concise but impactful

## 5️⃣ Contact Information

**File:** `src/data/contact.json`

Update all your contact methods:

```json
{
  "contactMethods": [
    {
      "id": 1,
      "icon": "📧",                           // 👈 Emoji
      "title": "Email",                      // 👈 Method name
      "value": "alex@example.com",          // 👈 Display text
      "link": "mailto:alex@example.com"     // 👈 Clickable link
    }
  ],
  "socialLinks": [
    {
      "platform": "Twitter",                 // 👈 Platform name
      "icon": "𝕏",                           // 👈 Icon/text to display
      "url": "https://twitter.com/..."      // 👈 Full URL
    }
  ]
}
```

**Common contact icons:**
- Email: 📧 ✉️
- LinkedIn: 💼 🔗
- GitHub: 🐙 👨‍💻
- Twitter: 𝕏 🐦
- Phone: 📱 ☎️
- Website: 🌐 🔗

## 🎨 Changing Section Titles

Each data file has section headers you can customize:

```json
{
  "sectionTitle": "Recent Projects",      // 👈 Main heading
  "sectionLabel": "Featured Work",        // 👈 Small label above
  "sectionDescription": "A selection..."  // 👈 Description below
}
```

## ✅ Validation Checklist

Before you publish, check:

- [ ] All URLs start with `http://` or `https://`
- [ ] Email links use `mailto:`
- [ ] All `id` fields are unique numbers
- [ ] No trailing commas in arrays
- [ ] All strings are in "quotes"
- [ ] All social links are correct

## 🔧 Quick Tips

1. **Keep it consistent:** Use the same writing style throughout
2. **Be specific:** "Built X using Y resulting in Z" is better than "Worked on projects"
3. **Update regularly:** Keep your latest work at the top
4. **Test links:** Make sure all URLs work before deploying
5. **Use real data:** Replace ALL placeholder content

## 🚨 Common Mistakes

❌ **Don't do this:**
```json
"technologies": ["React", "Node.js",]  // Trailing comma
```

✅ **Do this:**
```json
"technologies": ["React", "Node.js"]   // No trailing comma
```

❌ **Don't do this:**
```json
"link": "github.com/myproject"  // Missing https://
```

✅ **Do this:**
```json
"link": "https://github.com/myproject"
```

## 🎯 Example Workflow

1. **Start with personal.json** - Update your basic info
2. **Move to expertise.json** - List 3-5 key skills
3. **Update projects.json** - Add your best 4-6 projects
4. **Fill experience.json** - Add recent jobs (2-4 positions)
5. **Check contact.json** - Verify all links work
6. **Test locally** - Run `npm start` and check everything
7. **Deploy** - Build and publish!

## 📞 Need Help?

- JSON syntax error? Use [jsonlint.com](https://jsonlint.com) to validate
- Can't find something? Check the component files in `src/components/`
- Want to change colors? Check the main README

---

Happy customizing! 🎉
