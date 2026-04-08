```markdown
# Kuber Group · GitHub Pages Preview Hub

A clean, design‑language‑consistent showcase website that displays your organization’s GitHub Pages projects on a custom domain (`preview.kuber.co.zw`).  
Projects are loaded from a separate `projects.json` file, making it easy to add, remove, or update your showcase without touching the HTML.

![Preview Hub Screenshot](https://via.placeholder.com/800x400?text=Kuber+Preview+Hub)

---

## Table of Contents

- [Features](#features)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [JSON Configuration](#json-configuration)
- [Custom Domain Setup](#custom-domain-setup)
- [Color Palette](#color-palette)
- [Customisation](#customisation)
- [Browser Support](#browser-support)
- [License](#license)
- [Support](#support)

---

## ✨ Features

- **JSON‑driven project list** – Edit `projects.json` to manage your showcase.
- **Live preview links** – Automatically generates `https://preview.kuber.co.zw/[custom-path]` for each project.
- **Kuber design language** – Uses your brand colors: Deep Navy (`#1A2A4F`), Terracotta (`#C46B3F`), Olive (`#6B7B3F`), Cream (`#F5F0E8`).
- **Responsive card grid** – Clean, modern layout that works on desktop and mobile.
- **GitHub integration** – Each card links to the repository and its live preview.
- **Easy refresh** – One‑click reload of `projects.json` data.
- **No build step** – Pure HTML, CSS, and JavaScript.
- **LocalStorage fallback** – (Optional) Can be extended to cache projects locally.

---

## 🚀 Quick Start

### 1. Create the files

Place these two files in the same directory on your web server (or in a GitHub Pages repository):

```
/
├── index.html          # the preview hub page
└── projects.json       # your project definitions
```

### 2. Copy the HTML

Copy the complete `index.html` code from this repository into your `index.html` file.

### 3. Create `projects.json`

