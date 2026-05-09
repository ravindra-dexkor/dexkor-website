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

  // Fix hovers that were incorrectly assigned static dark backgrounds
  content = content.replace(/hover:bg-slate-50 dark:bg-white\/5/g, 'hover:bg-slate-50 dark:hover:bg-white/5');
  content = content.replace(/hover:bg-slate-100 dark:bg-white\/10/g, 'hover:bg-slate-100 dark:hover:bg-white/10');
  content = content.replace(/hover:bg-slate-50 dark:bg-slate-900\/50/g, 'hover:bg-slate-50 dark:hover:bg-slate-900/50');

  // Fix duplicate dark text classes
  content = content.replace(/dark:text-slate-700 dark:text-slate-700/g, 'dark:text-slate-700');
  content = content.replace(/dark:text-slate-700 dark:text-slate-700/g, 'dark:text-slate-700');

  fs.writeFileSync(file, content);
});
console.log('Cleaned up hover states and duplicates');
