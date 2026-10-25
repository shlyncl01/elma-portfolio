# Ashley Elma — Portfolio

React + Vite + Tailwind CSS (v3). No other dependencies. Navy and light themes.

## Run it
```bash
npm install
npm run dev
```

## Before you publish
- Put your resume at `public/Ashley_Elma_Resume.pdf`
- Put project screenshots in `public/projects/` (see the README.txt there)
- Edit your text in `src/data/content.js` (LinkedIn URL, project descriptions marked "(edit)")
- Change colors in `src/index.css` (`:root` = light, `.dark` = navy)

## Structure
```
src/
  data/content.js     all your text, skills and projects
  hooks/              useTheme, useActiveSection, useSpotlight, useTypewriter, useReveal
  components/         Navbar, Sidebar, About, SkillIcons, Projects, ProjectCard, Contact, Footer, Section, Tag, Icons
  App.jsx             page layout
  index.css           Tailwind + theme colors
```
