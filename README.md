# Alizeh Adeel - Digital Portfolio Website

A state-of-the-art, professional, dark-mode first portfolio website tailored for **Alizeh Adeel**, a Machine Learning & Generative AI Engineer. Built with Next.js (App Router), React, TypeScript, Tailwind CSS, Framer Motion, and Resend.

---

## 🚀 Key Features

- 🌌 **Premium Dark Aesthetics**: Sleek dark slate layout with glowing grid accents, gradient typography, and elegant backdrop blurs (glassmorphism).
- 📱 **Fully Responsive Layout**: Mobile-first design optimizing viewports across all screen sizes (mobile, tablet, desktop).
- 🖱️ **Interactive Navigation**: Sticky header with scroll-spy style tracking and smooth animations.
- ⚙️ **Modular Skill Panels**: Interactive grids categorizing languages, machine learning frameworks, and tools.
- 💼 **Timeline Showcases**: Dual-column timelines highlighting work experience (Devsinc internship), bootcamps (Applied AI Engineering), and academic background (FAST NUCES Lahore).
- 📝 **Contact Submission API**: Validated contact form that dispatches emails using **Resend** and triggers a **confetti burst** on successful submission.
- 📂 **Asset Hosting**: Direct inline routing to the static Resume/CV PDF and optimized profile avatar.

---

## 🛠️ Technology Stack

- **Framework**: Next.js 16+ (App Router)
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript (Strict Mode)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Email Delivery**: Resend SDK
- **Confetti**: Canvas-Confetti

---

## 💻 Local Setup & Development

### 1. Prerequisites
Ensure you have **Node.js 18.17+** and **npm** installed.

### 2. Installation
Clone the repository and install the dependencies:
```bash
npm install
```

### 3. Environment Configuration
Copy the sample environment file to create your local variables:
```bash
cp .env.example .env.local
```
Then, populate your local configurations inside `.env.local`:
- `RESEND_API_KEY`: Get your free API key from [Resend](https://resend.com) to enable email sending. If left blank, the API handler will gracefully mock successful delivery for development.
- `CONTACT_RECEIVER_EMAIL`: The recipient email address for form submissions (defaults to `alizehadeel12@gmail.com`).

### 4. Running the App
Run the local development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to inspect the application.

---

## ⚡ Deployment on Vercel

The application is fully optimized for immediate deployment on **Vercel** with no backend configuration required.

### Deploying via Vercel CLI
1. Install Vercel globally: `npm i -g vercel`
2. Run the deployment wizard:
   ```bash
   vercel
   ```
3. Set your environment variables (`RESEND_API_KEY` and `CONTACT_RECEIVER_EMAIL`) when prompted or in the Vercel dashboard under project settings.

### Deploying via Git Integration
1. Push your code to GitHub, GitLab, or Bitbucket.
2. Go to the [Vercel Dashboard](https://vercel.com/dashboard) and click **Add New Project**.
3. Import your repository.
4. Add environment variables under **Environment Variables**.
5. Click **Deploy**.
