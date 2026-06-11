const fs = require('fs');
const css = fs.readFileSync('C:/Users/James/Desktop/Antigravity GreenLabz Wibify/wibify_styles.css', 'utf8');
const regex = /([^\{\}]*(?:\.work-link|\.text-roll|\.works)[^\{\}]*)\{([^\}]+)\}/g;
let match;
const rules = [];
while ((match = regex.exec(css)) !== null) {
  rules.push(match[1].trim() + ' { ' + match[2].trim() + ' }');
}
fs.writeFileSync('extracted_rules.css', rules.join('\n\n'));
console.log('Extracted', rules.length, 'rules');
