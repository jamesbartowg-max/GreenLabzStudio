import fs from 'fs';
import https from 'https';

const content = fs.readFileSync('C:/Users/James/.gemini/antigravity/brain/e94a0c4e-b0b3-44ad-a118-bed493c3e260/.system_generated/steps/1097/content.md', 'utf8');
const links = [...content.matchAll(/href=\"(\/_next\/static\/chunks\/[^\"]+\.css[^\"]*)\"/g)].map(m => 'https://wibify.agency' + m[1].split('?')[0]);

Promise.all(links.map(l => new Promise(resolve => {
  https.get(l, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => resolve(data));
  });
}))).then(texts => {
  fs.writeFileSync('wibify_styles.css', texts.join('\n'));
  console.log('Saved css, length:', texts.join('\n').length);
});
