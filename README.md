# Abu Bakkar | Portfolio

Personal portfolio website of Abu Bakkar, Frontend Developer and Software Engineer Intern at RMI.

## Sections

- **Home:** introduction, CV download and social links
- **About:** background and highlights
- **Skills:** technologies I work with
- **Projects:** selected work with links to the code
- **Articles:** writing on web development
- **Contact:** contact form, email and LinkedIn

## Tech stack

- React (Create React App)
- Material UI (`@mui/material`, `@mui/icons-material`)
- React Icons
- Inter font (Google Fonts)

## Run locally

```bash
git clone https://github.com/AbuBakkar-l/Portfolio.git
cd Portfolio
npm install
npm start
```

The site opens at `http://localhost:3000`.

## Build for production

```bash
npm run build
```

The production files are created in the `build` folder.

## Contact form setup

The form sends messages through [Formspree](https://formspree.io).

1. Create a free form on Formspree using your email address.
2. Copy the form URL (it looks like `https://formspree.io/f/xxxxxxxx`).
3. Paste it into `FORM_ENDPOINT` at the top of `src/Components/Contact.jsx`.

If `FORM_ENDPOINT` is empty, the form opens the visitor's email app instead.

## Deploy

Import the repository on [Vercel](https://vercel.com). It detects Create React App automatically, and every push to `main` redeploys the site.

## Contact

- Email: amabubakar121@gmail.com
- LinkedIn: [linkedin.com/in/abu-bakkar121](https://www.linkedin.com/in/abu-bakkar121/)
- GitHub: [AbuBakkar-l](https://github.com/AbuBakkar-l)
