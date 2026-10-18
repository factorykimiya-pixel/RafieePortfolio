export const profile = {
  name: 'محمد مهدی رفیعی',
  title: 'کارآفرین | تولیدکننده | صادرکننده | مدرس فروش و بازاریابی',
  location: 'ایران ، مشهد',
  email: '',
  github: '',
  linkedin: '',
  resumeUrl: '',
  avatar: "./mahdi-rafiee.webp",
  typewriterTexts: [
    '۲۵ سال تجربه در مدیریت، تولید و توسعه کسب‌وکار',
    'کارآفرین و صادرکننده',
    'مدرس فروش و بازاریابی',
  ],
  bio: `مالک و مدیرعامل شرکت کیمیا دستاورد ابتکار ایرانیان؛ فعال در حوزه صنعت پوشاک، مدیریت تولید، توسعه برند، تجارت داخلی و خارجی و آموزش حرفه‌ای فروش.

با رویکردی مبتنی بر تجربه، بهره‌وری و توسعه بازار، به دنبال ایجاد مشارکت‌های اقتصادی پایدار و فرصت‌های جدید سرمایه‌گذاری هستم.`
};

export const navItems = [
  { id: 'hero', label: 'خانه' },
  { id: 'experience', label: 'سوابق' },
  { id: 'contact', label: 'تماس' },
];

export const skillTags = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'Tailwind CSS',
  'Vite',
  'Git',
  'Figma',
  'REST API',
  'SPA',
  "Wordpress",
  "WooCammerce",
  "Elementor",
  "SEO"
];

export const skillBars = [
  { name: 'توسعه فرانت‌اند', level: 92 },
  { name: 'طراحی واکنش‌گرا', level: 95 },
  { name: 'جاوااسکریپت ', level: 88 },
  { name: 'بهینه‌سازی عملکرد و سرعت سایت', level: 85 },
  { name: 'امنیت وبسایت', level: 90 },
  { name: 'افزایش فروش و سعو وبسایت', level: 90 },
];

export const experiences = [
  {
    period: '1405 — اکنون',
    role: 'طراح و توسعه‌دهنده وب – فریلنسر',
    company: 'فریلنسر',
    description:
      'طراحی و توسعه وب‌سایت‌های اختصاصی و وردپرسی برای کسب‌وکارها و برندهای مختلف؛ از طراحی رابط کاربری و پیاده‌سازی صفحات تا راه‌اندازی فروشگاه اینترنتی، بهینه‌سازی سرعت، سئو و پشتیبانی فنی.',
    tags: ['Wordpress', 'SEO' , 'Elementor' , "Html , Css" , "gasp - threeJs" , "React Js" , "Shadcn" , "tailwindCss"],
  },
  {
    period: '1405 — اکنون',
    role: 'وبمستر وبسایت پروشات استور',
    company: 'کارخانه کیمیا',
    description:
      'پشتیبان و توسعه دهنده سئو و امنیت و بهبود سرعت وبسایت proshutstore.ir',
    tags: ['Wordpress', 'SEO', 'WooCommerce' , 'Elementor'],
  },
  {
    period: '1403 — 1404',
    role: 'توسعه‌دهنده فرانت‌اند',
    company: 'داده گستران پژواک آریا',
    description:
      ' طراحی وبسایت های دولتی ، وبسایت های بیمه ، وبسایت نمایشگاه بزرگ تهران ، وبسایت برای زائرین اما رضا و فروشگاهی. ',
    tags: ['Javascript', 'Jquery', 'html , css'],
  },
  {
    period: '1401 — 1402',
    role: 'کارآموز وردپرس',
    company: 'آذران صنعت',
    description:
      'یاد گیری طراحی وبسایت با Elementor و طراحی لندینگ های اختصاصی و تولید محتوا متنی',
    tags: ['WordPress', 'Css', 'Elementor'],
  },
  {
    period: '1400 — 1401',
    role: 'کارآموز بلاکچین',
    company: 'Archie',
    description:
      'طراحی قراردادهای هوشمند بر بستر بلاکچین و دپلوی توکن ها و NFT ها',
    tags: ['Solidity', 'Muka', 'NFT'  , "BlockChain"],
  },
];

const svgFont = 'Vazirmatn, Tahoma, sans-serif';

function projectImage(title, color1, color2) {
  return (
    'data:image/svg+xml,' +
    encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="240" viewBox="0 0 400 240"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:${color1}"/><stop offset="100%" style="stop-color:${color2}"/></linearGradient></defs><rect fill="url(#g)" width="400" height="240"/><text x="200" y="125" text-anchor="middle" fill="white" font-family="${svgFont}" font-size="20">${title}</text></svg>`)
  );
}

export const projects = [
  {
    title: 'ساختمان اداری کارخانه کیمیا',
    description: '',
    image: projectImage(),
    photo: "./Kimiya-company-6.webp",
    tags: [],
    link: 'https://proshutstore.ir/about-us/',
  },
  {
    title: 'نمایی از خط تولید کارخانه کیمیا',
    description: '',
    image: projectImage(),
    photo: "./Kimiya-company-4.webp",
    tags: [],
    link: 'https://proshutstore.ir/about-us/',
  },
  {
    title: 'کارخانه کیمیا',
    description: '',
    image: projectImage(),
    photo:"bb5a2475-0095-4c1d-b56f-1809ac33a879.webp",
    tags: [],
    link: 'https://proshutstore.ir/about-us/',
  },
  {
    title: 'کارخانه کیمیا',
    description: '',
    image: projectImage(),
    photo:"./All-the-team-kimiya.webp",
    tags: [],
    link: 'https://proshutstore.ir/about-us/',
  },
];
