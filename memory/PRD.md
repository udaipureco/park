# UWS Digital 2.0 — PRD

## Project
Udaipur Wildlife Sanctuary — Static website (HTML/CSS/JS)

## Original Problem Statement
Fix and optimize the entire website UI to be fully responsive and professional across all devices (mobile, tablet, desktop). Requirements included layout fixes, mobile-first responsive design, hamburger menu, proper card grids, responsive images, 1200px container, responsive footer, clean typography, BEM CSS structure, and performance optimizations.

## User Preferences
- Max container width: 1200px
- Colors: Keep existing + modernize slightly
- Font: Modern professional (Plus Jakarta Sans + DM Serif Display)
- CSS approach: BEM naming convention
- Target: Best experience on desktop, mobile, tablet

## Architecture
- **Frontend**: Static HTML/CSS/JS served via `serve` package on port 3000
- **Backend**: Minimal FastAPI health endpoint on port 8001
- **No database** required (static content)

## Tech Stack
- HTML5, CSS3 (custom properties, grid, flexbox)
- Vanilla JavaScript (event delegation)
- Google Fonts (Plus Jakarta Sans, DM Serif Display)

## What's Been Implemented (April 12, 2026)

### CSS Complete Rewrite
- Replaced 2953-line unstructured CSS with clean, organized BEM-structured stylesheet
- CSS custom properties for colors, spacing, typography, shadows, transitions
- Mobile-first responsive design with breakpoints: 380px (small), 481px (tablet), 1025px (desktop), 1400px (large)
- Global `box-sizing: border-box`
- No horizontal overflow
- Proper container system with 1200px max-width

### HTML Improvements
- Added `data-testid` attributes on all interactive elements
- Fixed heading.html component image paths (../images → images)
- Removed duplicate scripts and menu overlays
- Clean HTML entities for special characters
- Proper alt attributes on all images

### JavaScript Fixes
- Replaced DOMContentLoaded-based handlers with event delegation for reliability
- Removed broken legacy booking system (referencing non-existent element IDs) that caused NaN
- Fixed menu overlay toggle (open/close)
- Fixed FAQ accordion toggle
- All popups (entry, boating, EV) working

### Responsive Features
- **Mobile**: Stacked sections, 2-column grids, hamburger menu
- **Tablet**: Improved spacing, 3-column facilities grid
- **Desktop**: Side-by-side booking sections, 3-column attractions, 4-column gallery, split location layout

### Sub-page CSS Updates
- Boating booking page: responsive with proper container widths
- Contact page: responsive glass-morphism card layout

## Passed Tests
- All 100% frontend, responsive design, interactive elements, popup functionality, menu navigation

## Backlog
- P1: Update remaining sub-page CSS files (entry/, ev/, gallery/, complaint/, cafeteria/, parking/, bicycle/, ecohut/) for consistent responsive design
- P2: Add scroll animations (IntersectionObserver) for card entrance effects
- P2: Add PWA manifest and service worker for offline support
- P3: Dark mode toggle
- P3: Localization (Hindi/English toggle functionality)
