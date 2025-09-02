# Portfolio - Miftakhul Rizky

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. This portfolio showcases projects, articles, work experience, and personal updates in a clean, professional design.

## ✨ Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop devices
- **Modern Tech Stack**: Built with Next.js 15, React 19, and TypeScript
- **Smooth Scrolling**: Enhanced user experience with Lenis smooth scrolling
- **Portfolio Showcase**: Display of projects with detailed descriptions
- **Articles Section**: Blog-style articles and writings
- **Work Experience**: Professional background and experience
- **Photo Gallery**: Visual showcase of work and interests
- **Analytics**: Integrated Vercel Analytics for performance tracking
- **SEO Optimized**: Proper metadata and structure for search engines

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: Boxicons
- **Fonts**: Geist Sans & Geist Mono
- **Smooth Scrolling**: Lenis
- **Analytics**: Vercel Analytics
- **Development**: Turbopack for faster builds

## 📁 Project Structure

```
src/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── container.tsx     # Layout container
│   │   ├── navbar.tsx        # Navigation component
│   │   ├── footer.tsx        # Footer component
│   │   └── SmoothScrolling.tsx
│   ├── pages/               # Page components
│   │   ├── home/            # Homepage sections
│   │   │   ├── hero.tsx     # Hero section
│   │   │   ├── photos.tsx   # Photo gallery
│   │   │   ├── project.tsx  # Projects showcase
│   │   │   ├── articles.tsx # Articles preview
│   │   │   ├── update.tsx   # Personal updates
│   │   │   └── work.tsx     # Work experience
│   │   ├── about/           # About page
│   │   ├── articles/        # Articles section
│   │   ├── project/         # Projects section
│   │   └── uses/            # Tools and setup
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Homepage
public/
├── img/                     # Profile and company images
└── project/                 # Project screenshots
```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-latest
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

## 📜 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues automatically
- `npm run lint:check` - Check for linting issues with zero warnings

## 🎨 Customization

### Adding New Projects
1. Add project images to `public/project/`
2. Update the project data in the relevant component
3. Ensure images are optimized for web

### Modifying Styles
- Global styles: `src/app/globals.css`
- Component styles: Use Tailwind CSS classes
- Responsive design: Built-in Tailwind responsive utilities

### Content Updates
- **Hero Section**: Edit `src/app/pages/home/hero.tsx`
- **Projects**: Update `src/app/pages/home/project.tsx`
- **About**: Modify `src/app/pages/about/page.tsx`
- **Work Experience**: Edit `src/app/pages/home/work.tsx`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px (1 column layout)
- **Tablet**: 768px - 1024px (Adaptive layout)
- **Desktop**: > 1024px (Multi-column layout)

## 🚀 Deployment

This project is optimized for deployment on Vercel:

1. **Deploy to Vercel**
   ```bash
   npm run build
   ```

2. **Or use Vercel CLI**
   ```bash
   vercel --prod
   ```

## 📊 Performance

- **Next.js 15**: Latest features and optimizations
- **Turbopack**: Faster development builds
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic route-based splitting
- **Analytics**: Performance monitoring with Vercel Analytics

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 👤 Author

**Miftakhul Rizky**
- Portfolio: [Your Portfolio URL]
- Email: [Your Email]
- LinkedIn: [Your LinkedIn]
- GitHub: [Your GitHub]

---

*Built with ❤️ using Next.js and Tailwind CSS*
