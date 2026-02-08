# Kuber Technologies Landing Page

A professional, modern landing page that showcases live project demos from GitHub Pages and featured projects. Built with pure HTML, CSS, and JavaScript for optimal performance and easy deployment on GitHub Pages.

## 🚀 Features

- **Dynamic GitHub Integration**: Automatically fetches and displays all GitHub Pages repositories from the Kuber-Group organization
- **Featured Projects Showcase**: Manually curated project highlights with detailed information
- **Advanced Filtering**: Client-side filtering by project type and technology stack
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Modern Design**: Clean, professional aesthetic with smooth animations
- **SEO Optimized**: Semantic HTML structure for better search engine visibility
- **Zero Dependencies**: Pure vanilla JavaScript, no frameworks required

## 📁 File Structure

```
kuber-technologies/
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── projects.js         # Featured projects data
├── main.js            # JavaScript functionality and GitHub API integration
└── README.md          # This file
```

## 🛠️ Setup & Deployment

### Quick Setup

1. **Clone or download** this repository
2. **Customize** the content in `index.html` (company name, contact info, etc.)
3. **Add featured projects** in `projects.js`
4. **Deploy** to GitHub Pages

### GitHub Pages Deployment

1. Create a repository named `kuber-group.github.io` (or your org name)
2. Push these files to the repository
3. Enable GitHub Pages in repository settings
4. Your site will be live at `https://kuber-group.github.io`

### Testing Locally

Simply open `index.html` in a web browser. For better testing with live reload:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

## ✏️ Customization Guide

### Adding Featured Projects

Edit `projects.js` and add new project objects to the `featuredProjects` array:

```javascript
{
    title: "Your Project Name",
    description: "Brief description of your project and its key features.",
    techStack: ["React", "Node.js", "MongoDB"],
    category: "Web App", // Options: "Web App", "Dashboard", "Website", "Admin System", "Landing Page"
    demoUrl: "https://your-demo-url.com"
}
```

### Updating Colors & Branding

Edit CSS variables in `styles.css`:

```css
:root {
    /* African market-friendly palette - Professional, trustworthy, modern */
    --color-primary: #0F3F7A;          /* Royal Professional Blue */
    --color-accent: #1660B8;           /* Accent Blue for CTAs */
    --color-accent-light: #00A9E0;     /* Bright Accent for links */
    --color-gold: #D89A2A;             /* Warm Gold (use sparingly) */
    --color-text: #1F2933;             /* Dark Charcoal for text */
    --color-bg: #F6F7F9;               /* Soft Gray background */
    
    /* Typography - Modern, accessible fonts */
    --font-display: 'Poppins', sans-serif;  /* Headings (600/700 weight) */
    --font-body: 'Inter', sans-serif;        /* Body text (400 weight) */
}
```

**Color Usage Guidelines:**
- **#0F3F7A** (Primary Blue): Headers, navigation, primary buttons
- **#1660B8** (Accent Blue): CTA buttons, active states
- **#00A9E0** (Bright Accent): Secondary CTAs, links, highlights
- **#D89A2A** (Gold): Use sparingly for icons and attention elements
- **#1F2933** (Dark Charcoal): All body text
- **#F6F7F9** (Soft Gray): Page backgrounds

**Accessibility:**
- All color combinations meet WCAG AA standards
- Primary blue on white provides excellent contrast
- White text on accent blues is fully accessible

### Changing Content

All text content is in `index.html`. Key sections to customize:

- **Hero Section**: Update headline and subtitle
- **About Section**: Modify company description
- **Services**: Edit service offerings
- **Footer**: Update contact information and links

### Adding Filter Categories

To add new filter options:

1. **HTML** (`index.html`): Add new filter button
```html
<button class="filter-btn" data-filter="Your Category" data-type="category">Your Category</button>
```

2. **Projects Data**: Use the new category in your project objects

## 🎨 Design Features

### Typography
- **Display Font**: Poppins (professional, modern headings at 600/700 weight)
- **Body Font**: Inter (clean, highly readable body text at 400 weight)
- **System Fallback**: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto

### Color Palette - African Market Optimized
- **Primary Blue** (#0F3F7A): Professional, trustworthy brand color
- **Accent Blue** (#1660B8): Clear call-to-action color
- **Bright Accent** (#00A9E0): Energy and highlights
- **Warm Gold** (#D89A2A): Trust accent (used sparingly)
- **Dark Charcoal** (#1F2933): Primary text
- **Soft Grays**: Clean backgrounds (#F6F7F9) and borders (#E6E9EE)

All colors are optimized for:
- Trust and professionalism in African markets
- Modern, energetic feel
- Full WCAG AA accessibility compliance

### Animations
- Smooth fade-in effects on scroll
- Hover animations on cards and buttons
- Staggered loading animations

## 🔧 Technical Details

### GitHub API Integration

The site automatically fetches repositories from the GitHub API:

```javascript
fetch("https://api.github.com/orgs/Kuber-Group/repos")
```

**Requirements for auto-detection:**
- Repository must have GitHub Pages enabled (`has_pages: true`)
- Repository name cannot be `kuber-group.github.io` (main org page)

**Demo URL Format**: `https://kuber-group.github.io/[repo-name]`

### Filtering Logic

Projects are filtered client-side using JavaScript:
- No page reloads required
- Instant filtering response
- Multiple filter criteria supported
- Clean URL structure (no query parameters)

### Browser Compatibility

Tested and working in:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🚦 Performance

- **No external dependencies**: All code is self-contained
- **Optimized images**: Use modern formats (WebP with fallbacks)
- **Minimal HTTP requests**: Single CSS and JS file
- **Lazy loading**: Implemented for scroll animations

## 🔒 Security Notes

- GitHub API calls are read-only
- No authentication required for public repos
- External links open with `rel="noopener noreferrer"`
- No form submissions or data collection

## 📊 Analytics Integration

To add Google Analytics or similar:

```html
<!-- Add before closing </head> tag in index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-ID');
</script>
```

## 🐛 Troubleshooting

### GitHub Repos Not Loading

**Issue**: "Unable to load GitHub demos"

**Solutions**:
- Check GitHub organization name in `main.js`
- Verify repositories have GitHub Pages enabled
- Check browser console for API errors
- GitHub API rate limit: 60 requests/hour for unauthenticated requests

### Filters Not Working

**Issue**: Filter buttons don't filter projects

**Solutions**:
- Ensure `projects.js` is loaded before `main.js`
- Check that project data includes `category` and `techStack` fields
- Verify filter button `data-filter` attributes match project data

### Styling Issues

**Issue**: Layout looks broken

**Solutions**:
- Clear browser cache
- Check that `styles.css` is properly linked
- Ensure no CSS syntax errors in custom modifications

## 🔄 Maintenance

### Regular Updates

- Review and update featured projects quarterly
- Check for broken demo links monthly
- Update company information as needed
- Monitor GitHub API changes

### Adding New Technologies

When adding new tech stack options:

1. Add filter button in HTML
2. Use consistent naming in project data
3. Consider adding a corresponding service card if it's a new offering

## 📞 Support

For issues or questions:
- Check this README first
- Review browser console for errors
- Contact: contact@kubertech.com

## 📄 License

Copyright © 2024 Kuber Technologies. All rights reserved.

---

**Built with ❤️ by Kuber Technologies**
