const fs = require('fs');
const d = JSON.parse(fs.readFileSync('./lighthouse-report-v3.json', 'utf8'));

console.log('Performance:', d.categories.performance.score * 100);
console.log('Accessibility:', d.categories.accessibility.score * 100);
console.log('Best Practices:', d.categories['best-practices'].score * 100);
console.log('SEO:', d.categories.seo.score * 100);
console.log('LCP:', d.audits['largest-contentful-paint'].displayValue);
console.log('CLS:', d.audits['cumulative-layout-shift'].displayValue);
console.log('INP:', d.audits['interactive'] ? d.audits['interactive'].displayValue : 'N/A');
