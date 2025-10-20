# Shahnur Daniyarov - Portfolio Website

A modern, professional portfolio website showcasing mobile development expertise with a focus on Android development. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

![Portfolio Preview](./preview.png)

## 🌟 Features

- **Modern Design**: Clean, professional UI with glassmorphism effects and smooth animations
- **Dark/Light Mode**: Seamless theme switching with persistent user preference
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: Engaging animations powered by Framer Motion
- **Project Showcase**: Filterable project gallery with detailed modal views
- **Interactive Timeline**: Professional experience displayed in an elegant timeline
- **Skills Visualization**: Categorized skills with animated progress bars
- **Contact Form**: Fully functional contact section
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Cards configured
- **Performance Optimized**: Fast loading with Next.js App Router and optimizations

## 🚀 Tech Stack

- **Framework**: [Next.js 14+](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: [Inter](https://fonts.google.com/specimen/Inter) from Google Fonts
- **Deployment**: Optimized for [Vercel](https://vercel.com/)

## 📦 Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the development server**

```bash
npm run dev
```

4. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Personal Information

Edit `/src/data/portfolio-data.ts` to update:

- Personal information (name, title, bio, education)
- Work experience
- Skills and skill categories
- Projects
- Contact information
- Social links

### Projects

Add your project images to `/public/projects/` and update the project data in `/src/data/portfolio-data.ts`:

```typescript
{
  id: 'project-id',
  title: 'Project Title',
  description: 'Short description',
  image: '/projects/project-image.png',
  technologies: ['React', 'Node.js'],
  platform: 'Android',
  category: 'Enterprise',
  // ... more fields
}
```

### Theme Colors

Modify `/src/app/globals.css` to change color schemes:

```css
:root {
  --accent: #3b82f6; /* Change accent color */
  --background-primary: #ffffff;
  /* ... more variables */
}
```

### Resume/CV

Place your resume PDF in `/public/resume.pdf` for the download button to work.

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── projects/          # Project images
│   └── resume.pdf         # Your resume/CV
├── src/
│   ├── app/
│   │   ├── globals.css    # Global styles and theme
│   │   ├── layout.tsx     # Root layout with metadata
│   │   └── page.tsx       # Home page
│   ├── components/
│   │   ├── Navigation.tsx # Header navigation
│   │   ├── Hero.tsx       # Hero section
│   │   ├── About.tsx      # About section
│   │   ├── Skills.tsx     # Skills section
│   │   ├── Experience.tsx # Experience timeline
│   │   ├── Projects.tsx   # Projects showcase
│   │   ├── Contact.tsx    # Contact form
│   │   └── Footer.tsx     # Footer
│   ├── data/
│   │   └── portfolio-data.ts  # All portfolio data
│   ├── lib/
│   │   └── theme-provider.tsx # Theme context
│   └── types/
│       └── index.ts       # TypeScript types
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub**

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Import to Vercel**

- Go to [vercel.com](https://vercel.com/)
- Click "Import Project"
- Select your GitHub repository
- Click "Deploy"

3. **Done!** Your site will be live at `https://your-project.vercel.app`

### Deploy to Netlify

1. **Build the project**

```bash
npm run build
```

2. **Deploy**

- Connect your repository to Netlify
- Set build command: `npm run build`
- Set publish directory: `.next`

### Environment Variables

If you add any environment variables, create a `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## 📝 Adding Projects

To add a new project:

1. Add project image to `/public/projects/your-project.png`
2. Update `/src/data/portfolio-data.ts`:

```typescript
export const projects: Project[] = [
  // ... existing projects
  {
    id: 'new-project',
    title: 'New Project Title',
    description: 'Project description',
    image: '/projects/your-project.png',
    technologies: ['Tech1', 'Tech2'],
    platform: 'Android', // or 'iOS' or 'Cross-platform'
    category: 'Category', // Must match filter categories
    features: ['Feature 1', 'Feature 2'],
    role: 'Your role description',
    impact: ['Impact 1', 'Impact 2'],
    links: {
      github: 'https://github.com/...',
      playStore: 'https://play.google.com/...',
    },
  },
];
```

## 🎯 Key Features Explained

### Dark/Light Mode

The theme system uses React Context and localStorage:
- Automatically detects system preference
- Persists user choice
- Smooth transitions between themes

### Smooth Scrolling

Navigation links use smooth scroll behavior with offset adjustment for the fixed header.

### Project Filtering

Projects can be filtered by category. Add categories in the `categories` array in `Projects.tsx`.

### Animations

Framer Motion is used for:
- Page load animations
- Scroll-triggered animations
- Hover effects
- Modal transitions

## 🔧 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
```

## 📱 Progressive Enhancement

- Respects `prefers-reduced-motion` for accessibility
- Fallback designs for older browsers
- Mobile-first responsive design

## 🔍 SEO

The site includes:
- Optimized meta tags
- Open Graph tags for social sharing
- Twitter Card tags
- Semantic HTML structure
- Proper heading hierarchy

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

**Shahnur Daniyarov**
- Email: twodiesdeveloper@gmail.com
- Phone: +993 65804101
- LinkedIn: [iamtwodies](https://tm.linkedin.com/in/iamtwodies)

---

**Built with ❤️ using Next.js and React**
