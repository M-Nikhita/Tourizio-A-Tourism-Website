# Tourizio — A Tourism Website

A responsive tourism discovery and booking platform built with Angular. Browse countries and destinations, explore individual places with hotel options, build a booking, and get a printable confirmation — all running as a single-page application.

> Originally built during the **Infosys Springboard Virtual Internship 6.0** (August–October 2025).

## Features

- **Browse by country and destination** — explore curated places organized by country and state
- **Place details view** — see descriptions, pricing, and hotel options for each destination
- **Multi-step booking flow** — select country → state → place → hotel, with live total price calculation based on number of travelers
- **Booking confirmation page** — review submitted booking details, with a print/save-as-PDF option
- **Login & signup pages** — client-side form flows with validation (see [Current Scope](#current-scope) for what this does and doesn't include)
- **Fully responsive UI** — built with Bootstrap 5

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Angular 20 (standalone components) |
| Language | TypeScript |
| Styling | Bootstrap 5, custom CSS |
| Forms | Angular Reactive Forms |
| Routing | Angular Router |
| Testing | Karma + Jasmine (scaffolded by Angular CLI) |

## Project Structure

```
tourizio/
├── src/
│   ├── app/
│   │   ├── home/                    # Landing page, featured destinations
│   │   ├── destinations/            # Browse all countries
│   │   ├── country/                 # Places within a selected country
│   │   ├── placedetails/            # Single place — description, hotels
│   │   ├── booktour/                # Booking form (country → state → place → hotel)
│   │   ├── booking-confirmation/    # Review + print booking confirmation
│   │   ├── login/                   # Login form (client-side only)
│   │   ├── signup/                  # Signup form (client-side only)
│   │   ├── about/                   # About page
│   │   ├── contact/                 # Contact page
│   │   ├── navbar/                  # Shared navigation
│   │   ├── footer/                  # Shared footer
│   │   ├── app.routes.ts            # Route definitions
│   │   └── app.config.ts            # App-level providers/config
│   └── data/
│       └── destinations-data.ts     # Static dataset: countries → places → hotels
├── public/                          # Static assets
├── angular.json
├── package.json
└── tsconfig*.json
```

## Architecture

Tourizio is a **fully client-side single-page application** — there is no backend server or database. All destination, place, and hotel data lives in a single static TypeScript file (`src/data/destinations-data.ts`), imported directly into the relevant components.

```
User → Angular Router → Standalone Components → static data import
                                                        │
                                                        ▼
                                          destinations-data.ts (in-memory)
```

Booking details are passed between the booking form and the confirmation page via Angular Router **query parameters** — nothing is persisted to a server or database. Refreshing or revisiting the confirmation page directly (without coming from the form) will show no data, since it's read live from the URL.

## Prerequisites

- **Node.js** 18.x or later (Angular 20 requires Node 18.19+ / 20.11+ / 22+)
- **npm** (comes with Node.js)
- Angular CLI (optional globally, or use via `npx`)

## Setup & Installation

### 1. Clone the repository

```bash
git clone https://github.com/M-Nikhita/Tourizio-A-Tourism-Website.git
cd Tourizio-A-Tourism-Website
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm start
```

or directly via Angular CLI:

```bash
ng serve
```

The app will be available at **`http://localhost:4200`**, and will automatically reload on source file changes.

### 4. Build for production

```bash
ng build
```

Build artifacts are output to the `dist/` directory, optimized for production by default.

### 5. Run unit tests

```bash
ng test
```

Runs the unit test suite via Karma in a Chrome browser instance.

## Usage Walkthrough

1. Land on the **Home** page — see featured countries.
2. Click **Destinations** to browse all available countries.
3. Select a country → see its places, grouped by state.
4. Click into a **place** to see details and available hotels.
5. Click **Book Tour**, fill in traveler details, dates, and select a hotel — the total price updates live based on hotel rate × number of travelers.
6. Submit to reach the **Booking Confirmation** page, where you can print or save the confirmation as a PDF via the browser's print dialog.

## Current Scope

This project was built to demonstrate frontend architecture, routing, and reactive forms in Angular. A few things to know if you're evaluating or extending it:

- **No backend** — all data (countries, places, hotels) is static and hardcoded in `destinations-data.ts`; nothing is fetched from an API
- **Login/Signup are UI-only** — forms validate client-side, but there's no real authentication, no user accounts, and no session persistence. Submitting either form does not check credentials against any stored data
- **Bookings are not persisted** — booking details pass through the URL as query parameters and are not saved anywhere; closing the confirmation page loses the booking
- **No payment integration** — pricing is calculated and displayed, but there's no checkout or payment gateway

These are intentional simplifications for the scope of the internship project, not bugs.

## Roadmap

- Backend integration (e.g. Node/Express or Spring Boot) with a real database for destinations, hotels, and bookings
- Proper authentication with session/token-based login
- Persisted booking history per user
- Payment gateway integration
- Server-rendered PDF generation for booking confirmations (currently uses the browser's native print-to-PDF)

## License

This project is licensed under the [MIT License](LICENSE).