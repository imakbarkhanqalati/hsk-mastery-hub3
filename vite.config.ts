import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  base: '/hsk-mastery-hub3/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'react-vendor';
          }
          if (id.includes('node_modules/three')) {
            return 'three-vendor';
          }
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
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
});
