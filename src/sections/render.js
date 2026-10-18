import { icons } from '../icons.js';
import {
  profile, navItems, impactStats, production, businessCards,
  experiences, credentials, partnershipAreas,
} from '../data/content.js';

const icon = (paths, classes='w-5 h-5') => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="${classes}" aria-hidden="true">${paths}</svg>`;
const miscIcons = {
  factory: icon('<path d="M3 21V9l6 4V9l6 4V4h6v17z"/><path d="M3 21h18M7 17h1M12 17h1M17 17h1"/>'),
  chart: icon('<path d="M3 3v18h18M7 16l4-5 4 3 5-8"/>'),
  globe: icon('<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/>'),
  handshake: icon('<path d="M2 8l5-3 4 2 2-1 4 1 5 4-4 6-4 2-3-1-2-2-2 1-5-6"/><path d="M7 5l-1 6 4 1 3-3M10 12l6 5M8 14l5 5"/>'),
  graduation: icon('<path d="M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5M22 10v7"/>'),
  shield: icon('<path d="M12 2l8 4v6c0 5-3 8-8 10-5-2-8-5-8-10V6z"/><path d="m9 12 2 2 4-4"/>'),
  arrow: icon('<path d="M19 12H5M11 18l-6-6 6-6"/>', 'w-4 h-4'),
  phone: icon('<path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.09 5.18 2 2 0 0 1 5.08 3h3a2 2 0 0 1 2 1.72c.13.96.35 1.9.67 2.8a2 2 0 0 1-.45 2.11L9.03 10.9a16 16 0 0 0 4.07 4.07l1.27-1.27a2 2 0 0 1 2.11-.45c.9.32 1.84.54 2.8.67A2 2 0 0 1 22 16.92z"/>'),
  users: icon('<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>'),
  check: icon('<path d="m5 12 4 4L19 6"/>', 'w-4 h-4'),
};
const sectionHeading = (eyebrow, title, text, pictogram=miscIcons.factory) => `
  <div class="reveal mb-9 sm:mb-12">
    <div class="section-badge">${pictogram} ${eyebrow}</div>
    <h2 class="section-title">${title}</h2>
    <p class="section-subtitle !mb-0">${text}</p>
  </div>`;

export function renderNavigation() {
  document.getElementById('nav-logo').innerHTML = `<span class="brand-monogram">MMR</span><span class="hidden sm:inline latin-name" dir="ltr">${profile.latinName}</span>`;
  document.getElementById('nav-links').innerHTML = navItems.map(item => `<li><a href="#${item.id}" class="nav-link" data-section="${item.id}">${item.label}</a></li>`).join('');
  document.getElementById('mobile-nav-links').innerHTML = navItems.map(item => `<li><a href="#${item.id}" class="nav-link block" data-section="${item.id}">${item.label}</a></li>`).join('');
}

export function renderHero() {
  const section = document.getElementById('hero');
  section.innerHTML = `
    <div class="w-full">
      <div class="grid lg:grid-cols-[minmax(0,1fr)_300px] gap-8 lg:gap-16 items-center w-full min-w-0">
        <div class="order-2 lg:order-1 min-w-0">
          <div class="hero-item hero-delay-1 section-badge"><span class="status-dot"></span> ${profile.eyebrow}</div>
          <p class="hero-item hero-delay-1 text-slate-500 dark:text-slate-400 text-sm mb-3">سلام، من</p>
          <h1 class="hero-item hero-delay-2 text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.3] tracking-tight text-slate-900 dark:text-white mb-4">${profile.name}</h1>
          <p class="hero-item hero-delay-3 text-lg sm:text-[1.45rem] font-semibold mb-6 min-h-[2.8rem] break-words"><span id="typewriter" class="typewriter-cursor gradient-text"></span></p>
          <p class="hero-item hero-delay-3 text-slate-600 dark:text-slate-300 text-base leading-[2.1] max-w-2xl">${profile.bio}</p>
          <div class="hero-item hero-delay-4 flex flex-wrap gap-3 mt-7 mb-3">
            <a href="#partnerships" class="btn-primary">${miscIcons.handshake} فرصت‌های همکاری ${miscIcons.arrow}</a>
            <a href="#about" class="btn-outline">درباره من ${icons.arrowLeft}</a>
          </div>
        </div>
        <div class="hero-item hero-delay-3 order-1 lg:order-2 flex justify-center min-w-0">
          <div class="profile-wrap w-full max-w-[285px]">
            <div class="profile-ring"></div>
            <div class="relative glass-card p-3.5 sm:p-4 w-full shadow-card">
              <div class="profile-photo relative overflow-hidden aspect-[4/4.5] rounded-xl bg-gradient-to-br from-primary-500 to-accent-500">
                <img src="${profile.avatar}" alt="تصویر محمد مهدی رفیعی، مدیرعامل شرکت کیمیا" class="w-full h-full object-cover object-top" loading="eager" fetchpriority="high" />
              </div>
              <div class="mt-4 text-center">
                <p class="font-bold text-lg text-slate-900 dark:text-white">${profile.name}</p>
                <p class="text-primary-600 dark:text-primary-400 text-xs leading-6 mt-1 font-medium">${profile.title}</p>
                <div class="flex justify-center items-center gap-1.5 mt-3 text-slate-500 dark:text-slate-400 text-xs">${icons.location} ${profile.location}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="hero-item hero-delay-5 mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        ${impactStats.map(s=>`<div class="stat-card"><div class="stat-value" dir="ltr">${s.value}</div><div class="stat-label">${s.label}</div></div>`).join('')}
      </div>
      <p class="text-xs leading-6 text-slate-400 dark:text-slate-500 mt-3 mr-1">* ظرفیت ماهانه، ظرفیت اسمی اعلام‌شده بر مبنای ۲۵ روز کاری است.</p>
    </div>`;
}

export function renderAbout() {
  const section = document.getElementById('about');
  section.innerHTML = `
    ${sectionHeading('درباره من', 'از تجربه تولید تا توسعه بازارهای تجاری', 'نگاهی کوتاه به مسیر حرفه‌ای و رویکرد مدیریتی من.', miscIcons.users)}
    <div class="grid lg:grid-cols-[1.2fr_0.8fr] gap-5">
      <article class="glass-card p-6 sm:p-9 reveal space-y-5">
        <h3 class="text-xl font-bold text-slate-900 dark:text-white">مدیریت، تولید و تجارت؛ در یک مسیر حرفه‌ای</h3>
        ${profile.about.map(text=>`<p class="text-slate-600 dark:text-slate-300 leading-[2.2]">${text}</p>`).join('')}
        <div class="flex gap-2 flex-wrap pt-1">
          ${['مدیریت صنعتی', 'تجارت و صادرات', 'توسعه برند', 'آموزش فروش'].map(s=>`<span class="business-chip">${s}</span>`).join('')}
        </div>
      </article>
      <aside class="glass-card p-7 sm:p-9 reveal flex flex-col justify-between relative overflow-hidden quote-card">
        <span class="text-6xl font-extrabold text-primary-500/30 select-none" aria-hidden="true">”</span>
        <blockquote class="text-lg sm:text-xl font-bold text-slate-800 dark:text-slate-100 leading-[2.05] mt-2 mb-8">${profile.quote}</blockquote>
        <div class="border-t border-slate-200/70 dark:border-slate-700/50 pt-5">
          <p class="font-semibold text-slate-900 dark:text-white">محمد مهدی رفیعی</p><p class="text-sm text-slate-500 dark:text-slate-400 mt-1">نگاه مدیریتی</p>
        </div>
      </aside>
    </div>`;
}

export function renderBusinesses() {
  const section = document.getElementById('businesses');
  section.innerHTML = `
    ${sectionHeading('مجموعه و برندها', 'فعالیت‌های اقتصادی تحت مدیریت', 'زیرساخت تولید، دو برند تجاری و ظرفیت پاسخ‌گویی به سفارش‌های سازمانی.')}
    <div class="grid md:grid-cols-3 gap-5">
      ${businessCards.map((item,i)=>`
        <article class="glass-card-hover overflow-hidden reveal business-card" style="transition-delay:${i*85}ms">
          <div class="business-cover relative overflow-hidden h-52"><img class="w-full h-full object-cover transition-transform duration-500" src="${item.image}" alt="${item.alt}" loading="lazy" /><span class="absolute bottom-3 right-3 badge-on-image">${item.kicker}</span></div>
          <div class="p-5 sm:p-6 flex flex-col flex-1">
            <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-3">${item.name}</h3>
            <p class="text-slate-600 dark:text-slate-300 text-sm leading-[2] mb-5 flex-1">${item.description}</p>
            <div class="flex flex-wrap gap-2 mb-6">${item.points.map(p=>`<span class="business-chip">${p}</span>`).join('')}</div>
            <a class="text-primary-600 dark:text-primary-400 text-sm font-bold inline-flex items-center gap-2 hover:underline" href="${item.link}" target="_blank" rel="noopener noreferrer">${item.linkLabel} ${icons.externalLink}</a>
          </div>
        </article>`).join('')}
    </div>
    <div class="mt-5 reveal glass-card p-4 sm:p-5 flex flex-col sm:flex-row gap-3 sm:items-center justify-between">
      <p class="text-slate-600 dark:text-slate-300 text-sm leading-8">${miscIcons.shield} <span class="align-middle">زیرساخت تولید و همکاری‌های بیرونی، امکان بررسی اجرای سفارش‌های عمده و پروژه‌های تأمین پوشاک سازمانی را فراهم می‌کند.</span></p>
      <a href="#partnerships" class="text-primary-600 dark:text-primary-400 font-bold text-sm whitespace-nowrap inline-flex gap-2 items-center">ظرفیت همکاری ${miscIcons.arrow}</a>
    </div>`;
}

export function renderProduction() {
  const section = document.getElementById('production');
  section.innerHTML = `
    ${sectionHeading('توان تولید', 'ظرفیت‌های تولیدی مجموعه', 'نمایی شفاف از ظرفیت اسمی خطوط تولید در سه گروه اصلی محصول.', miscIcons.chart)}
    <div class="glass-card p-6 sm:p-8 lg:p-10 reveal">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8">
        <div><p class="text-sm text-slate-500 dark:text-slate-400 mb-1">مجموع ظرفیت اسمی ماهانه</p><div class="flex items-baseline gap-2"><span class="text-4xl sm:text-5xl font-extrabold gradient-text" dir="ltr">۱۰۰٬۰۰۰</span><span class="text-sm font-medium text-slate-500 dark:text-slate-400">عدد پوشاک</span></div></div>
        <span class="production-total">۴٬۰۰۰ عدد در روز</span>
      </div>
      <div class="capacity-stacked" aria-label="پوشاک پزشکی ۵۰ درصد، رستورانی ۲۵ درصد، صنعتی ۲۵ درصد" role="img"><div class="capacity-part bg-primary-500" style="width:50%"></div><div class="capacity-part bg-sky-500" style="width:25%"></div><div class="capacity-part bg-violet-500" style="width:25%"></div></div>
      <div class="grid md:grid-cols-3 gap-4 mt-7">
        ${production.map((p,i)=>`<div class="production-item rounded-2xl border border-slate-200/70 dark:border-slate-700/60 p-5">
          <div class="flex items-center gap-2 mb-3"><span class="w-2.5 h-2.5 rounded-full ${['bg-primary-500','bg-sky-500','bg-violet-500'][i]}"></span><span class="text-xs font-medium text-slate-500 dark:text-slate-400">برند ${p.brand}</span></div>
          <h3 class="font-bold text-slate-900 dark:text-white mb-3">${p.title}</h3><div class="flex items-baseline gap-1"><strong class="text-2xl font-extrabold text-slate-900 dark:text-white">${p.monthly}</strong><span class="text-xs text-slate-500 dark:text-slate-400">عدد در ماه</span></div>
          <p class="text-sm text-slate-500 dark:text-slate-400 mt-3">${p.daily} عدد در روز</p><p class="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-6">${p.description}</p>
        </div>`).join('')}
      </div>
      <p class="text-xs text-slate-500 dark:text-slate-400 mt-6 leading-7">این ارقام ظرفیت اسمی اعلام‌شده خطوط تولید است و بر مبنای ۲۵ روز کاری در ماه محاسبه شده؛ به معنای تولید یا فروش محقق‌شده نیست.</p>
    </div>`;
}

export function renderExperience() {
  const section = document.getElementById('experience');
  section.innerHTML = `
    ${sectionHeading('سوابق و دستاوردها', 'مسیر حرفه‌ای من', 'تجربه اجرایی در مدیریت تولید، تجارت و پرورش تیم‌های فروش.', icons.briefcase)}
    <div class="relative mr-1">
      ${experiences.map((exp,i)=>`
        <div class="relative pr-10 pb-7 last:pb-0 reveal" style="transition-delay:${i*90}ms">
          <span class="timeline-dot z-10"></span>
          <article class="glass-card-hover p-5 sm:p-7">
            <div class="flex flex-wrap items-center gap-2 mb-3"><span class="experience-period">${exp.period}</span><span class="text-sm text-slate-500 dark:text-slate-400">${exp.company}</span></div>
            <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-3">${exp.role}</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300 leading-[2] mb-5">${exp.description}</p>
            <div class="flex flex-wrap gap-2">${exp.tags.map(t=>`<span class="business-chip">${t}</span>`).join('')}</div>
          </article>
        </div>`).join('')}
      <div class="timeline-line" aria-hidden="true"></div>
    </div>`;
}

export function renderTraining() {
  const section = document.getElementById('training');
  section.innerHTML = `
    ${sectionHeading('آموزش و اعتبار حرفه‌ای', 'تجربه‌ای که به دیگران منتقل شده', 'چهار دوره یک‌ساله فروشندگان نابغه، ده‌ها سمینار تخصصی و سوابق مرتبط در آموزش فروش.', miscIcons.graduation)}
    <div class="grid lg:grid-cols-[0.9fr_1.1fr] gap-5">
      <div class="glass-card p-6 sm:p-8 reveal relative overflow-hidden training-highlight">
        <span class="eyebrow-dark">۱۳۹۵ تا ۱۴۰۰</span>
        <h3 class="text-2xl sm:text-3xl font-extrabold mt-5 mb-5">فروشندگان نابغه</h3>
        <p class="leading-[2] text-slate-600 dark:text-slate-300 mb-7">بنیان‌گذار و مدرس چهار دوره تخصصی یک‌ساله در شرق کشور، با حضور فروشندگان، مدیران فروش و فعالان کسب‌وکار.</p>
        <div class="grid grid-cols-2 gap-3"><div class="mini-stat"><strong>۴ دوره</strong><span>یک‌ساله تخصصی</span></div><div class="mini-stat"><strong>حدود ۲۸۰ نفر</strong><span>شرکت‌کننده در مجموع</span></div></div>
        <p class="text-sm leading-8 text-slate-500 dark:text-slate-400 mt-5">محورهای آموزش: فروش حرفه‌ای، مذاکره، متقاعدسازی، بازاریابی و توانمندسازی تیم‌های فروش.</p>
      </div>
      <div class="glass-card p-6 sm:p-8 reveal">
        <h3 class="text-xl font-bold mb-5 text-slate-900 dark:text-white">سوابق آموزشی و حرفه‌ای</h3>
        <ul class="space-y-4">${credentials.map(c=>`<li class="flex gap-3 items-start text-sm leading-7 text-slate-600 dark:text-slate-300"><span class="text-primary-600 dark:text-primary-400 mt-1 shrink-0">${miscIcons.check}</span>${c}</li>`).join('')}</ul>
      </div>
    </div>`;
}

export function renderPartnerships() {
  const section = document.getElementById('partnerships');
  section.innerHTML = `
    ${sectionHeading('فرصت‌های همکاری', 'از توان تولید تا سرمایه‌گذاری مشترک', 'شش مسیر برای مشارکت اقتصادی، توسعه بازار و خلق ارزش متقابل.', miscIcons.handshake)}
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      ${partnershipAreas.map((a,i)=>`<article class="glass-card-hover p-6 reveal partnership-card" style="transition-delay:${(i%3)*70}ms"><div class="flex items-start justify-between mb-5"><span class="service-icon">${miscIcons[a.icon]||icons.layers}</span><span class="text-xs font-bold text-slate-400 dark:text-slate-500" dir="ltr">${a.number}</span></div><h3 class="text-lg font-bold text-slate-900 dark:text-white mb-3">${a.title}</h3><p class="text-slate-600 dark:text-slate-300 text-sm leading-[2]">${a.description}</p></article>`).join('')}
    </div>
    <div class="glass-card p-6 sm:p-9 mt-6 reveal vision-panel">
      <div class="grid lg:grid-cols-[1fr_auto] items-center gap-6"><div><span class="text-xs font-semibold text-primary-600 dark:text-primary-400">چشم‌انداز همکاری</span><h3 class="text-xl font-extrabold text-slate-900 dark:text-white mt-2 mb-3">مشارکت پایدار، فراتر از یک معامله</h3><p class="text-slate-600 dark:text-slate-300 text-sm leading-[2] max-w-3xl">${profile.vision}</p></div><a href="#contact" class="btn-primary whitespace-nowrap">${miscIcons.handshake} گفتگو درباره همکاری</a></div>
    </div>`;
}

export function renderContact() {
  const section = document.getElementById('contact');
  section.innerHTML = `
    ${sectionHeading('ارتباط با من', 'بیایید درباره یک فرصت تجاری صحبت کنیم', 'برای همکاری تولیدی، سفارش عمده، توسعه صادرات یا سرمایه‌گذاری، از مسیرهای ارتباطی زیر استفاده کنید.', icons.mail)}
    <div class="grid lg:grid-cols-[0.95fr_1.05fr] gap-5">
      <div class="glass-card p-6 sm:p-8 reveal">
        <h3 class="text-xl font-bold mb-2 text-slate-900 dark:text-white">راه‌های ارتباط و هماهنگی</h3>
        <p class="text-sm leading-7 text-slate-500 dark:text-slate-400 mb-6">شماره‌های زیر مربوط به واحد فروش مجموعه هستند. برای هماهنگی جلسه یا طرح پیشنهاد تجاری می‌توانید تماس بگیرید.</p>
        <div class="grid sm:grid-cols-2 gap-3 mb-6">${profile.salesPhones.map(phone=>`<a class="contact-phone" href="tel:${phone.replace(/[^۰-۹\d]/g,'').replace(/[۰-۹]/g,d=>'۰۱۲۳۴۵۶۷۸۹'.indexOf(d))}" dir="ltr">${miscIcons.phone}<span>${phone}</span></a>`).join('')}</div>
        <p class="text-sm font-bold text-slate-900 dark:text-white mb-3">وب‌سایت‌های مجموعه</p>
        <div class="space-y-2">${profile.officialWebsites.map(w=>`<a href="${w.url}" target="_blank" rel="noopener noreferrer" class="official-link"><span>${w.label}</span><span dir="ltr">${w.url.replace('https://','')}</span>${icons.externalLink}</a>`).join('')}</div>
      </div>
      <div class="glass-card p-6 sm:p-8 reveal">
        <h3 class="text-xl font-bold mb-2 text-slate-900 dark:text-white">ثبت متن درخواست همکاری</h3>
        <p class="text-sm text-slate-500 dark:text-slate-400 leading-7 mb-5">فرم را تکمیل کنید تا متن درخواست شما در واتساپ آماده شود؛ ارسال نهایی پیام توسط خودتان انجام می‌شود.</p>
        <form id="collaboration-form" class="space-y-4">
          <div><label class="contact-label" for="lead-name">نام و نام خانوادگی *</label><input required maxlength="80" id="lead-name" name="name" class="contact-input" placeholder="نام شما" autocomplete="name" /></div>
          <div><label class="contact-label" for="lead-company">نام شرکت یا سازمان</label><input maxlength="100" id="lead-company" name="company" class="contact-input" placeholder="اختیاری" autocomplete="organization" /></div>
          <div><label class="contact-label" for="lead-phone">شماره تماس *</label><input required maxlength="24" id="lead-phone" name="phone" class="contact-input" placeholder="شماره همراه یا تماس" inputmode="tel" autocomplete="tel" dir="ltr" /></div>
          <div><label class="contact-label" for="lead-topic">موضوع همکاری *</label><select id="lead-topic" name="topic" class="contact-input" required><option value="">انتخاب کنید</option>${partnershipAreas.map(a=>`<option value="${a.title}">${a.title}</option>`).join('')}</select></div>
          <div><label class="contact-label" for="lead-message">شرح کوتاه پیشنهاد *</label><textarea required minlength="10" maxlength="1200" rows="3" id="lead-message" name="message" class="contact-input resize-y" placeholder="موضوع مورد نظر را به‌اختصار توضیح دهید..."></textarea></div>
          <button class="btn-primary w-full" type="submit">${miscIcons.handshake} آماده‌سازی پیام در واتساپ ${miscIcons.arrow}</button>
          <p class="text-xs leading-6 text-slate-500 dark:text-slate-400">این فرم پایگاه داده یا سامانه ارسال خودکار ندارد؛ فقط واتساپ را با متن آماده باز می‌کند.</p>
        </form>
      </div>
    </div>`;
}

export function renderFooter() {
  document.getElementById('footer').innerHTML = `
    <div class="border-t border-slate-200/60 dark:border-slate-800/60">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500 dark:text-slate-400">
        <div><p class="font-bold text-slate-700 dark:text-slate-200">${profile.name}</p><p class="mt-1">${profile.title}</p></div>
        <p dir="ltr">© ${new Date().getFullYear()} · ${profile.latinName}</p>
      </div>
    </div>`;
}

export function renderAll() {
  renderNavigation();renderHero();renderAbout();renderBusinesses();renderProduction();renderExperience();renderTraining();renderPartnerships();renderContact();renderFooter();
}
