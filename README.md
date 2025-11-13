# Twitter Clone

A cross-platform social media application built with React Native and Expo that runs on iOS, Android, and Web. This project demonstrates a full-featured Twitter-like social network with authentication, tweet management, user profiles, and real-time data synchronization.

**Current Status:** Active Development | **Branch:** `dev`

---

## Features

- **Tweet Feed** - Paginated infinite scroll with pull-to-refresh
- **Create Tweets** - Post new tweets with 280 character limit
- **User Profiles** - View user information and their tweets
- **Authentication** - Login/Register with persistent sessions
- **Onboarding Flow** - Welcome and setup screens
- **Cross-Platform** - Runs natively on iOS, Android, and Web
- **Responsive Design** - Adapts to different screen sizes

---

## Tech Stack

| Category             | Technology                                      |
| -------------------- | ----------------------------------------------- |
| **Framework**        | Expo 54.0.23, React Native 0.81.5, React 19.1.0 |
| **Navigation**       | Expo Router (file-based), React Navigation 7.x  |
| **Styling**          | NativeWind + Tailwind CSS 3.4.17                |
| **State Management** | Zustand 5.0.8                                   |
| **API Client**       | Axios 1.13.2                                    |
| **Language**         | TypeScript 5.9.2                                |
| **Storage**          | expo-secure-store (native), localStorage (web)  |

---

## Quick Start

### Prerequisites

- Node.js 18+
- Yarn or npm
- Expo CLI (optional)

### Installation

1. **Install dependencies**

   ```bash
   yarn install
   ```

2. **Configure environment variables**

   ```bash
   cp .env.example .env
   ```

   Update `.env` with your API configuration

3. **Start the app**
   ```bash
   yarn dev
   ```

### Available Commands

```bash
yarn start          # Start Expo development server
yarn dev            # Start with tunnel (remote development)
yarn android        # Run on Android emulator
yarn ios            # Run on iOS simulator
yarn web            # Run in web browser
yarn lint           # Run ESLint
```

---

## API Integration

The app connects to a Twitter API backend. Configuration is managed through environment variables:

```env
EXPO_PUBLIC_API_ROOT_URL=https://api.example.com/api
```

## Development

### File-Based Routing

This project uses [Expo Router](https://docs.expo.dev/router/introduction/) for file-based routing, similar to Next.js. Routes are automatically generated from the file structure in `src/app/`.

### State Management

Global state is managed with [Zustand](https://github.com/pmndrs/zustand) in `src/store/`. The store includes:

- `authStore` - User authentication and session state
- `bootStore` - App initialization state

### Styling

Uses [NativeWind](https://www.nativewind.dev/) for Tailwind CSS integration with React Native. Global styles are in `src/styles/index.css`.

### Type Safety

The project uses strict TypeScript. Type definitions are located in `src/types/` and enforced throughout the codebase.

---

## Resources

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [Expo Router Guide](https://docs.expo.dev/router/introduction/)
- [Zustand Documentation](https://github.com/pmndrs/zustand)
- [NativeWind Documentation](https://www.nativewind.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---
