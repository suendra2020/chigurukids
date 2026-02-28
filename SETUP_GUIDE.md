# Chiguru KIDS Preschool Website - Local Setup Guide

## 📥 Installation & Setup

### Prerequisites
- **Node.js**: Version 18 or higher
- **npm** or **pnpm**: Package manager (pnpm recommended)
- **Git**: For version control (optional)

### Step 1: Extract the ZIP File
```bash
unzip chiguru-kids-preschool-final.zip
cd chiguru-kids-preschool
```

### Step 2: Install Dependencies
```bash
# Using pnpm (recommended)
pnpm install

# Or using npm
npm install
```

### Step 3: Start Development Server
```bash
# Using pnpm
pnpm dev

# Or using npm
npm run dev
```

The website will be available at: **http://localhost:3000**

## 🚀 Building for Production

```bash
# Using pnpm
pnpm build

# Or using npm
npm run build
```

The production-ready files will be in the `dist/` folder.

## 📁 Project Structure

```
chiguru-kids-preschool/
├── client/
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── components/      # Header, Footer components
│   │   ├── pages/          # All page components
│   │   ├── contexts/       # React contexts
│   │   ├── App.tsx         # Main app with routing
│   │   ├── main.tsx        # React entry point
│   │   └── index.css       # Global styles & animations
│   └── index.html          # HTML template
├── server/                  # Express server (production)
├── package.json            # Dependencies
├── README.md               # Full documentation
└── SETUP_GUIDE.md         # This file
```

## ✨ Features & Animations

### Animated Background Elements
- Floating emojis with different animation patterns
- Rotating, swaying, and bouncing icons
- Shimmer and pulse-glow effects
- Smooth fade-in transitions

### Page Animations
- **Hero Carousel**: Auto-rotating with manual controls
- **Fade-in**: Elements fade in on page load
- **Slide-up**: Sections slide up from bottom
- **Hover Effects**: Cards scale and enhance on hover
- **Floating Icons**: Icons float and bounce throughout

### Animation Classes Available
```css
.animate-float           /* Gentle up-down floating */
.animate-sway           /* Side-to-side swaying */
.animate-bounce-up      /* Bouncing upward motion */
.animate-rotate-slow    /* Slow 360° rotation */
.animate-float-diagonal /* Diagonal floating pattern */
.animate-shimmer        /* Opacity shimmer effect */
.animate-pulse-glow     /* Pulsing glow effect */
```

## 🎨 Customization

### Change School Information
Edit these files to update school details:

**Footer & Contact Info:**
- File: `client/src/components/Footer.tsx`
- Update: School name, phone, email, address

**Contact Page:**
- File: `client/src/pages/Contact.tsx`
- Update: Address, phone, email, office hours

**About Page:**
- File: `client/src/pages/About.tsx`
- Update: Mission, vision, team information

### Update Colors
Edit `client/src/index.css`:
```css
:root {
  --primary: #2E7D32;        /* Main green */
  --secondary: #66BB6A;      /* Light green */
  --accent: #A5D6A7;         /* Accent green */
  /* Update other colors as needed */
}
```

### Replace Images
Update image URLs in component files:
- **Home Page**: `client/src/pages/Home.tsx` (lines 5-9)
- **About Page**: `client/src/pages/About.tsx`
- **Programs Page**: `client/src/pages/Programs.tsx`
- **Activities Page**: `client/src/pages/Activities.tsx`
- **Gallery Page**: `client/src/pages/Gallery.tsx`

### Update Google Maps Location
Edit `client/src/pages/Contact.tsx` (line 303):
```jsx
src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
```

Get your embed code from [Google Maps](https://maps.google.com):
1. Find your location
2. Click "Share"
3. Select "Embed a map"
4. Copy the embed code

## 📧 EmailJS Integration (Optional)

To enable email notifications for form submissions:

### Step 1: Sign Up at EmailJS
Visit [emailjs.com](https://www.emailjs.com) and create a free account

### Step 2: Create Email Service
1. Go to "Email Services"
2. Add a new service (Gmail, Outlook, etc.)
3. Copy your **Service ID**

### Step 3: Create Email Template
1. Go to "Email Templates"
2. Create a new template
3. Copy your **Template ID**

### Step 4: Get Public Key
1. Go to "Account"
2. Copy your **Public Key**

### Step 5: Update Contact Form
Edit `client/src/pages/Contact.tsx`:

```bash
# Install EmailJS package
pnpm add @emailjs/browser
```

Update the form submission:
```typescript
import emailjs from '@emailjs/browser';

// Initialize (add at top of component)
emailjs.init('YOUR_PUBLIC_KEY');

// In handleSubmit function:
await emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  formData,
  'YOUR_PUBLIC_KEY'
);
```

## 🔧 Available Commands

```bash
# Development server
pnpm dev              # Start dev server at localhost:3000

# Production build
pnpm build            # Build for production

# Preview production build
pnpm preview          # Preview built site

# Type checking
pnpm check            # Check TypeScript errors

# Format code
pnpm format           # Format with Prettier
```

## 📱 Testing Responsiveness

The website is fully responsive:
- **Mobile**: 320px and up
- **Tablet**: 768px and up
- **Desktop**: 1024px and up

Test using browser DevTools:
1. Open DevTools (F12)
2. Click Device Toggle (Ctrl+Shift+M)
3. Select different devices

## 🌐 Deployment Options

### Option 1: Manus Platform (Recommended)
- Already configured
- Click "Publish" in Manus UI
- Custom domain support included

### Option 2: Vercel
```bash
npm i -g vercel
vercel
```

### Option 3: Netlify
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

### Option 4: GitHub Pages
```bash
# Update vite.config.ts with your repo name
pnpm build
# Push dist/ to gh-pages branch
```

## 🐛 Troubleshooting

### Dev server won't start
```bash
# Clear cache and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm dev
```

### Images not loading
- Check image URLs are correct
- Ensure URLs are accessible
- Use absolute URLs for external images

### Animations not showing
- Clear browser cache (Ctrl+Shift+Delete)
- Check browser console for errors
- Verify CSS is loaded properly

### Build errors
```bash
# Check TypeScript errors
pnpm check

# Clear build cache
rm -rf dist
pnpm build
```

## 📚 Additional Resources

- **React Documentation**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com
- **Vite**: https://vitejs.dev
- **Wouter Router**: https://github.com/molefrog/wouter

## 🤝 Support

For issues or questions:
- Check the README.md file
- Review code comments in components
- Check browser console for errors

## 📝 License

This project is created for Chiguru KIDS Preschool. All rights reserved.

---

**Happy coding! 🎉**
