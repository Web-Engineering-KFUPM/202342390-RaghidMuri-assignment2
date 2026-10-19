# Technical Documentation

## Project Structure

The project is separated into different files and folders to keep the code organized.

- `index.html` contains the main structure and content of the website.
- `css/styles.css` contains the design, layout, and transition styles.
- `js/script.js` contains the JavaScript features and form validation.
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

Each project also includes a button that allows the user to show or hide the project description.

The contact form contains fields for the user's name, email, and message.

## CSS and Design

The website uses a dark color theme with light text.

Flexbox is used for layout in the navigation and projects section.

The project layout uses a column direction so the projects appear one under another.

The images use a maximum width so they do not overflow on smaller screens.

The project descriptions are hidden by default using CSS and are displayed when the user clicks the corresponding button.

The navigation links also use a transition so the color changes smoothly when the user hovers over them.

## Dynamic Interaction

Assignment 2 adds a dynamic feature to the Projects section.

Each project includes a `Show Description` button.

When the user clicks the button:

- The project description becomes visible.
- The button text changes to `Hide Description`.

When the user clicks the button again:

- The description is hidden.
- The button text changes back to `Show Description`.

This feature uses JavaScript event listeners to respond to user interaction.

## Contact Form Validation

The contact form uses JavaScript to check the user's input when the `Send` button is pressed.

The form checks for:

- Empty name fields
- Empty email fields
- Empty message fields
- Email addresses that do not contain `@`

If one or more fields are empty, the website displays:

`Please fill in all fields.`

If the email address is invalid, the website displays:

`Please enter a valid email address.`

If the form is completed correctly, the website displays:

`Message submitted successfully.`

The form uses `event.preventDefault()` so the page does not reload when the form is submitted.

## User Feedback

The website gives the user feedback based on their actions.

The project buttons change between `Show Description` and `Hide Description` depending on whether the project description is visible.

The contact form also provides error or success messages depending on the user's input.

This makes it clear to the user what happened after interacting with the website.

## Animation and Transitions

The navigation links use a CSS transition for their hover effect.

When the user moves the mouse over a navigation link, the text color changes smoothly instead of changing instantly.

The transition lasts `0.7s`.

This adds a simple animation without making the website distracting.

## Responsive Design

I tested the website by resizing the browser window.

The layout adjusts to smaller screen sizes, and the project images shrink when needed because they use `max-width: 100%`.

Flexbox is used in the navigation and projects section to help organize the layout.

## JavaScript

The website includes multiple JavaScript features.

### Time-Based Greeting

The website displays a greeting depending on the user's local time.

JavaScript checks the current hour and displays:

- Good morning
- Good afternoon
- Good evening

### Project Descriptions

JavaScript selects all buttons with the `details-button` class and adds a click event to each one.

When a button is clicked, JavaScript shows or hides the project description and changes the text of the button.

### Form Validation

JavaScript checks the values entered into the contact form when the user presses `Send`.

It prevents the normal form submission, checks the input, and displays the correct error or success message.

## Testing

I tested the website by:

- Resizing the browser window
- Checking the navigation links
- Checking that both project images load
- Testing the greeting message
- Testing both `Show Description` and `Hide Description` buttons
- Checking that each project button only affects its own project
- Submitting the contact form with empty fields
- Submitting the contact form with an invalid email address
- Submitting the contact form with valid input
- Checking that the correct feedback messages appear
- Checking the navigation link hover transition
- Checking the browser console for errors