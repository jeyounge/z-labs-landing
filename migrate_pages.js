import fs from 'fs';
import path from 'path';

const files = [
  'src/app/page.jsx',
  'src/app/blog/page.jsx',
  'src/app/blog/[slug]/page.jsx',
  'src/app/services/balance/page.jsx',
  'src/app/services/lotto/page.jsx',
  'src/app/services/baseball/page.jsx',
  'src/app/privacy/page.jsx',
  'src/app/terms/page.jsx',
  'src/app/inquiry/page.jsx'
];

for (const file of files) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Add use client
    if (file.includes('framer-motion') || file.includes('useState') || ['src/app/page.jsx', 'src/app/blog/page.jsx', 'src/app/blog/[slug]/page.jsx', 'src/app/services/balance/page.jsx', 'src/app/services/lotto/page.jsx', 'src/app/services/baseball/page.jsx', 'src/app/inquiry/page.jsx'].includes(file)) {
       content = '"use client";\n' + content;
    }

    // Replace react-router-dom
    content = content.replace(/import \{ Link \} from 'react-router-dom';/g, "import Link from 'next/link';");
    content = content.replace(/import \{ useParams, Link, useNavigate \} from 'react-router-dom';/g, "import Link from 'next/link';\nimport { useParams, useRouter } from 'next/navigation';");
    content = content.replace(/import \{ Link, useLocation \} from 'react-router-dom';/g, "import Link from 'next/link';\nimport { usePathname } from 'next/navigation';");
    
    // Replace Link props
    content = content.replace(/<Link\s+to=/g, "<Link href=");
    
    // Remove Navbar and SEO imports
    content = content.replace(/import Navbar from '[^']+';\n?/g, "");
    content = content.replace(/import SEO from '[^']+';\n?/g, "");
    
    // Remove Navbar and SEO usage
    content = content.replace(/<Navbar \/>\n?/g, "");
    content = content.replace(/<SEO[\s\S]*?\/>\n?/g, "");
    
    // Replace navigate
    content = content.replace(/const navigate = useNavigate\(\);/g, "const router = useRouter();");
    
    // Fix paths
    content = content.replace(/from '\.\.\/data\/blogPosts'/g, "from '@/data/blogPosts'");
    content = content.replace(/from '\.\.\/\.\.\/data\/blogPosts'/g, "from '@/data/blogPosts'");
    
    fs.writeFileSync(file, content, 'utf8');
  }
}
console.log('Migration done.');
