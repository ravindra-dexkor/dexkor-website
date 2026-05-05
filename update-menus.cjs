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
  content = content.replace(
    /className="absolute left-4 right-4 lg:left-1\/2 lg:-translate-x-1\/2 lg:w-\[calc\(100%-4rem\)\] lg:max-w-7xl top-full mt-2 rounded-2xl bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors shadow-2xl z-\[110\] border border-slate-200 dark:border-white\/10 overflow-y-auto max-h-\[calc\(100vh-100px\)\] scrollbar-hide"/g,
    'className="absolute left-2 right-2 lg:left-6 lg:right-6 top-full mt-2 rounded-2xl bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors shadow-2xl z-[110] border border-slate-200 dark:border-white/10 overflow-y-auto max-h-[calc(100vh-100px)] scrollbar-hide w-auto"'
  );
  fs.writeFileSync(file, content);
});
console.log('Updated MegaMenus to have less margin');
