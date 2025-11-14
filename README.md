# Sophia's Sitting Services - Cloned Website

This is a cloned version of the Sophia's Sitting Services website from Squarespace.

## Project Structure

```
cloned-website/
├── index.html          # Main HTML file
├── css/
│   └── styles.css     # All styling
├── js/
│   └── script.js      # Interactive functionality
├── images/
│   ├── hero-image.jpg
│   ├── service-image.png
│   ├── sophia-image.jpeg
│   └── social-header.jpeg
└── README.md
```

## Features

- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Interactive Accordions**: Expandable service and clearance sections
- **Smooth Scrolling**: Navigation links scroll smoothly to sections
- **Contact Form**: Functional contact form with validation
- **Newsletter Signup**: Email subscription form in footer
- **Social Media Links**: Instagram, Facebook, and Twitter icons
- **Fixed Header**: Header stays visible while scrolling

## Sections

1. **Hero Section**: Welcome message and call-to-action
2. **Who We Are**: Company introduction
3. **What We Offer**: Services with accordion menu
4. **Meet Sophia**: Founder's story
5. **Clearances**: Professional certifications
6. **Contact**: Contact form
7. **Social**: Social media links and image
8. **Footer**: Site navigation and newsletter signup

## How to Use

1. Open `index.html` in any modern web browser
2. Navigate using the header menu or scroll through the page
3. Click on accordion items to expand/collapse content
4. Fill out the contact form to test functionality (currently logs to console)
5. Sign up for the newsletter in the footer

## Customization

### Colors
Edit CSS variables in `css/styles.css`:
```css
:root {
    --primary-color: #2d2d2d;
    --secondary-color: #6b6b6b;
    --accent-color: #f0f0f0;
}
```

### Fonts
Currently using:
- **Headings**: Marcellus (Google Fonts)
- **Body**: PT Serif (Google Fonts)

### Images
Replace images in the `images/` folder with your own while keeping the same filenames.

## Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript (ES6+)
- Google Fonts

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes

- The contact form currently logs data to the console. To make it functional, you'll need to add a backend service or email integration.
- The newsletter form also needs backend integration for actual email collection.
- Social media links need to be updated with actual URLs.

## Credits

Original website design: Squarespace
Cloned and recreated with custom HTML/CSS/JS