Create a `projects.json` file with your projects (see [JSON Configuration](#json-configuration) below).

### 4. Deploy to GitHub Pages

Push both files to a repository (e.g., `kuber-group/preview-hub`) and enable GitHub Pages on the `main` branch.

### 5. (Optional) Configure custom domain

Set up `preview.kuber.co.zw` as your custom domain (see [Custom Domain Setup](#custom-domain-setup)).

---

## 📁 Project Structure

```
preview-hub/
├── index.html          # Main preview page (fetch logic + UI)
├── projects.json       # Your project data (edit this to update the showcase)
├── CNAME               # (optional) Custom domain file for GitHub Pages
└── README.md           # This documentation
```

---

## 📋 JSON Configuration

### Basic Format

Create a `projects.json` file in the same directory as `index.html`:

```json
{
  "projects": [
    {
      "repoUrl": "https://github.com/kuber-group/greenforge",
      "customPath": "/greenforge",
      "displayName": "Greenforge",
      "description": "Sustainable energy & resource planning toolkit",
      "tech": ["TypeScript", "React", "Vite"],
      "icon": "fas fa-leaf"
    },
    {
      "repoUrl": "https://github.com/kuber-group/MediaInator",
      "customPath": "/mediainator",
      "displayName": "MediaInator",
      "description": "Media processing & transformation dashboard",
      "tech": ["TypeScript", "Node.js", "FFmpeg"],
      "icon": "fas fa-photo-video"
    },
    {
      "repoUrl": "https://github.com/kuber-group/branding-hub",
      "customPath": "/branding-hub",
      "displayName": "Branding Hub",
      "description": "Centralized brand asset manager with style guide generator",
      "tech": ["TypeScript", "Next.js", "Tailwind"],
      "icon": "fas fa-palette"
    }
  ]
}
```

### Alternative Format (Array Only)

You can also use a simple array format:

```json
[
  {
    "repoUrl": "https://github.com/kuber-group/greenforge",
    "customPath": "/greenforge",
    "displayName": "Greenforge",
    "description": "Sustainable energy toolkit",
    "tech": ["TypeScript", "React"],
    "icon": "fas fa-leaf"
  }
]
```

### Field Reference

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| `repoUrl` | string | ✅ | – | Full GitHub repository URL (e.g., `https://github.com/kuber-group/repo`) |
| `customPath` | string | ❌ | auto‑generated from repo name | Custom preview path (e.g., `/greenforge`). Will be appended to `preview.kuber.co.zw` |
| `displayName` | string | ✅ | – | Name shown on the project card |
| `description` | string | ✅ | – | Short project description (1-2 sentences) |
| `tech` | array | ❌ | `["HTML/CSS", "JavaScript", "GitHub Pages"]` | Array of technology tags displayed as badges |
| `icon` | string | ❌ | `"fas fa-code"` | Font Awesome 6 icon class (see [Icon Reference](#icon-reference)) |
| `githubOwner` | string | ❌ | auto‑extracted from `repoUrl` | GitHub organization or username (rarely needed) |

### Icon Reference

Any [Font Awesome 6 Free](https://fontawesome.com/v6/search?free=true) icon works. Popular choices:

| Icon Class | Use Case |
|------------|----------|
| `fas fa-code` | General code/project |
| `fas fa-leaf` | Eco/sustainability projects |
| `fas fa-palette` | Design/branding projects |
| `fas fa-chart-line` | Analytics/finance projects |
| `fas fa-cash-register` | POS/commerce projects |
| `fas fa-photo-video` | Media processing projects |
| `fas fa-globe` | Web/landing pages |
| `fas fa-rocket` | Launch/feature projects |
| `fas fa-database` | Data/backend projects |
| `fas fa-cloud-sun` | Weather/environment apps |

---

## 🌐 Custom Domain Setup

To serve your preview hub at `preview.kuber.co.zw`:

### Step 1: GitHub Pages Settings

1. Go to your repository → **Settings** → **Pages**
2. Under **Custom domain**, enter `preview.kuber.co.zw`
3. Click **Save**

### Step 2: Add CNAME File

Create a file named `CNAME` (no extension) in your repository root with:

```
preview.kuber.co.zw
```

### Step 3: DNS Configuration

Add the following DNS records with your domain provider:

| Type | Name | Value |
|------|------|-------|
| CNAME | `preview` | `kuber-group.github.io` |

Or if using a subdomain directly:

| Type | Name | Value |
|------|------|-------|
| A | `preview.kuber.co.zw` | `185.199.108.153` |
| A | `preview.kuber.co.zw` | `185.199.109.153` |
| A | `preview.kuber.co.zw` | `185.199.110.153` |
| A | `preview.kuber.co.zw` | `185.199.111.153` |

> **Note**: DNS changes may take up to 48 hours to propagate, but typically 10-30 minutes.

### Step 4: Verify

Visit `https://preview.kuber.co.zw` – you should see your preview hub.

---

## 🎨 Color Palette

The design matches the official Kuber brand language:

| Role | Hex | RGB | Usage |
|------|-----|-----|-------|
| Deep Navy | `#1A2A4F` | `26, 42, 79` | Headings, logo, primary text, card titles |
| Terracotta | `#C46B3F` | `196, 107, 63` | Accents, borders, hover states, icons |
| Olive Green | `#6B7B3F` | `107, 123, 63` | Secondary text, badges, descriptions |
| Warm Cream | `#F5F0E8` | `245, 240, 232` | Page background |
| Sand | `#D4C4A8` | `212, 196, 168` | Card borders, dividers |
| White | `#FFFFFF` | `255, 255, 255` | Card backgrounds |
| Warm Gray | `#4A4A4A` | `74, 74, 74` | Body text, navigation |

---

## 🔧 Customisation

### Changing the Preview Domain

Edit the `PREVIEW_DOMAIN` constant in `index.html` (around line 250):

```javascript
const PREVIEW_DOMAIN = 'preview.kuber.co.zw';
```

### Modifying the JSON File Path

If your `projects.json` is in a different location, update the fetch path:

```javascript
const PROJECTS_JSON_PATH = 'projects.json';  // change to 'data/projects.json' etc.
```

### Adding a Refresh Button

The page already includes a refresh button in the top navigation. Clicking it reloads `projects.json` without refreshing the page.

### Custom Styling

All CSS variables and colors are defined inline. To override:

1. Locate the `<style>` section in `index.html`
2. Modify the color hex values or spacing as needed
3. The design uses CSS Grid for the card layout – adjust `grid-template-columns` for different card widths

### Adding Authentication (Optional)

For private repositories, you would need to:

1. Set up a backend proxy to add GitHub tokens
2. Use GitHub OAuth for authenticated API requests

This is beyond the scope of a static preview hub.

---

## 🌍 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |
| Opera | 76+ |

The page uses modern CSS features (CSS Grid, `backdrop-filter`, `aspect-ratio`) but gracefully degrades on older browsers.

---

## 📄 License

MIT License © 2025 Kuber Group

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---

## 🤝 Contributing

This is an internal tool for Kuber Group. For suggestions, improvements, or bug reports:

1. Contact the internal development team
2. Submit an issue in the internal repository
3. Propose changes via pull request

External contributions are not currently accepted.

---

## 📞 Support

| Resource | Link |
|----------|------|
| **Main Website** | [kuber.co.zw](https://kuber.co.zw) |
| **GitHub Organization** | [github.com/kuber-group](https://github.com/kuber-group) |
| **Email Support** | `hello@kuber.co.zw` |
| **Documentation** | This README file |

---

## 📝 Changelog

### v1.0.0 (2025-04-08)

- Initial release
- JSON-driven project loading
- Responsive card grid with Kuber brand colors
- Automatic preview URL generation
- Custom domain support (`preview.kuber.co.zw`)
- Font Awesome 6 integration

---

## ❓ FAQ

**Q: Can I use this without a custom domain?**  
A: Yes! The preview hub works on any GitHub Pages URL (e.g., `username.github.io/preview-hub`). Just update the `PREVIEW_DOMAIN` constant to match your URL.

**Q: How do I add a new project?**  
A: Simply add a new object to the `projects` array in `projects.json` and refresh the page.

**Q: What if my project isn't on GitHub Pages yet?**  
A: The preview link will still be generated, but it will show a 404 until you enable GitHub Pages for that repository.

**Q: Can I host `projects.json` in a different location?**  
A: Yes – update the `PROJECTS_JSON_PATH` variable in `index.html` to point to the absolute or relative path.

**Q: Does this work with private repositories?**  
A: The preview links will still work, but the GitHub API fetch for automatic data would require authentication. The current version works with public repos only.

**Q: How often does the page check for JSON updates?**  
A: It only fetches on page load or when you click the refresh button. It does not auto-poll.

**Q: Can I add screenshots or images to the cards?**  
A: Yes – you would need to extend the `projects.json` schema and modify the HTML to display images. Contact the development team for assistance.

---

*Built with HTML, CSS, and JavaScript – no build steps required. Maintained by Kuber Group.*
```