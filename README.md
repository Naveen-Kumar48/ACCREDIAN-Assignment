# Accredian Enterprise Page Clone

🚀 A high-fidelity, responsive clone of the [Accredian Enterprise](https://enterprise.accredian.com/) landing page, built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**.

## 🔗 Project Links
- **Live Demo:** https://accredian-assignment-sigma.vercel.app/
- **GitHub Repository:**https://github.com/Naveen-Kumar48/ACCREDIAN-Assignment

## 🛠️ Stack & Technologies
- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Deployment:** [Vercel](https://vercel.com/)
- **Animations:** Custom CSS Transitions & Tailwind Utilities

## ✨ Features
1. **Full Page Recreation:** Implemented all core sections including Hero, Stats, Domain Expertise, How It Works, CAT Framework, and FAQs.
2. **High-Fidelity Editorial Design:** Strictly followed the premium design aesthetic of the reference site, including specialized pillars and methodology diagrams.
3. **Responsive Design:** Completely optimized for Desktop, Tablet, and Mobile devices.
4. **Smooth Navigation:** Integrated anchor links for seamless section-to-section scrolling.
5. **Interactive FAQ:** Custom accordion system for managing common enterprise inquiries.
6. **Lead Capture (Bonus):** Functional contact form with loading states and validation, integrated with a Next.js API route.

## 🚀 Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <your-repo-link>
   cd <project-folder>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 🧠 Approach & Methodology

### 1. Planning & Architecture
I started by analyzing the structure of the reference site, identifying key reusable layout patterns and design tokens (brand blue `#1a73e8`, typography scales, and specific corner radii `rounded-[32px]`). I modularized the project into:
- `/components/layout`: Global navigation and footer.
- `/components/sections`: Individual feature-rich sections (Hero, Features, CAT, etc.).
- `/app/api`: Server-side endpoints for form handling.

### 2. Design System Implementation
To maintain visual consistency, I defined a central data file (`lib/site-data.ts`) containing all text content and asset paths, ensuring that the components remained purely functional and easy to modify.

### 3. Editorial Aesthetic
The project focuses on "Editorial Design"—using white space, bold typography, and custom SVG diagrams (like the CAT Framework) to convey authority and clarity, just like the original site.

## 🤖 AI Usage & Improvements

### Where AI Assisted:
- **Rapid Prototyping:** AI helped scaffold the initial Tailwind layouts for complex grid sections (Domain Expertise).
- **Interactive Logic:** Assisted in building the state management for the FAQ accordion and the Lead Capture form's asynchronous submission flow.
- **Section Redesign:** Helped refine the "Editorial" look of the Hero section to include the contained card layout requested during the process.

### Manual Improvements:
- **Visual Fine-Tuning:** I manually adjusted vertical rhythm, padding-scales, and image offsets (e.g., shifting the hero image upwards) to achieve a more "premium" feel than a generic AI generation would provide.
- **Data Integrity:** Manually curated the `site-data.ts` to ensure all marketing copy and value propositions perfectly mirrored the reference site.
- **Accessibility:** Ensured proper ARIA attributes for interactive elements like buttons and form inputs.

## 📈 Future Improvements
- **Animation Framework:** Integrate `framer-motion` for complex scroll-triggered enter animations.
- **Contentful Integration:** Connect the data to a headless CMS (like Contentful or Sanity) for marketing team edits.
- **Dark Mode:** Implement a refined dark theme using Tailwind's `dark:` utilities.
- **Unit Testing:** Add Jest/Cypress tests for core user paths like form submission.

---
*Developed by Naveen Kumar with ❤️ for the  Accredian Enterprise  Assinment*
