# Sarah Draper Portfolio

Recruiter-facing portfolio website for Sarah (Sadaf) Draper. The site highlights software engineering, analytics, machine learning, and data product work with links to GitHub, LinkedIn, Kaggle, YouTube, and DailyDataHero.

## Stack

- React 17
- Create React App
- Custom CSS
- GitHub Pages for deployment

## Project Structure

- App source: `portfolio-app/`
- Main page content: `portfolio-app/src/components/main/PortfolioApp.js`
- Main styles: `portfolio-app/src/components/main/PortfolioApp.css`
- Navigation: `portfolio-app/src/components/NavBar/`

## Local Development

From the app directory:

```bash
cd portfolio-app
npm install
npm start
```

Because the app is configured for GitHub Pages, the local dev URL may open under:

```text
http://localhost:3000/portfolio-website
```

If port `3000` is already in use, React will offer another port.

## Production Build

```bash
cd portfolio-app
npm run build
```

The production output is created in:

```text
portfolio-app/build
```

## Deploy to GitHub Pages

This repo is configured to publish to:

```text
https://sarah0ravari.github.io/portfolio-website/
```

Deploy steps:

```bash
cd /Users/sarahdraper/Desktop/Desktop/portfolio-site
git push origin main

cd /Users/sarahdraper/Desktop/Desktop/portfolio-site/portfolio-app
npm run deploy
```

If `gh-pages` fails because of a stale cache, clear the cached publish repo and rerun deploy:

```bash
rm -rf /Users/sarahdraper/Desktop/Desktop/portfolio-site/portfolio-app/node_modules/.cache/gh-pages
npm run deploy
```

## Notes

- The site intentionally avoids private desktop-only personal information.
- Resume content on the site is public-safe and summary-based.
- If GitHub Pages shows `404`, confirm that:
  - `main` has been pushed
  - the `gh-pages` branch was created successfully
  - GitHub repo `Settings > Pages` is set to deploy from `gh-pages`
