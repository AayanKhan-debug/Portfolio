# Personal Developer & AI Portfolio – Aayan Khan

A modern, high-performance, dark-themed personal portfolio website built for **Aayan Khan** (Full-Stack Developer & AI Enthusiast). Built with **React 18**, **TypeScript**, **Vite**, **Tailwind CSS**, **Framer Motion**, and **Lucide React**.

---

## ⚡ Tech Stack & Architecture

- **Core**: React 18, TypeScript, Vite
- **Styling & UI**: Tailwind CSS v4, Custom Glassmorphism, CSS Utility Tokens
- **Animations**: Framer Motion (Page transitions, scroll reveals, count-up stats, interactive cursor)
- **Background Effects**: HTML5 Canvas Interactive Neural Network Particle System
- **Icons**: Lucide React Icons
- **Email Service**: EmailJS Integration with fallback toast feedback & confetti
- **SEO & Metadata**: Dynamic Open Graph meta tags, Twitter Cards, Schema.org Person JSON-LD

---

## 👤 Profile & Authentic Information

- **Name**: Aayan Khan
- **Title**: Full-Stack Developer | AI Enthusiast
- **Location**: Bengaluru, Karnataka, India
- **Education**: Nitte Meenakshi Institute of Technology (NMIT) – B.E. Information Science and Engineering (Expected 2028)
- **Socials**:
  - GitHub: https://github.com/AayanKhan-debug
  - LinkedIn: https://www.linkedin.com/in/aayankhan18/
  - LeetCode: https://leetcode.com/u/khancancode/
  - Email: khan01aayan@gmail.com

---

## ⚙️ How to Customize (Single Config File)

All personal details, skills, project data, timeline items, and EmailJS credentials are stored in **ONE single configuration file**:

```path
src/config/portfolio.config.ts
```

---

## 🛠️ Local Development & Setup

### Prerequisites
- Node.js (v18.0.0 or higher recommended)
- npm or yarn

### Installation Commands

```bash
# 1. Navigate to project directory
cd Portfolio

# 2. Install dependencies
npm install

# 3. Start local Vite development server
npm run dev
```

Open your browser at `http://localhost:5173`.

---

## 📦 Building for Production

To create an optimized production build:

```bash
npm run build
```

This compiles your code into the `dist/` folder with zero TypeScript errors.

---

## 🚀 Deployment to Vercel

1. Push your repository to **GitHub**.
2. Go to [Vercel Dashboard](https://vercel.com/new).
3. Import your GitHub repository.
4. Keep standard build settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**!
