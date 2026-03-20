# Clinic Booking UI

A polished, accessible multi-step booking flow for a fictional clinic. Built with React, TypeScript, and modern web standards.

## Features

✅ **Multi-step booking flow** – Date selection, doctor choice, confirmation screen  
✅ **Responsive design** – Clean, modern UI with accessible ARIA labels  
✅ **Multilingual support** – English & Spanish with i18next (language switcher in header)  
✅ **Mixed JS/TS** – React components in TypeScript + LanguageToggle.jsx in JavaScript  
✅ **Date picker** – Native HTML5 with dayjs for date validation  
✅ **Doctor roster** – Radio selection with specialty info  
✅ **Production-ready** – Vite build, TypeScript strict mode, semantic HTML

## Tech Stack

- **Frontend:** React 18, TypeScript, JSX
- **Build:** Vite (fast dev server, optimized builds)
- **Internationalization:** i18next + react-i18next
- **Date handling:** dayjs
- **Styling:** Plain CSS (BEM-inspired, ~100 lines)

## Installation & Setup

```powershell
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173)

## Project Structure

```
src/
├── App.tsx              # Root app + header with language toggle
├── i18n.ts              # i18next configuration & translations
├── main.tsx             # React entry point
├── styles.css           # Tailwind-like utility CSS
├── booking/
│   ├── BookingFlow.tsx  # Multi-step flow container
│   └── steps/
│       ├── StepDate.tsx      # Date picker
│       ├── StepDoctor.tsx    # Doctor selection
│       └── StepConfirm.tsx   # Confirmation screen
└── components/
    └── LanguageToggle.jsx    # Language switcher (JavaScript)
```

## Features in Detail

### Multi-step Booking
1. **Date Selection** – Choose an appointment date (min = today)
2. **Doctor Selection** – Pick from 3 doctors with specialties
3. **Confirmation** – Review appointment details

### Internationalization
- Click the language toggle button (top-right) to switch between English ↔ Spanish
- All UI strings are translated via i18n
- Language preference persists using browser language detector

### Accessibility
- Semantic HTML (`<section>`, `<dl>`, `<label>`)
- ARIA labels and IDs for screen readers
- Keyboard-navigable form controls
- Disabled state feedback on buttons

## Build & Deploy

```powershell
npm run build   # Creates dist/ folder with optimized production build
npm run preview # Preview production build locally
```

The production build is ready to deploy to Vercel, Netlify, GitHub Pages, or any static host.

## Resume Highlights

✨ **React component architecture** – Reusable, well-structured components with clear separation of concerns  
✨ **TypeScript expertise** – Strict mode, type-safe props, discriminated unions for UI state  
✨ **i18n implementation** – Real multilingual support with language switching UI  
✨ **Accessibility** – WCAG-compliant semantic HTML and ARIA for inclusive UI  
✨ **Modern tooling** – Vite, ESM, fast dev iteration and optimized production builds  
✨ **Responsive design** – Mobile-first, CSS Grid, Flexbox for polished UX  
✨ **Form state management** – Multi-step form flow with client-side validation and state persistence

