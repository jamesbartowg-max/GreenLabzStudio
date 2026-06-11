const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      let modified = content;
      // Replace text-gl-green with text-gradient-logo in lowercase tags only
      modified = content.replace(/(<[a-z][a-z0-9]*[^>]*className=['"][^'"]*)text-gl-green([^'"]*['"][^>]*>)/g, '$1text-gradient-logo$2');
      
      if (content !== modified) {
        fs.writeFileSync(fullPath, modified);
        console.log('Updated', fullPath);
      }
    }
  }
}

processDir('./src');
