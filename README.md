# 🧮 Dynamic Pricing Calculator

An interactive pricing calculator built with **React**, **TypeScript**, **Tailwind CSS**, and **Vite**.

## ✨ Features

✅ Configure product by selecting:

- Size (`S`, `M`, `L`)
- Color (`Red`, `Blue`, etc.)
- Optional add-ons (`Custom Print`, `Gift Wrap`)

✅ Live price updates as you change options  
✅ Quantity input with automatic bulk discount for 10+ items  
✅ Detailed price breakdown  
✅ Simple price trend chart over time  
✅ Save configuration and copy a shareable link  
✅ Compare multiple saved configurations side-by-side

---

## 🛠 Tech Stack

- **Frontend:** [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Charting:** [Recharts](https://recharts.org/)
- **Tooling:** [Vite](https://vitejs.dev/)

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/dynamic-pricing-calculator.git
cd dynamic-pricing-calculator
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the dev server

```bash
npm run dev
```

### 4. Open in browser

Visit: `http://localhost:5173`

---

## 🧱 Project Structure

```
src/
│
├── components/           # Reusable UI components
│   ├── GlobalCard.tsx
│   ├── ConfigurationCard.tsx
│   └── PricingCard.tsx
│
├── utils/
│   ├── types.ts          # Shared TypeScript types
│   └── const.ts          # Base & addon prices
│
├── App.tsx               # Main app entry
└── main.tsx              # Renders app with Vite
```

---

## 📦 Build for Production

```bash
npm run build
```

---

## 📄 License

MIT – free to use and modify.

---

## 🙌 Acknowledgements

- Built with ❤️ using React and Tailwind CSS.
