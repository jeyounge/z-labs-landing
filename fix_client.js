import fs from 'fs';

const files = [
  'src/app/services/lotto/page.jsx',
  'src/app/services/baseball/page.jsx',
  'src/app/services/balance/page.jsx',
  'src/app/blog/page.jsx'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  if (!content.includes('"use client"')) {
    content = '"use client";\n' + content;
    fs.writeFileSync(file, content, 'utf8');
  }
}
