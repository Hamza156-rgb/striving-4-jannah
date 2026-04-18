# 🌙 Noor (نور) — Islamic Mobile Application

A beautiful, full-featured Islamic mobile app built with **Ionic Angular + Capacitor**.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🕌 **Prayer Times** | GPS-based or city-based prayer times via aladhan.com API |
| 📖 **Quran** | Full 114 Surahs with Arabic text + translations (English, Urdu, Arabic-only) |
| 📚 **Hadith** | Authentic hadiths from Bukhari, Muslim, Abu Dawud and more |
| 🌐 **3 Languages** | Quran & Hadith in Arabic, English, Urdu |
| 🕐 **Live Clock** | Real-time clock with Hijri calendar date |
| ☪ **Dhikr** | Post-prayer remembrances |
| ⚙️ **Settings** | Location, calculation method, language preferences |
| 📱 **Capacitor** | Ready for Android & iOS via Capacitor |

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm 9+

### Run in Browser
```bash
npm install
npm start
# Open http://localhost:4200
```

### Build for Production
```bash
npm run build
```

### Run on Android
```bash
npm run build
npx cap add android
npx cap sync
npx cap open android
# Then build & run in Android Studio
```

### Run on iOS
```bash
npm run build
npx cap add ios
npx cap sync
npx cap open ios
# Then build & run in Xcode
```

---

## 📡 APIs Used (All Free, No Key Required)

| API | Purpose | URL |
|---|---|---|
| AlQuran Cloud | Quran text & translations | api.alquran.cloud |
| Aladhan | Prayer times + Hijri date | api.aladhan.com |
| Random Hadith Generator | Hadith collection | random-hadith-generator.vercel.app |

---

## 📂 Project Structure

```
src/app/
├── pages/
│   ├── tabs/            # Bottom navigation tabs
│   ├── home/            # Dashboard: clock, prayer times, daily verse & hadith
│   ├── quran/           # Surah list with search & filter
│   ├── quran-reader/    # Ayah reader with translation toggle & font size
│   ├── hadith/          # Hadith cards with language switcher
│   ├── prayer-times/    # Full prayer times + GPS + dhikr
│   └── settings/        # Language, location & method settings
└── services/
    ├── quran.service.ts
    ├── hadith.service.ts
    ├── prayer.service.ts
    └── settings.service.ts
```

---

## 🎨 Design

- **Dark Islamic theme** — Deep navy, gold (#c9a84c), emerald (#25c79a)
- **Arabic typography** — Scheherazade New + Amiri fonts
- **Heading font** — Cinzel (classic/elegant)
- **Body font** — Lato
- **Geometric patterns** — Islamic dot-grid background motif

---

## ⚙️ Calculation Methods

Supports 11 Islamic calculation methods including:
- Muslim World League (default)
- University of Islamic Sciences, Karachi
- Umm al-Qura, Makkah
- Egyptian General Authority
- And more...

---

*بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ*

Made with ❤️ for the Muslim Ummah.
