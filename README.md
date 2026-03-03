# 📝 Cover Letter Generator

Cover letter generator that helps job seekers create personalized, professional cover letters quickly and efficiently.

[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18-61dafb)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.0-646cff)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ Features

- 🎨 **Customizable Tone** — Adjust the formality and length of generated letters
- 📋 **One-Click Copy** — Instantly copy generated text to clipboard
- 📱 **Responsive Design** — Works seamlessly on desktop, tablet, and mobile
- 🔄 **Generation History** — Automatically save and access recent cover letters

## 🛠 Tech Stack

- **Frontend:** React 19, TypeScript, React Router DOM 7
- **Build Tool:** Vite
- **Styling:** SCSS Modules
- **Linting/Formatting:** ESLint, Prettier, Stylelint, husky, lint-staged
- **Package Manager:** pnpm
- **Node.js Version:** 20+

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v20 or higher)
- **pnpm** (v8 or higher)

Check your versions:

```bash
node --version
pnpm --version

## 📁 Project Structure

cover-letter-generator/
├── .husky/                    # Git hooks
│   └── pre-commit            # Pre-commit hook
├── .lintstagedrc.yml         # Lint-staged configuration
├── .prettierrc.yml           # Prettier config
├── eslint.config.js          # ESLint configuration
├── stylelint.config.js       # Stylelint config
├── index.html                # HTML template
├── package.json              # Dependencies and scripts
├── pnpm-lock.yaml            # Lockfile
├── tsconfig*.json            # TypeScript configs
├── vite.config.ts            # Vite configuration
├── vercel.json               # Vercel deployment config
├── public/                   # Static assets
├── src/
│   ├── main.tsx             # App entry point
│   ├── app/                  # Application core
│   │   ├── Layout/           # Main layout wrapper
│   │   ├── providers/        # Context providers
│   │   ├── router/           # Routing configuration
│   │   └── styles/           # Global styles
│   ├── pages/                 # Page components
│   ├── widgets/               # Complex UI blocks
│   └── shared/                 # Reusable code
│       ├── assets/             # Static resources
│       ├── constants/          # App constants
│       ├── lib/                # Utilities
│       ├── types/              # TypeScript types
└──         └── ui/                 # UI components