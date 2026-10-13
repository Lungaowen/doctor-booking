# Carepoint | Doctor discovery and appointment booking

A responsive React + Vite website concept for discovering healthcare professionals and preparing appointment requests. Built with a calm, editorial healthcare aesthetic, accessible controls, Lucide icons, and responsive layouts.

## Features

- Search doctor profiles by name, specialty, or location
- Filter by medical specialty and browse sample provider profiles
- Appointment request modal with preferred date, time, and consultation type
- Responsive desktop and mobile navigation
- GitHub Actions workflow for GitHub Pages deployment

## Local development

```bash
npm install
npm run dev
```

Build the static site with `npm run build`.

## Deployment

The included GitHub Actions workflow builds the Vite app and publishes `dist/` to GitHub Pages whenever code is pushed to `main`. The Vite base path is configured for the repository name, `/doctor-booking/`.

Repository: https://github.com/Lungaowen/doctor-booking  
Published site (after the first successful Pages deployment): https://lungaowen.github.io/doctor-booking/

## Important demo limitations

Doctor profiles, fees, ratings, and availability are illustrative sample data. Appointment requests are handled only in the browser and are **not sent to a clinic or stored**. Do not enter real patient details or medical information. This is not a medical service, does not verify practitioners, and does not provide medical advice. A production deployment needs a secure backend, clinic integrations, verified professional profiles, privacy notices, and appropriate South African POPIA compliance.