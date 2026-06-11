const fs = require('fs');
const content = fs.readFileSync('C:/Users/James/.gemini/antigravity/brain/e94a0c4e-b0b3-44ad-a118-bed493c3e260/.system_generated/steps/1097/content.md', 'utf8');
const sections = [...content.matchAll(/<section[^>]*id=\"([^\"]+)\"[^>]*>/g)];
console.log("Sections by ID:", sections.map(m => m[1]).join(', '));
const classSections = [...content.matchAll(/<section[^>]*class=\"([^\"]+)\"[^>]*>/g)];
console.log("Sections by Class:", classSections.map(m => m[1]).join(', '));
