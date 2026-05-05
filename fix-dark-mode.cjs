const fs = require('fs');
const files = [
  'components/PlatformMegaMenu.tsx',
  'components/SolutionsMegaMenu.tsx',
  'components/CustomersMegaMenu.tsx',
  'components/ResourcesMegaMenu.tsx',
  'components/CompanyMegaMenu.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Fix text colors
  content = content.replace(/text-slate-900/g, 'text-slate-900 dark:text-white');
  content = content.replace(/text-slate-600/g, 'text-slate-600 dark:text-slate-300');
  content = content.replace(/text-slate-400/g, 'text-slate-400 dark:text-slate-500'); // sometimes slate-400 is too light for light mode? No, slate-400 is fine.
  
  // Clean up duplicate darks if any
  content = content.replace(/dark:text-white dark:text-white/g, 'dark:text-white');
  content = content.replace(/dark:bg-slate-950 dark:text-white dark:text-white/g, 'dark:bg-slate-950 dark:text-white');
  
  // Fix nested cards and shadows
  content = content.replace(/bg-white rounded-2xl/g, 'bg-white dark:bg-slate-900 rounded-2xl');
  content = content.replace(/shadow-lg shadow-indigo-200/g, 'shadow-lg shadow-indigo-200 dark:shadow-none');
  content = content.replace(/shadow-lg shadow-blue-200/g, 'shadow-lg shadow-blue-200 dark:shadow-none');
  
  fs.writeFileSync(file, content);
});
console.log('Fixed missing dark mode text classes');
