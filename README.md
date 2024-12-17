# YC Directory

A modern web application for startup pitches built with Next.js 15, Sanity CMS, and TypeScript. The platform allows users to submit, view, and explore startup pitches with a clean and intuitive interface.

![Next.js Badge](https://img.shields.io/badge/Next.js-000?logo=nextdotjs&logoColor=fff&style=flat-square) ![TypeScript Badge](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff&style=flat-square) ![Tailwind CSS Badge](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=fff&style=flat-square) ![shadcn/ui Badge](https://img.shields.io/badge/shadcn%2Fui-000?logo=shadcnui&logoColor=fff&style=flat-square) ![Sanity Badge](https://img.shields.io/badge/Sanity-F03E2F?logo=sanity&logoColor=fff&style=flat-square) ![Zod Badge](https://img.shields.io/badge/Zod-3E67B1?logo=zod&logoColor=fff&style=flat-square) ![Sentry Badge](https://img.shields.io/badge/Sentry-362D59?logo=sentry&logoColor=fff&style=flat-square)

## ✨ Features

- 🚀 Built with Next.js 15 App Router and TypeScript
- 📝 Markdown editor for pitch submissions
- 🔐 Secure authentication with NextAuth.js
- 🖼️ Optimized image handling with Next.js Image
- 🔍 Search functionality
- 👁️ View tracking
- 🎯 Category-based filtering
- ⚡ Live content updates via Sanity.io
- 💾 Sanity CMS backend integration
- 🎨 Clean & modern UI with TailwindCSS and Shadcn/UI
- 📱 Responsive design
- 🔒 Type-safe development with TypeScript
- 📊 SEO optimized
- 🪲 Bug tracking and monitoring with Sentry


## 🛠️ Tech Stack

- **Frontend Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Sanity.io
- **Authentication**: NextAuth.js
- **Markdown**: Markdown-it & MDEditor
- **Font**: Work Sans (custom)
- **UI Components**: Shadcn UI
- **Form Validation**: Zod

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies:
    ```bash:terminal
    npm install
    ```
3. Set up environment variables:
    ```bash
    # for authentication (GitHub):
    AUTH_SECRET=
    AUTH_GITHUB_ID=
    AUTH_GITHUB_SECRET=

    # for sanity:
    NEXT_PUBLIC_SANITY_PROJECT_ID=
    NEXT_PUBLIC_SANITY_DATASET=
    NEXT_PUBLIC_SANITY_API_VERSION=
    SANITY_WRITE_TOKEN=
    ```
4. Run the development server:
    ```bash:terminal
    npm run dev
    ```
5. Access Sanity Studio at `/studio` route

## 📁 Project Structure

- `/app` - Next.js application routes and pages
- `/components` - Reusable React components
- `/sanity` - Sanity CMS configuration and schemas
- `/lib` - Utility functions and actions
- `/hooks` - Custom React hooks
- `/public` - Static assets
- `/types` - TypeScript types
- `/utils` - Utility functions

## 🗄️ Sanity Schema
The project includes two main content types:

**Startup**
  - Title
  - Slug
  - Author reference
  - Views count
  - Description
  - Category
  - Image
  - Pitch (Markdown)

**Author**
  - Name
  - Username
  - Email
  - Image
  - Bio

## 🌟 Features in Detail

### Startup Submission
Users can submit their startups with:
- Title
- Description
- Category
- Image URL
- Detailed pitch (with Markdown support)

### Viewing Startups
- Detailed startup pages with view tracking
- Category filtering
- Author profiles
- Responsive image handling

### Authentication
- Secure user authentication
- Protected routes for startup submission

## 🔧 Development

The project uses several development tools and configurations:

- `ESLint` for code linting
- `Prettier` for code formatting
- `TypeScript` for type safety
- `Tailwind CSS` for styling
- `Sanity TypeGen` for type generation

## 🔍 Monitoring with Sentry

The application uses Sentry for error tracking and performance monitoring:

- **Error Tracking**: Automatic capture of runtime errors and exceptions
- **Performance Monitoring**: Track page load times and API calls
- **Session Replay**: Reproduce issues with session replay feature
- **Release Tracking**: Monitor deployments and releases
- **Environment Separation**: Different environments (development/production) tracking
- **Custom Error Boundaries**: Graceful error handling for better UX