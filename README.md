# Student Research Council Website

A modern, responsive static website for the Student Research Council (SRC), Shoolini University.

This project is built with plain HTML, CSS, and JavaScript, and is designed to showcase SRC identity, activities, roadmap, mentors, events, resources, annual reporting, and contact flow.

## Overview

The site includes:

- A branded hero section with quick SRC highlights
- Research journey and roadmap sections
- Event/activity presentation blocks
- Mentor and testimonial previews
- Membership and call-to-action sections
- Animated counters and dynamic UI rendering from JavaScript data arrays

## Tech Stack

- HTML5
- CSS3 (custom properties, responsive layouts, animations)
- Vanilla JavaScript (DOM rendering and interaction logic)
- Google Fonts (loaded via CDN)

## Project Structure

```text
Student-Research-Council/
├─ index.html      # Main page markup
├─ styles.css      # Styling, layout, responsive behavior, animations
├─ script.js       # Data models and dynamic rendering logic
└─ README.md       # Project documentation
```

## Run Locally

Because this is a static site, no build step is required.

1. Clone the repository.
2. Open the project folder in VS Code.
3. Open `index.html` directly in a browser, or run with VS Code Live Server for auto-refresh.

## Customization Guide

Most site content is data-driven in `script.js`.

- Update council metrics in the `stats` array.
- Add/edit mentor entries in `mentors` and `mentorPreview`.
- Modify roadmap flow in the `roadmap` array.
- Update activity and event content in `activities` and `featuredEvents`.
- Edit testimonials in the `quotes` array.

Brand and visual theme can be adjusted from CSS variables in `styles.css` under `:root`.

## Accessibility and Responsiveness

- Uses semantic sections and readable heading structure.
- Includes viewport scaling for mobile devices.
- Uses clear visual hierarchy, spacing, and touch-friendly components.

## Deployment

This project can be deployed to any static hosting platform, including:

- GitHub Pages
- Netlify
- Vercel (static)
- Firebase Hosting

## Contributing

1. Create a feature branch.
2. Make your changes.
3. Commit with a clear message.
4. Open a pull request.

## License

No license file is currently included in this repository. Add a `LICENSE` file if you want to define usage permissions.