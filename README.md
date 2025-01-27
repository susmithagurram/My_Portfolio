# Personal Portfolio Website

A modern, responsive personal portfolio website built with React. Features multiple portfolio sections, project showcases, and professional experience displays.

## Quick Start

1. Fork this repository
2. Clone your forked repository
3. Install dependencies:
```bash
npm install
```
4. Start the development server:
```bash
npm start
```

## Customization

### 1. Basic Configuration

All personal information and content can be configured in a single file: `src/config.js`

Edit the following sections in `config.js`:

- `personalInfo`: Your name, email, profile picture, role, etc.
- `socialLinks`: Your social media links
- `portfolioSections`: Configure which sections appear in your portfolio
- `projects`: Your projects for each section
- `experience`: Your professional experience
- `achievements`: Your achievements in different areas
- `siteConfig`: Website configuration (title, colors, etc.)

### 2. Adding Your Profile Picture

1. Add your profile picture to the `public` folder
2. Update the `profilePicture` path in `personalInfo` section of `config.js`

### 3. Project Background Images

1. Add project background images to the `public` folder
2. Update the `backgroundImage` paths in the projects section of `config.js`

### 4. Customizing Colors

Edit the `siteConfig` section in `config.js`:
```javascript
export const siteConfig = {
  primaryColor: "#2196F3",    // Change to your preferred primary color
  secondaryColor: "#1a1a1a"   // Change to your preferred secondary color
}
```

### 5. Enabling/Disabling Features

- Toggle blog section: Set `showBlog` in `siteConfig`
- Remove sections: Delete or comment out sections in `portfolioSections`

## Features

- 📱 Responsive Design
- 🎨 Customizable Themes
- 📂 Multiple Portfolio Sections
- 🖼️ Project Background Images
- 📊 Professional Experience Display
- 🏆 Achievements Section
- 📝 Blog Support
- 🔗 Social Media Integration

## Technologies Used

- React.js
- Styled Components
- React Router
- React Icons

## License

MIT License - feel free to use this template for your personal portfolio!

## Credits

Created by [Suhas Dasari](https://github.com/suhasdasari)
