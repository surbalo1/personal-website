# Rafael Gonzalez - Personal Website

A modern, problem-driven personal engineering website built with Next.js 14.

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to view the site.

## Deployment

### Option 1: Vercel (Recommended - Free)

1. **Create a Vercel account** at [vercel.com](https://vercel.com)

2. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

3. **Deploy**:
   ```bash
   cd /Users/surbalo1/Downloads/website
   vercel
   ```

4. **Follow the prompts**:
   - Link to your Vercel account
   - Choose project name (e.g., `rafael-gonzalez`)
   - Accept default settings

5. **Get your public URL**: `https://rafael-gonzalez.vercel.app` (or similar)

### Option 2: GitHub Pages (Free, Static)

1. **Create a GitHub repository** for your website

2. **Push the code**:
   ```bash
   git remote add origin https://github.com/surbalo1/website.git
   git branch -M main
   git push -u origin main
   ```

3. **Update `next.config.ts`** for static export:
   ```ts
   const nextConfig = {
     output: 'export',
     basePath: '/website', // your repo name
   };
   export default nextConfig;
   ```

4. **Build and deploy**:
   ```bash
   npm run build
   # Push the 'out' folder to gh-pages branch
   ```

5. **Enable GitHub Pages** in repository settings

### Option 3: Netlify (Free)

1. **Connect GitHub repository** to Netlify
2. **Build settings**:
   - Build command: `npm run build`
   - Publish directory: `.next`
3. **Deploy** - Netlify auto-deploys on every push

## Project Structure

```
website/
├── app/
│   ├── layout.tsx      # Root layout with SEO metadata
│   ├── page.tsx         # Main page composing all sections
│   └── globals.css      # Design system and global styles
├── components/
│   ├── Navbar.tsx       # Fixed navigation
│   ├── Hero.tsx         # Opening section with CTA
│   ├── About.tsx        # Positioning statement
│   ├── WhatISolve.tsx   # Problem types with evidence
│   ├── HowIWork.tsx     # Engineering methodology
│   ├── Experience.tsx   # Timeline with CPAR format
│   ├── Projects.tsx     # Problem-solution cards
│   ├── Skills.tsx       # Categorized competencies
│   ├── Education.tsx    # Degrees and certifications
│   ├── Contact.tsx      # Form and contact info
│   └── Footer.tsx       # Footer with social links
├── data/
│   └── content.ts       # All website content (easy updates)
└── public/
    └── Rafael-Gonzalez-Resume.pdf
```

## Updating Content

All content is centralized in `/data/content.ts`. To update:

1. **Personal Info**: Edit `personalInfo` object
2. **Experience**: Add/modify entries in `experience` array
3. **Projects**: Update `projects` array
4. **Skills**: Modify `skills` object
5. **Education**: Edit `education` and `certifications` arrays

## Contact Form

The contact form uses [Formspree](https://formspree.io). To use your own:

1. Create a free Formspree account
2. Create a new form
3. Replace the form URL in `/components/Contact.tsx`:
   ```tsx
   const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
   ```

## Technologies

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Vanilla CSS with CSS Variables
- **Font**: Inter (Google Fonts)
- **Deployment**: Vercel / Netlify / GitHub Pages

## License

MIT
