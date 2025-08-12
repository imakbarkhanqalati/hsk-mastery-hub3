// gulpfile.js
import gulp from 'gulp';
import { deleteAsync } from 'del';

// Clean task - removes the dist directory
const clean = () => deleteAsync(['dist']);

// Build task - runs the Vite build process
const build = (done) => {
  const { spawn } = require('child_process');
  const buildProcess = spawn('npm', ['run', 'build'], { stdio: 'inherit', shell: true });
  
  buildProcess.on('close', (code) => {
    if (code === 0) {
      done();
    } else {
      done(new Error(`Build process exited with code ${code}`));
    }
  });
};

// Dev task - starts the development server
const dev = (done) => {
  const { spawn } = require('child_process');
  const devProcess = spawn('npm', ['run', 'dev'], { stdio: 'inherit', shell: true });
  
  devProcess.on('close', (code) => {
    if (code === 0) {
      done();
    } else {
      done(new Error(`Dev process exited with code ${code}`));
    }
  });
};

// Deploy task - runs the build and then any deployment steps
const deploy = gulp.series(clean, build, (done) => {
  console.log('Build completed. Ready for deployment!');
  done();
});

// Default task
const defaultTask = gulp.series(clean, build);

// Export tasks
export { clean, build, dev, deploy };
export default defaultTask;