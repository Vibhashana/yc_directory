# YC Directory

A modern web application for startup pitches built with Next.js 14, Sanity CMS, and TypeScript. The platform allows users to submit, view, and explore startup pitches with a clean and intuitive interface.

## Features

- 🚀 Modern tech stack with Next.js 14 and TypeScript
- 📝 Markdown editor for pitch submissions
- 🔐 Authentication system
- 📊 View tracking for pitches
- 🖼️ Image handling with remote patterns support
- 🔍 Search functionality
- 🎯 Category-based filtering
- ⚡ Real-time content updates
- 💾 Sanity CMS backend integration
- 🎨 Clean & modern UI with TailwindCSS
- 📱 Responsive design


## Tech Stack

- **Frontend Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Sanity.io
- **Authentication**: NextAuth.js
- **Markdown**: Markdown-it & MDEditor
- **Font**: Work Sans (custom)
- **UI Components**: Shadcn UI

## Getting Started

1. Clone the repository
2. Install dependencies:
```bash:terminal
npm install
```
3. Set up environment variables:
```
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

## Project Structure

- `/app` - Next.js application routes and pages
- `/components` - Reusable React components
- `/sanity` - Sanity CMS configuration and schemas
- `/lib` - Utility functions and actions
- `/hooks` - Custom React hooks
- `/public` - Static assets
- `/hooks` - Custom React hooks
- `/types` - TypeScript types
- `/utils` - Utility functions

### Sanity Schema
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

## Features in Detail

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

## Development

The project uses several development tools and configurations:

- `ESLint` for code linting
- `Prettier` for code formatting
- `TypeScript` for type safety
- `Tailwind CSS` for styling
- `Sanity TypeGen` for type generation