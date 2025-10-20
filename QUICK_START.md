# Quick Start Guide

## 🚀 Getting Started in 5 Minutes

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Add Your Project Images
1. Go to `/public/projects/` folder
2. Add your project images with these names:
   - `crm.png`
   - `aydymcom.png`
   - `tolkun-tv.png`
   - `ussa.png`
   - `tmserwis.png`

### Step 3: Add Your Resume (Optional)
Place your resume PDF at `/public/resume.pdf`

### Step 4: Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio!

## 🎨 Next Steps

### Customize Your Content

Edit `/src/data/portfolio-data.ts` to update:

1. **Personal Information** - Update name, title, bio
2. **Experience** - Already populated with your work history
3. **Skills** - Categorized skills are ready
4. **Projects** - 5 projects are configured (add images)
5. **Contact Info** - Your contact details are set

### Deploy to Vercel

1. Push to GitHub:
```bash
git add .
git commit -m "Initial portfolio"
git push origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click Deploy!

## 📝 Important Files

- `/src/data/portfolio-data.ts` - **All your content** (edit this!)
- `/src/app/globals.css` - Theme colors and styles
- `/public/projects/` - Project images folder
- `/public/resume.pdf` - Your resume/CV

## 🎯 Key Features Already Implemented

✅ Dark/Light mode toggle
✅ Responsive design (mobile, tablet, desktop)
✅ Smooth animations with Framer Motion
✅ Project filtering by category
✅ Interactive timeline for experience
✅ Skills with progress bars
✅ Contact form (ready for integration)
✅ SEO optimized
✅ Professional design with modern UI

## 💡 Tips

1. **Testing**: Run `npm run dev` frequently to see changes
2. **Images**: Keep project images under 500KB for best performance
3. **Colors**: Edit CSS variables in `globals.css` to change theme
4. **Projects**: Match category names in filter buttons

## 📧 Need Help?

Check the main README.md for detailed documentation!

---

**Your portfolio is ready to go! Just add your images and deploy! 🎉**
