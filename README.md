# Triposome™ Website — GitHub + Vercel Ready

This is a plain HTML, CSS and JavaScript static website. There is no build command, framework, package installation or backend required.

## 1. Upload to GitHub

1. Download and unzip `Triposome_Static_Website.zip`.
2. Open the extracted `Triposome_Static_Website` folder.
3. Create a new repository on GitHub (for example, `triposome-website`).
4. Upload the **contents of this folder** to the repository root — `index.html`, `styles.css`, `script.js`, `assets/`, `vercel.json`, `.gitignore` and this README.
5. Commit the files to the `main` branch.

Important: `index.html` must be at the repository root, not inside an extra nested folder.

## 2. Deploy on Vercel

1. Sign in to https://vercel.com using your GitHub account.
2. Select **Add New → Project**.
3. Import the `triposome-website` GitHub repository.
4. In project configuration:
   - Framework Preset: **Other**
   - Root Directory: `./`
   - Build Command: leave empty
   - Output Directory: leave empty (or `.` if the UI requires a value)
   - Install Command: leave empty
5. Select **Deploy**.

Vercel will publish the site and provide a public `*.vercel.app` URL. Future pushes to the connected GitHub branch will trigger new deployments automatically.

## 3. Local preview

Double-click `index.html` to open it in a browser, or run a local static server from this folder:

```bash
python -m http.server 8000
```

Then visit http://localhost:8000.

## Project structure

```text
Triposome_Static_Website/
├── index.html
├── styles.css
├── script.js
├── vercel.json
├── .gitignore
├── README.md
└── assets/
    └── ... supplied-document diagrams and visuals
```

## Before publishing

- Confirm official company/brand naming and trademark usage.
- Add approved company contact details and a real contact destination.
- Attach the approved MSDS/SDS; it was referenced in the supplied brief but not provided.
- Have technical, regulatory and legal teams review scientific, efficacy, safety and product claims. Case-study claims are presented as supplied and have not been independently verified.
- Confirm product names, indications, strengths and formulation instructions against approved source documents.

This is a static front-end only. It does not include a CMS, database, analytics, backend, or working contact-form submission.
