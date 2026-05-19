# Habiba Khiry | Professional Portfolio

An elegant, high-performance personal portfolio website built for **Habiba Khiry**, SME Trainer & Corporate Communication Expert. Featuring premium dark-mode aesthetics, responsive fluid typography, robust multi-page routing, modern asset configuration, and search engine optimization.

Designed & Developed by [Aurangzeb Sunny](https://www.linkedin.com/in/aurangzebsunny/).

---

## 🚀 Key Features

- **Multi-Page Architecture**: Fluid client-side subpage routing utilizing `react-router-dom` for `/about`, `/experience`, `/skills`, `/achievements`, and `/contact`.
- **Responsive Navigation**: Adaptive desktop & mobile header layouts with dynamic overlay toggles.
- **Premium Typography & UI**: Powered by HSL-tuned gradients, polished micro-animations (`framer-motion`), and rich iconography (`lucide-react`).
- **Interactive Experience & Stats Timeline**: Highlighting professional milestones across noon, e& UAE, and corporate training sectors.
- **Dynamic SEO Optimization**: Pre-configured meta descriptions, search keywords, and Open Graph metadata (for LinkedIn, Facebook previews).
- **Favicon & Web App Ready**: Complete set of high-resolution favicons, Apple touch icons, and web-app manifests inside the `public` asset pipeline.
- **Vercel Deployable**: Pre-configured SPA rewrite rules inside `vercel.json` to prevent client-side routing 404s.

---

## 🛠️ Tech Stack

- **Core**: React 18, TypeScript, TailwindCSS / Custom HSL CSS.
- **Routing**: `react-router-dom`
- **Animations**: `framer-motion`
- **Icons**: `lucide-react`
- **Build Tool**: Vite (Ultra-fast Hot Module Replacement)

---

## 💻 Local Development

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/royestheking-a11y/Habiba-Khiry.git
   cd Habiba-Khiry
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Dev Server**:
   ```bash
   npm run dev
   ```

4. **Build for Production**:
   ```bash
   npm run build
   ```

---

## 🌐 Deployment to Vercel

This repository is optimized for one-click deployment on [Vercel](https://vercel.com).
- The `vercel.json` at the root guarantees that client-side routes are resolved correctly.
- Simply import the repository inside Vercel, select **Vite** as the framework preset, and deploy!