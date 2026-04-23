import fs from 'fs';

let content = fs.readFileSync('src/app/inquiry/page.jsx', 'utf8');

const replacement = `    const sendEmail = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const emailjs = (await import('@emailjs/browser')).default;
            const result = await emailjs.sendForm('service_2vjma3d', 'template_eozapdl', form.current, 'cZQf4Tev6rhPpsGcI');
            console.log(result.text);
            setStatus('success');
            form.current.reset();
        } catch (error) {
            console.log(error.text || error);
            setStatus('error');
        }
    };`;

content = content.replace(/    const sendEmail = \(e\) => \{[\s\S]*?\};/, replacement);
fs.writeFileSync('src/app/inquiry/page.jsx', content, 'utf8');
