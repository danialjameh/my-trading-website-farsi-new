// pages/about.js - About Me / Full Story Page

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  // IMPORTANT: Replace these with your actual links and names
  const YOUR_GUMROAD_FREE_PRODUCT_LINK_FOR_FARSI_CHECKLIST = "YOUR_GUMROAD_FREE_PRODUCT_LINK_FOR_FARSI_CHECKLIST"; // From Gumroad (Free Lead Magnet)
  const YOUR_IRANIAN_PLATFORM_PRODUCT_LINK = "YOUR_IRANIAN_PLATFORM_PRODUCT_LINK"; // From your Iranian platform (Main Paid Strategy)
  const YOUR_NAME_OR_BRAND_NAME = "[نام شما/برند شما]"; // e.g., "فردین ترید" or "استراتژی برتر"
  const CURRENT_YEAR = new Date().getFullYear();

  // --- IMPORTANT: HYPOTHETICAL / EXAMPLE CONTENT BELOW ---
  // --- REPLACE ALL TEXT IN THIS SECTION WITH YOUR REAL STORY ---
  const HYPOTHETICAL_STORY_TITLE = "داستان من: از تاریکی مطلق ترید تا کشف نور آزادی مالی";
  const HYPOTHETICAL_STORY_INTRO = "من [نام شما] هستم و مثل شما، سال‌ها در تاریکی ترید دست و پا می‌زدم. این داستان من است؛ داستان ضررها، ناامیدی‌ها و در نهایت، کشف راه حل...";
  const HYPOTHETICAL_STRUGGLE_SECTION_TITLE = "شروع یک کابوس: ضرر پشت ضرر...";
  const HYPOTHETICAL_STRUGGLE_TEXT = [
    "اولین باری که وارد بازار شدم، با آرزوی پولدار شدن سریع بود. اما واقعیت تلخ‌تر از چیزی بود که فکر می‌کردم. [اینجا از اولین ضررهای بزرگتان بگویید، چقدر پول از دست دادید؟ چه احساسی داشتید؟ ناامیدی، عصبانیت، ترس؟]",
    "ساعت‌ها چارت نگاه می‌کردم، اندیکاتورهای مختلف را تست می‌کردم، سیگنال‌های گروه‌های مختلف را دنبال می‌کردم. نتیجه؟ فقط گیجی بیشتر و حساب کوچک‌تر. [اینجا از سردرد، وقت هدر رفته و ناامیدی عمیق بگویید.]",
    "بارها خواستم همه چیز را رها کنم. احساس می‌کردم شاید من برای این کار ساخته نشده‌ام. ترس از دست دادن سرمایه، خواب را از من گرفته بود. [اینجا احساسات تلخ، ترس و ناامیدی مطلق را توصیف کنید.]"
  ];

  const HYPOTHETICAL_DISCOVERY_SECTION_TITLE = "نقطه عطف: وقتی دیگر تحمل شکست نداشتم!";
   const HYPOTHETICAL_DISCOVERY_TEXT = [
      "درست در تاریک‌ترین لحظه، وقتی دیگر چیزی برای از دست دادن نداشتم، تصمیم گرفتم به جای دنبال کردن سیگنال‌ها، به سراغ ریشه مشکل بروم. [اینجا نقطه عطف را بنویسید. چه چیزی باعث تغییر دیدگاهتان شد؟]",
      "۵ سال بی‌وقفه مطالعه، تحقیق و بک‌تست عمیق، مرا به دنیای 'ساختار بازار' هدایت کرد. فهمیدم که بازار منطق خاص خود را دارد، منطقی که اندیکاتورها نمی‌توانند آن را نشان دهند. [اینجا از فرآیند تحقیق و کشف خود بگویید، چقدر زمان برد؟ چقدر سخت بود؟]",
      "لحظه‌ای که اولین بار با این دیدگاه جدید معامله کردم و نتیجه گرفتم، باورنکردنی بود! [اینجا لحظه یا دوره کشف را توصیف کنید. اولین موفقیت‌ها، احساس اطمینان.]"
   ];

    const HYPOTHETICAL_SOLUTION_SECTION_TITLE = "نتیجه: سیستمی که زندگی‌ام را تغییر داد.";
    const HYPOTHETICAL_SOLUTION_TEXT = [
        "اینجا بود که 'استراتژی نهایی ترید (Market Structure)' متولد شد. سیستمی ساده، قدرتمند و قابل تکرار که دیگر مرا وابسته به سیگنال‌ها نمی‌کرد. [اینجا خلاصه‌ای از مزایای اصلی استراتژی از دیدگاه شخصی خودتان بگویید.]",
        "حالا، ترید برای من دیگر یک کابوس نیست، بلکه یک مسیر روشن به سوی آزادی مالی است. با اطمینان معامله می‌کنم و می‌دانم که بازار به کجا می‌رود. [اینجا از وضعیت فعلی ترید و زندگی‌تان بگویید.]"
    ];

    const HYPOTHETICAL_SHARING_MOTIVATION_TITLE = "چرا این راز را با شما به اشتراک می‌گذارم؟";
    const HYPOTHETICAL_SHARING_MOTIVATION_TEXT = [
        "دلیل ساده است: نمی‌خواهم شما رنجی را بکشید که من کشیدم. می‌دانم چقدر سخت است در این بازار تنها باشید. [اینجا از حس همدردی و آرزوی کمک به دیگران بگویید.]",
        "آرزوی من این است که شما هم طعم آرامش و سود مستمر را بچشید. می‌خواهم نقشه راهی را به شما بدهم که کاش روز اول داشتم. [اینجا هدف نهایی خود برای مخاطبانتان را بیان کنید.]"
    ];
     // IMPORTANT: Add any other sections needed for your story (e.g., Philosophy, Credentials)
     // const HYPOTHETICAL_PHILOSOPHY_TITLE = "فلسفه من در ترید";
     // const HYPOTHETICAL_PHILOSOPHY_TEXT = "[اینجا درباره فلسفه تریدتان بنویسید]";
    // --- END OF HYPOTHETICAL / EXAMPLE CONTENT ---


  return (
    <>
      <Head>
        <title>{HYPOTHETICAL_STORY_TITLE} | {YOUR_NAME_OR_BRAND_NAME}</title>
        <meta name="description" content={HYPOTHETICAL_STORY_INTRO} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header - Consistent with Home Page */}
      <header className="bg-gradient-to-r from-gray-900 to-black text-white py-4 shadow-2xl sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="logo">
            <Link href="/">
              {/* IMPORTANT: Replace /images/farsi-logo-light.png with your actual light logo image path */}
               {/* Make sure this image exists in your public/images folder */}
              <Image src="/images/farsi-logo-light.png" alt={`لوگو ${YOUR_NAME_OR_BRAND_NAME}`} width={180} height={45} className="h-12 object-contain cursor-pointer transition-transform duration-300 hover:scale-105" />
            </Link>
          </div>
          <nav className="main-nav hidden md:flex space-x-6 space-x-reverse"> {/* space-x-reverse for RTL */}
            <Link href="/" className="text-lg font-bold text-white hover:text-green-400 transition-colors duration-300">خانه</Link>
            <a href="/#ultimate-strategy" className="text-lg font-bold text-white hover:text-green-400 transition-colors duration-300">استراتژی اصلی</a>
            <a href="/#mastery-journey" className="text-lg font-bold text-white hover:text-yellow-400 transition-colors duration-300">نقشه راه تسلط</a>
            <a href="/#success-stories" className="text-lg font-bold text-white hover:text-blue-400 transition-colors duration-300">داستان‌های موفقیت</a>
            {/* Current page link */}
            <Link href="/about" className="text-lg font-bold text-white hover:text-orange-400 transition-colors duration-300">درباره من</Link>
            {/* IMPORTANT: You need to create this contact page (pages/contact.js) */}
            <Link href="/contact" className="text-lg font-bold text-white hover:text-purple-400 transition-colors duration-300">تماس با ما</Link>
          </nav>
          {/* Mobile menu icon - will be implemented later with JS */}
          <button className="md:hidden text-white text-3xl">☰</button>
        </div>
      </header>

      <main className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl bg-white p-8 md:p-12 rounded-lg shadow-lg border-t-8 border-purple-500"> {/* Added border */}

          {/* Story Header */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6 text-center leading-tight">
             {HYPOTHETICAL_STORY_TITLE}
          </h1>
           <p className="text-xl md:text-2xl text-gray-700 mb-12 text-center leading-relaxed">
               {HYPOTHETICAL_STORY_INTRO}
            </p>


          {/* Profile Image - Prominently displayed */}
           {/* IMPORTANT: Replace /images/farsi-profile.png with your actual profile image */}
            {/* Make sure this image exists in your public/images folder */}
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-xl mx-auto mb-10 border-4 border-yellow-400">
             <Image src="/images/farsi-profile.png" alt={`تصویر پروفایل ${YOUR_NAME_OR_BRAND_NAME}`} width={256} height={256} className="w-full h-full object-cover" />
          </div>

          {/* Story Sections */}
          <div className="prose prose-lg text-gray-800 leading-relaxed mx-auto"> {/* Using prose for basic text styling */}

              {/* The Struggle */}
              <h2>{HYPOTHETICAL_STRUGGLE_SECTION_TITLE}</h2>
              {HYPOTHETICAL_STRUGGLE_TEXT.map((paragraph, index) => (
                  <p key={`struggle-${index}`}>{paragraph}</p>
              ))}

               {/* The Discovery */}
              <h2>{HYPOTHETICAL_DISCOVERY_SECTION_TITLE}</h2>
                {HYPOTHETICAL_DISCOVERY_TEXT.map((paragraph, index) => (
                  <p key={`discovery-${index}`}>{paragraph}</p>
              ))}

              {/* The Solution / Now */}
               <h2>{HYPOTHETICAL_SOLUTION_SECTION_TITLE}</h2>
                {HYPOTHETICAL_SOLUTION_TEXT.map((paragraph, index) => (
                  <p key={`solution-${index}`}>{paragraph}</p>
              ))}

               {/* Motivation for Sharing */}
               <h2>{HYPOTHETICAL_SHARING_MOTIVATION_TITLE}</h2>
                {HYPOTHETICAL_SHARING_MOTIVATION_TEXT.map((paragraph, index) => (
                  <p key={`sharing-${index}`}>{paragraph}</p>
              ))}

              {/* IMPORTANT: Add any other sections needed for your story (e.g., Philosophy, Credentials) */}
               {/* <h2>فلسفه من در ترید</h2>
               <p>[اینجا درباره فلسفه تریدتان بنویسید]</p> */}

          </div>

          {/* Final CTA on About Page */}
          <section className="mt-16 p-6 bg-blue-50 rounded-lg text-center shadow-inner border border-blue-200">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">آیا آماده‌اید داستان موفقیت خود را بسازید؟</h3>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              داستان من, تنها یک نمونه است. با استراتژی نهایی ترید (Market Structure), شما هم می‌توانید به آرامش, اعتماد به نفس و سودهای پایدار دست یابید. اولین قدم, دریافت نقشه راه رایگان است!
            </p>
            {/* CTA to Free Checklist */}
            <a href={YOUR_GUMROAD_FREE_PRODUCT_LINK_FOR_FARSI_CHECKLIST} className="download-button bg-gradient-to-r from-green-600 to-teal-700 text-white py-3 px-6 rounded-lg text-xl font-bold hover:from-green-700 hover:to-teal-800 transition-all duration-300 inline-block no-underline shadow-lg transform hover:scale-105">
              دانلود نقشه راه رایگان (چک لیست)
            </a>
             <p className="text-md text-gray-700 mt-4 leading-relaxed">
              و یا مستقیماً با استراتژی کامل, تحول را آغاز کنید:
            </p>
             {/* CTA to Main Paid Product */}
            <a href={YOUR_IRANIAN_PLATFORM_PRODUCT_LINK} className="text-blue-600 hover:text-blue-800 font-bold text-lg mt-2 inline-block underline">
              مشاهده استراتژی کامل ترید →
            </a>
          </section>

        </div>
      </main>

      {/* Footer - Consistent across pages */}
      <footer className="bg-gray-900 text-white py-8 text-center border-t border-gray-700">
        <div className="container mx-auto flex flex-wrap justify-center items-center gap-4 px-4">
          <nav className="footer-nav flex justify-center gap-4 mb-4 w-full"> {/* Centered Footer Nav */}
            {/* IMPORTANT: You might want to create this privacy policy page (pages/privacy.js) */}
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">سیاست حفظ حریم خصوصی</Link>
            <a href={YOUR_IRANIAN_PLATFORM_PRODUCT_LINK} className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              مشاهده استراتژی کامل ترید در [نام پلتفرم]
            </a>
          </nav>
          <p className="copyright text-gray-400 text-xs w-full">
            © {CURRENT_YEAR}. {YOUR_NAME_OR_BRAND_NAME}. تمام حقوق محفوظ است.
          </p>
        </div>
      </footer>
    </>
  )
}