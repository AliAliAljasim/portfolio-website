# Portfolio Website

A modern, responsive portfolio website built with React and Framer Motion featuring smooth animations and transitions.

## Features

- 🎨 **Modern Design**: Clean, professional layout with beautiful gradients and animations
- 📱 **Responsive**: Fully responsive design that works on all devices
- ⚡ **Smooth Animations**: Powered by Framer Motion for fluid transitions
- 🎯 **Interactive Elements**: Hover effects, scroll animations, and interactive components
- 🚀 **Fast Performance**: Built with Vite for optimal development and build performance
- 📧 **Contact Form**: Functional contact form with validation
- 🎨 **Customizable**: Easy to customize with your own content and styling

## Sections

- **Hero**: Eye-catching introduction with animated elements
- **About**: Personal information, experience, and education
- **Skills**: Interactive skill bars and technology showcase
- **Projects**: Portfolio projects with filtering and live demos
- **Contact**: Contact form and social media links
- **Footer**: Additional links and information

## Technologies Used

- React 18
- Framer Motion (animations)
- React Icons
- Vite (build tool)
- CSS3 with custom properties
- Responsive design principles

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Customization

1. **Personal Information**: Edit `src/data/portfolioData.js` to update your personal information, skills, projects, and experience.

2. **Styling**: Modify `src/styles/index.css` to change colors, fonts, and overall styling.

3. **Content**: Update the content in each component to match your personal brand.

4. **Images**: Replace placeholder images in the projects section with your actual project screenshots.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
portfolio-website/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── portfolioData.js
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── README.md
```

## Deployment

The project can be deployed to any static hosting service:

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to your hosting service (Netlify, Vercel, GitHub Pages, etc.)

## Customization Tips

- Update the color scheme by modifying CSS custom properties in `index.css`
- Add more sections by creating new components and importing them in `App.jsx`
- Customize animations by adjusting Framer Motion variants
- Add more interactive elements using React hooks and Framer Motion
- Implement a blog section or testimonials section for more content

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help customizing the portfolio, feel free to open an issue or reach out!

