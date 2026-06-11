# Haneesh Yadav — Personal Portfolio

A modern, responsive developer portfolio built with **React**, featuring animated UI elements, a live contact form, and a fully data-driven architecture.

---

## Live Demo

[ View Portfolio](https://haneesh.vercel.app/) <!-- Replace with your deployed URL -->

---

## Features

- **Animated PC Setup Hero** — A custom three-monitor developer workstation animation with live-updating terminal code, spinning CPU fan, and rotating profile panels
- **Data-Driven Architecture** — All content (projects, skills, education, experience) is centralized in `data.js` for easy updates
- **Projects Showcase** — Highlighted projects with tech stack, key features, live demo and GitHub links
- **Skills Grid** — Categorized tech stack displayed as interactive cards
- **Timeline Sections** — Education and experience displayed as clean vertical timelines
- **Contact Form** — Functional contact form with send feedback and email copy-to-clipboard
- **Back to Top Button** — Smooth scroll with visibility toggle
- **Fully Responsive** — Adapts cleanly across desktop, tablet, and mobile
- **Dark Theme** — Deep dark UI with purple accent system

---

## Tech Stack

| Layer      | Technology                     |
|------------|-------------------------------|
| Framework  | React (Hooks)                  |
| Styling    | Custom CSS with CSS Variables  |
| Icons      | Remix Icons                    |
| Deployment | Vercel                         |
| Animation  | Vanilla JS + CSS Transitions   |

---

## Project Structure

```
portfolio/
├── public/
│   └── assets/
│       ├── images/
│       │   ├── home-perfil.png      # Hero section profile image
│       │   ├── profile.png          # About section profile image
│       │   ├── project-1.png        # BhoomiSetu screenshot
│       │   └── project-2.png        # Tambola Game screenshot
│       └── resume/
│           └── RESUME.pdf           # Downloadable resume
├── src/
│   ├── App.js                       # Main component (all sections + animations)
│   ├── data.js                      # All site content lives here
│   └── index.css                    # Global styles & CSS variables
└── README.md
```

---


## Customisation

All site content is managed from a single file — **`src/data.js`**. No need to dig through component code to update text.

| Export              | What it controls                                |
|---------------------|-------------------------------------------------|
| `PERSONAL`          | Name, tagline, profile images, resume URL       |
| `ABOUT`             | Bio description and highlighted bold words      |
| `STATS`             | Numbers displayed in the About section          |
| `NAV_LINKS`         | Navigation menu items                           |
| `SOCIAL_LINKS`      | Header social icon links                        |
| `CONTACT`           | Email, location, footer social links            |
| `PROJECTS`          | Project cards (title, tech, highlights, links)  |
| `EXPERIENCE`        | Work / club experience timeline                 |
| `EDUCATION`         | Education timeline entries                      |
| `SKILL_CATEGORIES`  | Tech stack cards and skill tags                 |
| `FOOTER`            | Footer owner name                               |

---

## 📌 Featured Projects

### BhoomiSetu — Blockchain Land Records Platform
- Digitises land records using blockchain for tamper-proof ownership history
- End-to-end implementation from smart-contract layer to responsive React UI
- **Tech:** React, JavaScript, Node.js, MySQL
- [Live Demo](https://bhoomi-setu.vercel.app/) · [GitHub](https://github.com/haneesh-yadav/bhoomiSetu)

### Tambola Game — Multiplayer Real-Time Housie
- Supports 200+ concurrent players via Socket.IO namespaced rooms
- Auto-claims, live number board, and host dashboard built from scratch
- **Tech:** React, Node.js, Express, Socket.IO
- [Live Demo](https://haneesh-tambola.vercel.app/) · [GitHub](https://github.com/haneesh-yadav/tambola)


## Contact

| Channel  | Details |
|----------|---------|
| Email    | [haneesh.yadavv@gmail.com](mailto:haneesh.yadavv@gmail.com) |
| LinkedIn | [linkedin.com/in/haneesh-yadav](https://www.linkedin.com/in/haneesh-yadav/) |
| GitHub   | [github.com/haneesh-yadav](https://github.com/haneesh-yadav) |
| Location | Gurugram, India (Remote-friendly) |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
  Made with ☕ and React by <strong>Haneesh Yadav</strong>
</div>
