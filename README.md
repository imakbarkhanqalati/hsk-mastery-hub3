# HSK Mastery Hub

A comprehensive platform for learning Chinese and preparing for the HSK exams. This application provides vocabulary lists, interactive practice sessions, quizzes, a dictionary, and AI-generated personalized study plans.

## Features

- **Learn**: Browse vocabulary by HSK level with detailed explanations
- **Practice**: Interactive practice sessions with multiple modes
- **Quizzes**: Test your knowledge with adaptive quizzes
- **Dictionary**: Look up Chinese words and characters
- **Study Plan**: Generate personalized study plans using AI
- **Lessons**: Structured lessons for systematic learning

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Gemini API key for the AI study plan feature

### Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
   You can get a Gemini API key from [Google AI Studio](https://aistudio.google.com/)

### Running the Application

```
npm run dev
```

The application will be available at http://localhost:5173

### Building for Production

```
npm run build
```

### Deployment

To prepare the application for deployment, you can use one of the following methods:

#### Using npm script
```
npm run deploy
```

#### Using Gulp

This project uses Gulp for task automation. The following Gulp tasks are available:

```
npm run gulp        # Default task: clean and build
npm run clean       # Remove the dist directory
npm run gulp:dev    # Start the development server
npm run gulp:build  # Build the project
npm run deploy      # Clean, build, and prepare for deployment
```

You can also run Gulp tasks directly using:

```
npx gulp          # Run the default task
npx gulp clean    # Run the clean task
npx gulp dev      # Run the dev task
npx gulp build    # Run the build task
npx gulp deploy   # Run the deploy task
```

#### Using deployment scripts

For Windows:
```
.\deploy.bat
```

For Unix/Linux/macOS:
```
chmod +x ./deploy.sh
./deploy.sh
```

After running any of these commands, the application will be built and ready for deployment. The built files will be in the `dist` directory, which you can upload to any static hosting service like Netlify, Vercel, GitHub Pages, or any web server.

## Technologies Used

- React
- TypeScript
- Vite
- Google Gemini AI API
- Three.js (for background effects)

## Performance Optimizations

- **Code Splitting**: The application uses dynamic imports and React.lazy for component-level code splitting
- **Lazy Loading**: Components are loaded only when needed, reducing initial bundle size
- **Chunk Optimization**: Major libraries and large components are separated into their own chunks
- **Bundle Size Management**: Custom Vite configuration to optimize production builds

## Project Structure

- `/components`: React components for different pages and features
- `/data`: Static data for vocabulary and lessons
- `/types.ts`: TypeScript type definitions
