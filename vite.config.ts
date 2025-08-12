import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      base: '/hsk-mastery-hub-new/', // Make sure this matches your repo name
      build: {
        rollupOptions: {
          output: {
            manualChunks: (id) => {
              // Create separate chunks for major libraries
              if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
                return 'react-vendor';
              }
              if (id.includes('node_modules/@google/genai')) {
                return 'genai-vendor';
              }
              if (id.includes('node_modules/three')) {
                return 'three-vendor';
              }
              // Create separate chunks for large components
              if (id.includes('/components/QuizzesPage')) {
                return 'quizzes-chunk';
              }
              if (id.includes('/components/PracticePage')) {
                return 'practice-chunk';
              }
              if (id.includes('/components/StudyPlanPage')) {
                return 'studyplan-chunk';
              }
              if (id.includes('/data/vocab')) {
                return 'vocab-data-chunk';
              }
            }
          }
        },
        chunkSizeWarningLimit: 600
      }
    };
});
