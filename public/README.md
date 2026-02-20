# Public Assets

This folder contains static assets that are served directly by Next.js.

## Structure

```
public/
├── logo.svg          # Main logo (place your logo here)
├── logo.png          # PNG version (alternative)
├── favicon.ico       # Browser tab icon
└── images/           # Other images
    └── .gitkeep
```

## How to Add Your Logo

1. **Place your logo file here** as `logo.svg` or `logo.png`
2. The navbar will automatically display it
3. Recommended: SVG format for best quality at any size

## Logo Specifications

- **Format**: SVG (preferred) or PNG
- **Size**: 200x200px minimum for square logos
- **Background**: Transparent preferred
- **File name**: `logo.svg` or `logo.png`

## Favicon

- Create a 32x32px or 16x16px icon
- Save as `favicon.ico`
- Place in this folder
- Next.js will automatically use it
