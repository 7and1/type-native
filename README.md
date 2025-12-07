# Type-Native 🌍⌨️

A free, multilingual online keyboard application supporting 94+ languages with 218+ keyboard layouts. Type in any language directly in your browser - no installation required!

[![Deploy to Cloudflare Pages](https://github.com/yourusername/type-native/actions/workflows/deploy.yml/badge.svg)](https://github.com/yourusername/type-native/actions/workflows/deploy.yml)

## ✨ Features

- 🌐 **94+ Languages** - From English to Inuktitut, we've got you covered
- ⌨️ **218+ Keyboard Layouts** - Both English and French versions for each language
- 🔄 **RTL Support** - Full right-to-left support for Arabic, Hebrew, Urdu, and more
- 💾 **Auto-save** - Your text is automatically saved in your browser
- 📋 **Quick Actions** - Copy, search on Google, YouTube, Amazon, and Twitter
- 🎨 **Modern UI** - Clean, responsive design that works on all devices
- 🚀 **Fast & Light** - Static site, loads instantly
- 🔐 **Privacy-First** - All data stays in your browser

## 🗣️ Supported Languages

### Western & Northern Europe (18)
English, German, French, Spanish, Italian, Portuguese, Dutch, Swedish, Danish, Norwegian, Finnish, Polish, Irish, Welsh, Icelandic, Estonian, Latvian, Lithuanian

### Southern & Eastern Europe (16)
Greek, Turkish, Russian, Ukrainian, Czech, Hungarian, Romanian, Croatian, Slovak, Slovenian, Serbian, Bosnian, Bulgarian, Belarusian, Maltese, Albanian, Macedonian

### Middle East & North Africa (13)
Arabic (+ 5 regional variants), Hebrew, Persian, Urdu, Pashto, Kurdish (Sorani & Kurmanji), Tifinagh

### Central Asia (6)
Kazakh, Tajik, Uzbek, Kyrgyz, Turkmen, Mongolian

### South Asia (12)
Hindi, Bengali (+ Bangladesh variant), Tamil, Punjabi, Gujarati, Telugu, Kannada, Malayalam, Odia, Sinhala, Divehi, Nepali, Tibetan

### East & Southeast Asia (10)
Japanese, Korean, Chinese (Taiwan), Thai, Vietnamese, Khmer, Burmese, Indonesian, Malay, Tagalog

### Africa (7)
Amharic, Tigrinya, Hausa, Swahili, Yoruba, Igbo, Zulu, Xhosa, Afrikaans

### Oceania (3)
Maori, Fijian, Samoan

### Americas (1)
Inuktitut

## 🚀 Getting Started

### Prerequisites

- Node.js 22 or higher
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/type-native.git
cd type-native

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Build for Production

```bash
# Build static site
npm run build

# The static files will be in the 'out' directory
```

### Testing

```bash
# Run the Vitest + Testing Library suite once
npm test

# Watch for changes during development
npm run test:watch

# Generate coverage reports (text + HTML)
npm run test:coverage
```

Aim to exercise at least one LTR layout, one RTL layout, and one CJK layout manually whenever UI changes touch the keyboards.

## 📦 Deployment

This project is configured for automatic deployment to Cloudflare Pages via GitHub Actions.

### Quick Setup

1. **Set up GitHub Secrets**:
   ```bash
   cd .github
   ./setup-secrets.sh
   ```

2. **Or manually add secrets** in GitHub Settings → Secrets → Actions:
   - `CLOUDFLARE_API_TOKEN` - Your Cloudflare API token
   - `CLOUDFLARE_ACCOUNT_ID` - Your Cloudflare account ID

3. **Push to main branch** - Deployment starts automatically!

For detailed instructions, see:
- [Deployment Guide](.github/DEPLOYMENT.md)
- [Secrets Setup Guide](.github/SECRETS_SETUP.md)

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Icons**: Lucide React
- **State Management**: Zustand
- **Build Tool**: Turbopack
- **Deployment**: Cloudflare Pages

## 📁 Project Structure

```
type-native/
├── src/
│   ├── app/              # Next.js pages and routes
│   │   ├── page.tsx      # Home page
│   │   ├── layout.tsx    # Root layout
│   │   └── [language]-keyboard/  # Dynamic language pages
│   ├── components/       # React components
│   │   ├── editor/       # Text editor components
│   │   ├── keyboard/     # Virtual keyboard components
│   │   └── ui/           # UI components (shadcn/ui)
│   ├── data/            # Data and configurations
│   │   ├── layouts/     # Keyboard layout definitions (94 files)
│   │   └── metadata/    # SEO metadata for each language
│   ├── hooks/           # Custom React hooks
│   ├── stores/          # Zustand stores
│   └── types/           # TypeScript type definitions
├── .github/
│   ├── workflows/       # GitHub Actions
│   ├── DEPLOYMENT.md    # Deployment guide
│   └── SECRETS_SETUP.md # Secrets setup guide
└── public/              # Static assets
```

## 🎯 Key Features Explained

### Virtual Keyboard
- Touch-friendly buttons for on-screen typing
- Real-time shift/caps lock state
- Physical keyboard integration

### Physical Keyboard Mapping
- Type using your physical keyboard
- Automatic character mapping based on selected language
- Works seamlessly with the virtual keyboard

### Auto-save
- Text automatically saved to browser localStorage
- Persists across sessions
- Per-language draft storage

### Search Integration
- Quick search on Google, YouTube, Amazon, and Twitter
- Opens in new tab with your typed text
- One-click copy to clipboard

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Adding a New Language

To add a new keyboard layout:

1. Create a new layout file in `src/data/layouts/[language-code].ts`
2. Add the layout to `src/data/layouts/index.ts`
3. Add language info and metadata
4. Create page routes for both English and French versions
5. Run `npm run build` to verify

See existing layouts for reference.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Cloudflare for the free hosting
- All contributors who helped build this project

## 📞 Support

If you have any questions or need help:
- Open an issue on GitHub
- Check the documentation in `.github/` folder

---

**Built with ❤️ by the Type-Native team**

[Live Demo](https://type-native.pages.dev) | [Report Bug](https://github.com/yourusername/type-native/issues) | [Request Feature](https://github.com/yourusername/type-native/issues)
