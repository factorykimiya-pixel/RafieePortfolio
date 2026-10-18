export const profile = {
  name: 'محمدرضا احمدی',
  title: 'توسعه‌دهنده و طراح وبسایت',
  location: 'ایران ، مشهد',
  email: 'mohammadahmadicoder@gmail.com',
  github: 'https://github.com/mohammadRezAhmadi',
  linkedin: 'https://www.linkedin.com/in/mhmrez/',
  resumeUrl: '/cv.pdf',
  avatar: "./mhmrez.jpg",
  typewriterTexts: [
    'توسعه‌دهنده فرانت‌اند',
    'طراح رابط کاربری مدرن',
    'طراح سایت های فروشگاهی',
    'طراح سایت های فروشگاهی',
  ],
  bio: `من یک طراح و توسعه‌دهنده وب با بیش از ۴ سال تجربه در زمینه طراحی وب‌سایت‌های شرکتی و فروشگاهی، توسعه وردپرس و بهینه‌سازی سئو هستم. تمرکز من بر ارائه وب‌سایت‌هایی سریع، مدرن و کاربرمحور است که علاوه بر طراحی حرفه‌ای، به رشد کسب‌وکار، افزایش فروش و بهبود حضور آنلاین برندها کمک کنند.
`
};

export const navItems = [
  { id: 'hero', label: 'خانه' },
  { id: 'skills', label: 'مهارت‌ها' },
  { id: 'experience', label: 'سوابق' },
  { id: 'projects', label: 'پروژه‌ها' },
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
    title: 'فروشگاه اینترنتی قهوه تبریزی',
    description: 'فروشگاه انلاین قهوه تبریزی ',
    image: projectImage('فروشگاه آنلاین', '#7c3aed', '#db2777'),
    photo: "./tabrizi-coffee.png",
    tags: ['Worpress', 'Elementor', 'JetEngine' , "Css"],
    link: 'https://tabrizicoffee.ir',
  },
  {
    title: 'فروشگاه اینترنتی پروشات',
    description: 'فروشگاه آنلاین با سبد خرید، درگاه پرداخت ، سیستم پیامکی برای مشتری و ادمین وبسایت و امکانات دیگر..',
    image: projectImage('فروشگاه آنلاین', '#7c3aed', '#db2777'),
    photo: "./proshutstore.png",
    tags: ['Worpress', 'Elementor', 'JetEngine' , "Css"],
    link: 'https://proshutstore.ir',
  },
  {
    title: 'وبسایت فروشگاهی شومال',
    description: 'وبسایت فروشگاهی و چند فروشندگی و با امکان محاسبه موقعیت جغرافیایی',
    image: projectImage('فروشگاه شومال', 'Showmall.png',),
    photo:"Showmall.png",
    tags: ['Js', 'Leaflet', 'Css'],
    link: 'https://showmall.ir/home1.axd',
  },
  {
    title: 'پروژه پایانی دانشگاه',
    description: 'پروژه برگزاری جشنواره و مسابقه برای دانشجویان توسط مدیران دانشگاه و قابلیت تعریف امتیاز و امکان چت زنده و ایجاد گروه با دانشجویان و مدیران',
    image: projectImage('برگزاری مسابقه', '#0284c7', '#059669'),
    photo:"./university.png",
    tags: ['Js', 'Firebase', 'API' , "React" , "Tailwind Css"],
    link: 'https://customer-club-univercity.vercel.app/',
  },
  {
    title: 'رزومه آنلاین',
    description: 'پورتفولیوی شخصی تعاملی با انیمیشن‌های روان و طراحی واکنش‌گرا.Spa طراحی شده یا سرعت بسیار بالا',
    image: projectImage('رزومه آنلاین', '#d97706', '#dc2626'),
    photo:"portfolio.png",
    tags: ['React', 'Tailwind', 'Chartjs' , 'React-Router-dom'],
    link: 'https://portfolio-beige-tau-46.vercel.app/',
  },
  {
    title: 'صفحه لندینگ و صفحات ثبت نام',
    description: 'طراحی صفحه اول سایت نمایشگاه بزرگ تهران با انیمیشن های متعدد و طراحی صفحات ثبت نام غرفه و غیره',
    image: projectImage('ایران اکسپو', './Iranexpo.png'),
    photo: "Iranexpo.png",
    tags: ['Jquery', 'Css', 'OwlCarousel' , 'JS'],
    link: 'http://expotechs.ir/home.axd',
  },
];
