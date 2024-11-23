// openReport.js

(async () => {
    const open = (await import('open')).default; // Dynamic import
  
    // Open the generated report in the default browser
    open('./reports/index.html');
  })();
  