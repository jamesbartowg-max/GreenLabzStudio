const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('wibify_temp.html', 'utf8');
const $ = cheerio.load(html);

const faqSection = $('section').filter((i, el) => $(el).text().includes('Fragen')).html() || 'FAQ not found';
const footerSection = $('footer').html() || 'Footer not found';

fs.writeFileSync('faq_out.html', faqSection);
fs.writeFileSync('footer_out.html', footerSection);
console.log("Done");
