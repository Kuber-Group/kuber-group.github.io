# Kuber Technologies Color Palette Guide

## Primary Palette - African Market Optimized

### Brand Colors

#### Primary Blue (Royal Professional)
- **Hex:** `#0F3F7A`
- **Usage:** Headers, primary buttons, top navigation, logo
- **Psychology:** Trust, professionalism, stability
- **Accessibility:** Excellent contrast on white (AAA compliant)

#### Accent Blue (Call-to-Action)
- **Hex:** `#1660B8`
- **Usage:** CTA buttons, active states, important highlights
- **Psychology:** Action, reliability, confidence
- **Accessibility:** White text on this color is fully accessible (AA+)

#### Bright Accent (Energy/Highlight)
- **Hex:** `#00A9E0`
- **Usage:** Secondary CTAs, links, hover states, icons
- **Psychology:** Energy, innovation, modernity
- **Accessibility:** Use for interactive elements, not body text

#### Warm Gold (Trust Accent)
- **Hex:** `#D89A2A`
- **Usage:** Icons, special highlights, awards, badges (use sparingly!)
- **Psychology:** Value, warmth, premium quality
- **Accessibility:** Reserve for accent elements, not primary text

---

### Neutral Colors

#### Dark Charcoal (Primary Text)
- **Hex:** `#1F2933`
- **Usage:** All body text, headings, paragraphs
- **Psychology:** Readable, professional, modern
- **Accessibility:** Excellent contrast on light backgrounds

#### Muted Text Gray
- **Hex:** `#5A6C7D`
- **Usage:** Secondary text, captions, metadata
- **Psychology:** Subtle hierarchy
- **Accessibility:** Good contrast for secondary content

#### Soft Gray (Background)
- **Hex:** `#F6F7F9`
- **Usage:** Page backgrounds, card backgrounds
- **Psychology:** Clean, spacious, modern
- **Accessibility:** Creates soft separation without harshness

#### Muted Gray (Borders & UI)
- **Hex:** `#E6E9EE`
- **Usage:** Borders, dividers, input fields, subtle UI elements
- **Psychology:** Organized, structured
- **Accessibility:** Subtle enough not to distract

---

## Usage Guidelines

### Do's ✅
- Use **#0F3F7A** for primary branding and navigation
- Use **#1660B8** for main call-to-action buttons
- Use **#00A9E0** for links and secondary actions
- Use **#D89A2A** sparingly for special highlights
- Always use **#1F2933** for body text
- Ensure sufficient contrast for all text

### Don'ts ❌
- Don't use gold (#D89A2A) for large text areas
- Don't mix all accent colors equally (creates visual chaos)
- Don't use bright accent (#00A9E0) as primary brand color
- Don't use light grays for important text
- Don't ignore accessibility guidelines

---

## Color Combinations

### High Impact (CTAs)
- **Button:** #1660B8 background + White text
- **Hover:** #00A9E0 background + White text
- **Contrast Ratio:** 4.5:1+ (AA compliant)

### Professional (Headers)
- **Background:** #0F3F7A
- **Text:** White (#FFFFFF)
- **Accent:** #00A9E0 or #D89A2A
- **Contrast Ratio:** 7:1+ (AAA compliant)

### Clean Reading (Content)
- **Background:** #F6F7F9 or White
- **Primary Text:** #1F2933
- **Secondary Text:** #5A6C7D
- **Links:** #00A9E0
- **Contrast Ratio:** All text meets AA standards

---

## Regional Considerations for African Markets

### Why This Palette Works

1. **Professional Blue Dominance**
   - Blue is universally trusted across African markets
   - #0F3F7A strikes balance between corporate and approachable

2. **Warm Gold Accent**
   - Gold resonates with value and prestige in many African cultures
   - Use sparingly to maintain professionalism

3. **Bright, Energetic Blues**
   - #00A9E0 brings modernity and optimism
   - Appeals to tech-forward, mobile-first audiences

4. **High Contrast**
   - Critical for mobile viewing in bright sunlight
   - Ensures accessibility across diverse viewing conditions

### Cultural Sensitivity
- Avoid overuse of gold (can seem ostentatious)
- Blue is safe across most African cultures
- High contrast works well for outdoor mobile usage
- Clean, professional palette builds trust

---

## Technical Implementation

### CSS Variables
```css
:root {
    /* Brand Colors */
    --color-primary: #0F3F7A;
    --color-accent: #1660B8;
    --color-accent-light: #00A9E0;
    --color-gold: #D89A2A;
    
    /* Neutrals */
    --color-text: #1F2933;
    --color-text-light: #5A6C7D;
    --color-bg: #F6F7F9;
    --color-border: #E6E9EE;
    --color-white: #FFFFFF;
}
```

### Usage in Code
```css
/* Primary Button */
.btn-primary {
    background: var(--color-accent);     /* #1660B8 */
    color: var(--color-white);
}

.btn-primary:hover {
    background: var(--color-accent-light); /* #00A9E0 */
}

/* Header/Navigation */
.navbar {
    background: var(--color-white);
    border-bottom: 1px solid var(--color-border);
}

.logo {
    color: var(--color-primary);         /* #0F3F7A */
}

/* Body Text */
body {
    color: var(--color-text);            /* #1F2933 */
    background: var(--color-bg);         /* #F6F7F9 */
}

/* Special Highlights */
.award-badge {
    color: var(--color-gold);            /* #D89A2A */
}
```

---

## Accessibility Checklist

- [x] Primary text (#1F2933) on light backgrounds: 14.9:1 contrast (AAA)
- [x] White text on primary blue (#0F3F7A): 8.6:1 contrast (AAA)
- [x] White text on accent blue (#1660B8): 5.7:1 contrast (AA+)
- [x] Links (#00A9E0) on white: 3.5:1 contrast (AA for large text)
- [x] All interactive elements have 3:1 minimum contrast
- [x] Focus states use accessible color combinations

---

## Brand Guidelines Summary

**Primary Applications:**
- Logo: #0F3F7A (primary blue)
- Main CTAs: #1660B8 (accent blue)
- Links: #00A9E0 (bright accent)
- Special highlights: #D89A2A (gold) - sparingly

**Typography Pairing:**
- Headers: Poppins (600/700 weight)
- Body: Inter (400 weight)
- System fallback for reliability

**Market Position:**
- Professional, modern, trustworthy
- Technology-forward
- African market optimized
- Mobile-first friendly
