# Technical Documentation

## Project Structure

The project is separated into different files and folders to keep the code organized.

- `index.html` contains the main structure and content of the website.
- `css/styles.css` contains the design and layout styles.
- `js/script.js` contains the JavaScript feature.
- `assets/images/` contains the project images.
- `docs/` contains the project documentation.
- `.gitignore` tells Git which local files or folders should not be tracked.

## HTML Structure

The website is divided into three main sections:

- About Me
- Projects
- Contact

I also used a header with navigation links and a footer.

Each project is placed inside an `article` element because each project is its own separate piece of content.

## CSS and Design

The website uses a dark color theme with light text.

Flexbox is used for layout in the navigation and projects section.

The project layout uses a column direction so the projects appear one under another.

The images use a maximum width so they do not overflow on smaller screens.

## Responsive Design

I tested the website by resizing the browser window.

The layout adjusts to smaller screen sizes, and the project images shrink when needed because they use `max-width: 100%`.

## JavaScript

The website includes a greeting message that changes depending on the time of day.

JavaScript checks the current hour and displays:

- Good morning
- Good afternoon
- Good evening

This gives the website a simple interactive feature.

## Testing

I tested the website by:

- Resizing the browser window
- Checking the navigation links
- Checking that both project images load
- Testing the greeting message
- Checking the contact form layout