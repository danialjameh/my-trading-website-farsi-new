import Head from 'next/head';
import Image from 'next/image'; // For optimized images
import Link from 'next/link'; // For client-side navigation
// import { useEffect, useState } from 'react'; // Needed for potential dynamic elements

export default function Home() {
  // IMPORTANT: Replace these placeholders with your actual links and names
  const YOUR_GUMROAD_FREE_PRODUCT_LINK_FOR_FARSI_CHECKLIST = "YOUR_GUMROAD_FREE_PRODUCT_LINK_FOR_FARSI_CHECKLIST"; // From Gumroad (Free Lead Magnet)
  const YOUR_IRANIAN_PLATFORM_PRODUCT_LINK = "YOUR_IRANIAN_PLATFORM_PRODUCT_LINK"; // From your Iranian platform (Main Paid Strategy)
  // You might have future products or advanced courses, add placeholders for them
  const YOUR_ADVANCED_COURSE_LINK = "#future-mastery-program"; // Placeholder for future advanced product link
  const YOUR_NAME_OR_BRAND_NAME = "[نام شما/برند شما]"; // e.g., "فردین ترید" or "استراتژی برتر"
  const CURRENT_YEAR = new Date().getFullYear();
  const YOUR_WEBSITE_VERCEL_URL = "YOUR_WEBSITE_VERCEL_URL"; // e.g., "https://my-trading-website-farsi.vercel.app"
  const YOUR_TWITTER_HANDLE = "@yourtwitterhandle"; // e.g., "@FardinTrade"

  // State for potential pop-up or dynamic elements (optional for now)
  // const [showPopup, setShowPopup] = useState(false);

  // useEffect(() => {
  //   // Example: Show a popup after a delay
  //   const timer = setTimeout(() => {
  //     setShowPopup(true);
  //   }, 15000); // Show after 15 seconds
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <>
      <Head>
        {/* Meta Title and Description for SEO and Social Sharing */}
        <title>راز سودآوری پایدار در ترید: نقشه نهایی شما | {YOUR_NAME_OR_BRAND_NAME}</title>
        <meta name="description" content="آیا از ضرر خسته شده‌اید؟ کشف کنید چگونه با استراتژی اثبات‌شده ما، به سودهای مداوم و آزادی مالی برسید. همین حالا متحول شوید!" />

        {/* Open Graph (for social media sharing) */}
        <meta property="og:title" content={`استراتژی نهایی ترید (ساختار بازار) | ${YOUR_NAME_OR_BRAND_NAME}`} />
        <meta property="og:description" content="کشف سیستم اثبات‌شده ۵ ساله ترید بر اساس ساختار بازار. افزایش وین‌ریت و سودهای شگفت‌انگیز تا ۱:۳۰ R:R. مناسب برای مبتدی تا حرفه‌ای." />
        {/* IMPORTANT: Replace with your website's actual Vercel URL or custom domain */}
        <meta property="og:url" content={YOUR_WEBSITE_VERCEL_URL} />
        <meta property="og:type" content="website" />
        {/* IMPORTANT: Add a compelling social share image in public/images/social-share.png */}
        {/* Make sure this image exists in your public/images folder */}
        <meta property="og:image" content={`${YOUR_WEBSITE_VERCEL_URL}/images/social-share.png`} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        {/* IMPORTANT: Replace with your Twitter handle if you have one */}
        <meta name="twitter:creator" content={YOUR_TWITTER_HANDLE} />
        <meta name="twitter:title" content={`استراتژی نهایی ترید (ساختار بازار) | ${YOUR_NAME_OR_BRAND_NAME}`} />
        <meta name="twitter:description" content="کشف سیستم اثبات‌شده ۵ ساله ترید بر اساس ساختار بازار. افزایش وین‌ریت و سودهای شگفت‌انگیز تا ۱:30 R:R. مناسب برای مبتدی تا حرفه‌ای." />
        {/* IMPORTANT: Same social share image as above */}
        <meta name="twitter:image" content={`${YOUR_WEBSITE_VERCEL_URL}/images/social-share.png`} />

        <link rel="icon" href="/favicon.ico" /> {/* You might want to add a favicon to /public */}
      </Head>

      {/* Header - Now with more precise and professional menus */}
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
            <a href="#ultimate-strategy" className="text-lg font-bold text-white hover:text-green-400 transition-colors duration-300">استراتژی اصلی</a>
            <a href="#mastery-journey" className="text-lg font-bold text-white hover:text-yellow-400 transition-colors duration-300">نقشه راه تسلط</a>
            <a href="#success-stories" className="text-lg font-bold text-white hover:text-blue-400 transition-colors duration-300">داستان‌های موفقیت</a>
            {/* Added About Me link */}
            <Link href="/about" className="text-lg font-bold text-white hover:text-orange-400 transition-colors duration-300">درباره من</Link>
            {/* IMPORTANT: You need to create this contact page (pages/contact.js) */}
            <Link href="/contact" className="text-lg font-bold text-white hover:text-purple-400 transition-colors duration-300">تماس با ما</Link>
          </nav>
          {/* Mobile menu icon - will be implemented later with JS */}
          <button className="md:hidden text-white text-3xl">☰</button>
        </div>
      </header>

      <main>
        {/* Hero Section - Awe-Inspiring & Emotional Hook */}
        <section className="bg-gradient-to-br from-gray-900 to-blue-900 text-white py-24 md:py-32 relative overflow-hidden">
          {/* Dynamic background element for awe */}
          {/* IMPORTANT: Add background image /images/hero-bg-dynamic.png */}
          {/* Make sure this image exists in your public/images folder */}
          <div className="absolute inset-0 z-0 opacity-20">
            <Image src="/images/hero-bg-dynamic.png" alt="Dynamic financial background" layout="fill" objectFit="cover" quality={30} />
          </div>
          <div className="container mx-auto flex flex-wrap items-center justify-center gap-16 px-4 relative z-10">
            <div className="text-content flex-1 min-w-[300px] max-w-[700px] text-center md:text-right transform -translate-x-full opacity-0 animate-slideInRight"> {/* Added animation classes */}
              <h1 className="text-6xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-lg text-yellow-400">
                اگر تا امروز فقط ضرر کردی... <br/>                اگر نقشه راه نداری...
              </h1>
              <p className="text-2xl md:text-3xl text-gray-200 mb-10 leading-relaxed font-light">
                <span className="text-green-400 font-bold">بیدار شو!</span> این لحظه, پایان سردرگمی و آغاز سودآوری مداوم در بازارهای مالی است.
              </p>

              {/* Form Container (now pure Tailwind) */}
              <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-3xl inline-block text-right w-full max-w-lg transform transition-all duration-500 hover:scale-[1.02] hover:shadow-4xl border-2 border-green-400">
                <p className="text-xl md:text-2xl text-white mb-6 font-semibold animate-pulse">
                  آینده مالی شما, از همینجا آغاز می‌شود:
                </p>
                {/* Primary CTA Button - Links to Free Checklist */}
                <a href={YOUR_GUMROAD_FREE_PRODUCT_LINK_FOR_FARSI_CHECKLIST} className="download-button bg-gradient-to-r from-green-500 to-teal-600 text-white py-5 px-10 rounded-full text-3xl font-extrabold hover:from-green-600 hover:to-teal-700 transition-all duration-300 block w-full text-center no-underline shadow-lg transform hover:scale-105">
                  دانلود نقشه راه رایگان (چک لیست)
                </a>
                <p className="text-sm text-gray-300 mt-4 leading-relaxed">
                  این یک چک لیست معمولی نیست؛ این **اولین قدم شما به سوی تسلط کامل** است.
                </p>
              </div>
            </div>
            {/* Awe-inspiring Success Image */}
            {/* IMPORTANT: Add image /images/hero-chart-success.png */}
            {/* Make sure this image exists in your public/images folder */}
            <div className="image-content flex-1 min-w-[300px] max-w-[600px] text-center transform translate-x-full opacity-0 animate-slideInLeft">
              <Image
                src="/images/hero-chart-success.png"
                alt="نمودار سودآوری شگفت‌انگیز"
                width={600}
                height={400}
                className="max-w-full h-auto rounded-xl shadow-2xl border-4 border-yellow-400"
                priority={true}
              />
            </div>
          </div>
        </section>

        {/* The Pain - Validate and Amplify User's Struggles (Stronger Emotional Appeal) */}
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-red-700 mb-14 leading-tight">
              آیا از این <span className="text-red-900">واقعیت‌های تلخ</span> ترید خسته شده‌اید؟
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {/* Pain Point 1 */}
              <div className="p-8 bg-white rounded-xl shadow-xl border-b-8 border-red-600 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                {/* IMPORTANT: Add icon /images/icon-maze.png */}
                {/* Make sure this image exists in your public/images folder */}
                <Image src="/images/icon-maze.png" alt="سردرگمی بی‌حد" width={70} height={70} className="mx-auto mb-5 animate-bounce-slow" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">سردرگمی در هزارتوی بازار؟</h3>
                {/* IMPORTANT: Elaborate on this pain point - add 2-3 sentences describing the feeling */}
                <p className="text-lg text-gray-700 leading-relaxed">
                    ساعت‌ها پای چارت می‌نشینید اما با اولین حرکت بازار غافلگیر می‌شوید. احساس می‌کنید در یک迷宫 بی‌پایان گم شده‌اید و هیچ راه خروجی وجود ندارد.
                </p>
              </div>
              {/* Pain Point 2 */}
              <div className="p-8 bg-white rounded-xl shadow-xl border-b-8 border-red-600 transform hover:-translate-y-2 hover:shadow-2xl">
                {/* IMPORTANT: Add icon /images/icon-empty-wallet.png */}
                {/* Make sure this image exists in your public/images folder */}
                <Image src="/images/icon-empty-wallet.png" alt="خالی شدن کیف پول" width={70} height={70} className="mx-auto mb-5 animate-pulse-slow" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">ترس از خالی شدن حساب؟</h3>
                {/* IMPORTANT: Elaborate on this pain point */}
                <p className="text-lg text-gray-700 leading-relaxed">
                    ضررهای پی‌درپی حساب شما را خالی کرده و اعتماد به نفستان را از بین برده است. هر بار که معامله‌ای باز می‌کنید، ترس از دست دادن سرمایه شما را فلج می‌کند.
                </p>
              </div>
              {/* Pain Point 3 */}
              <div className="p-8 bg-white rounded-xl shadow-xl border-b-8 border-red-600 transform hover:-translate-y-2 hover:shadow-2xl">
                {/* IMPORTANT: Add icon /images/icon-missed-opportunity.png */}
                {/* Make sure this image exists in your public/images folder */}
                <Image src="/images/icon-missed-opportunity.png" alt="فرصت‌های از دست رفته" width={70} height={70} className="mx-auto mb-5 animate-slideInBottom" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">حسرت فرصت‌های از دست رفته؟</h3>
                {/* IMPORTANT: Elaborate on this pain point */}
                <p className="text-lg text-gray-700 leading-relaxed">
                    بارها دیده‌اید که بازار حرکت‌های بزرگ می‌کند، اما شما همیشه یک قدم عقب هستید. حسرت سودهایی که دیگران می‌برند، شما را آزار می‌دهد.
                </p>
              </div>
              {/* Pain Point 4 */}
              <div className="p-8 bg-white rounded-xl shadow-xl border-b-8 border-red-600 transform hover:-translate-y-2 hover:shadow-2xl">
                {/* Add more pain points or remove this one if you only need 3 */}
                {/* IMPORTANT: Add a relevant icon /images/icon-inconsistency.png */}
                {/* Make sure this image exists in your public/images folder */}
                <Image src="/images/icon-inconsistency.png" alt="نتایج نامنظم" width={70} height={70} className="mx-auto mb-5 animate-bounce-slow" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">نتایج ترید شما نامنظم است؟</h3>
                {/* IMPORTANT: Elaborate on this pain point */}
                <p className="text-lg text-gray-700 leading-relaxed">
                    یک روز سود می‌کنید و روز دیگر ضرر. نمی‌دانید چرا معاملاتتان گاهی موفق و گاهی شکست‌خورده هستند، و این عدم ثبات شما را کلافه کرده است.
                </p>
              </div>
            </div>
            <p className="text-2xl text-red-800 mt-16 font-extrabold leading-relaxed animate-fadeIn">
              <span className="text-red-600">پایان این کابوس, همینجاست.</span> آماده‌ای برای یک زندگی متفاوت؟
            </p>
          </div>
        </section>

        {/* My Story/Journey - Deepen Connection & Relatability */}
        <section className="bg-gradient-to-br from-blue-900 to-gray-900 text-white py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 flex flex-wrap items-center justify-center gap-16">
            <div className="profile-image flex-shrink-0 w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden shadow-3xl mb-6 md:mb-0 border-4 border-yellow-400 animate-fadeInLeft">
              {/* IMPORTANT: Replace /images/farsi-profile.png with your actual profile image */}
              {/* Make sure this image exists in your public/images folder */}
              <Image src="/images/farsi-profile.png" alt={`تصویر پروفایل ${YOUR_NAME_OR_BRAND_NAME}`} width={320} height={320} className="w-full h-full object-cover" />
            </div>
            <div className="about-text flex-grow min-w-[300px] max-w-[700px] text-right animate-fadeInRight">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-white">
                داستان من: از تاریکی مطلق تا <span className="text-green-400">نور آزادی مالی</span> در ۵ سال
              </h2>
              {/* IMPORTANT: This is CRUCIAL. Write your personal story here. Be authentic, relatable, and show your journey from struggle to discovery. Use emotion! */}
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                من هم مثل شما بودم؛ ضررهای سنگین، ناامیدی و ساعت‌ها سردرگمی در بازار. سال‌ها با استراتژی‌های مختلف آزمایش کردم، اما هیچ‌کدام جواب ندادند. تا اینکه همه چیز تغییر کرد...
              </p>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                یک روز، پس از ضرر ۷۰٪ از سرمایه‌ام، تصمیم گرفتم عمیق‌تر مطالعه کنم. پس از ماه‌ها تحقیق، سیستم ساختار بازار را کشف کردم که منطق پشت حرکات قیمت را توضیح می‌داد.
              </p>
              <p className="text-xl text-yellow-300 leading-relaxed font-bold mt-6">
                نتیجه؟ کشف یک سیستم بی‌نظیر: <span className="text-yellow-400">استراتژی نهایی ترید (Market Structure)</span>. سیستمی که مرا از کابوس ضرر خارج کرد و به سودآوری **پایدار, قابل پیش‌بینی و رؤیایی** رساند.
              </p>
              <p className="text-xl text-white leading-relaxed mt-6">
                حالا, این **نقشه راه زندگی‌ساز** را با شما به اشتراک می‌گذارم.
              </p>
            </div>
          </div>
        </section>

        {/* Transition to Full Strategy - The Only Solution */}
        <section id="ultimate-strategy" className="bg-white py-20 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-8">
              دیگر دنبال هیچ استراتژی دیگری نگرد! <br/> این, <span className="text-green-600">پایان جستجوی شماست.</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-800 mb-12 max-w-4xl mx-auto leading-relaxed">
              شما چک لیست رایگان را دانلود کرده‌اید (اگر نه, در پایین همین صفحه می‌توانید!). این تنها نوک کوه یخ است. برای دستیابی به **وین‌ریت تضمینی, ریسک به ریوارد ۱:۳۰+** و درک کندل به کندل بازار, به استراتژی کامل ما نیاز دارید.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Strategy Diagram / Visual Explanation */}
              {/* IMPORTANT: Add your Farsi strategy diagram /images/farsi-strategy-diagram.png */}
              {/* Make sure this image exists in your public/images folder */}
              <div className="image-content text-center animate-fadeInLeft">
                <Image
                  src="/images/farsi-strategy-diagram.png"
                  alt="نقشه راه استراتژی ترید"
                  width={600}
                  height={400}
                  className="max-w-full h-auto rounded-xl shadow-2xl border-4 border-blue-600 transform transition-all duration-300 hover:scale-105"
                />
              </div>
              {/* Key Benefits of the Full Strategy */}
              <div className="text-right animate-fadeInRight">
                <h3 className="text-2xl font-bold text-blue-800 mb-4">
                  چه چیزی این استراتژی را <span className="text-purple-700">نهایی و بی‌رقیب</span> می‌کند؟
                </h3>
                <ul className="list-none p-0 space-y-4 text-lg text-gray-700">
                  <li className="flex items-center justify-end">
                    <span className="ml-2 font-bold text-purple-700 text-2xl">✓</span>
                    <span className="flex-1">**سیستم ۳ فاز دقیق:** از تشخیص جهت بازار تا ورود میلیمتری در تایم ۱ دقیقه.</span>
                  </li>
                  <li className="flex items-center justify-end">
                    <span className="ml-2 font-bold text-purple-700 text-2xl">✓</span>
                    <span className="flex-1">**ریسک به ریوارد افسانه‌ای:** پتانسیل کسب سود تا ۳۰ برابر ریسک شما.</span>
                  </li>
                  <li className="flex items-center justify-end">
                    <span className="ml-2 font-bold text-purple-700 text-2xl">✓</span>
                    <span className="flex-1">**مبتنی بر ساختار بازار:** درک عمیق‌ترین منطق حرکتی قیمت, نه الگوهای شانسی.</span>
                  </li>
                  <li className="flex items-center justify-end">
                    <span className="ml-2 font-bold text-purple-700 text-2xl">✓</span>
                    <span className="flex-1">**مدیریت پوزیشن حرفه‌ای:** برای حفظ سود و کاهش ریسک, درست مثل یک تریدر بزرگ.</span>
                  </li>
                </ul>
                <p className="text-lg text-gray-800 mt-6 leading-relaxed font-semibold">
                  این فقط یک فایل آموزشی نیست؛ این **نقشه راه زندگی‌ساز شما** برای تبدیل شدن به یک معامله‌گر حرفه‌ای و رسیدن به **آزادی مالی واقعی** است.
                </p>
              </div>
            </div>
            {/* CTA to Buy Main Strategy */}
            <a href={YOUR_IRANIAN_PLATFORM_PRODUCT_LINK} className="download-button bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-6 px-16 rounded-full text-4xl font-extrabold mt-16 hover:from-purple-800 hover:to-indigo-900 transition-all duration-300 inline-block shadow-2xl transform hover:scale-105 animate-pulse-fast">
              بله! می‌خواهم آینده‌ام را همین الان بسازم!
            </a>
          </div>
        </section>

        {/* FOMO Section - Fear Of Missing Out (Repeat for reinforcement) */}
        <section className="bg-red-800 text-white py-16 text-center animate-pulse-fomo">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-300 mb-6 leading-tight">
              آیا آماده‌ای این فرصت را از دست بدهی؟
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              هر لحظه که برای تصمیم‌گیری تعلل می‌کنی, هزاران دلار سود بالقوه را از دست می‌دهی. بازار منتظر کسی نمی‌ماند!
            </p>
            <a href={YOUR_IRANIAN_PLATFORM_PRODUCT_LINK} className="download-button bg-red-600 text-white py-4 px-10 rounded-full text-2xl font-extrabold hover:bg-red-700 transition-all duration-300 inline-block shadow-lg transform hover:scale-105">
              فرصت را از دست نده! همین الان خرید کن!
            </a>
          </div>
        </section>

        {/* Success Stories - Reinforce Trust & Desire */}
        <section id="success-stories" className="bg-white py-20 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-14">
              <span className="text-green-600">داستان‌های واقعی,</span> از کسانی که متحول شدند.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="p-8 bg-blue-50 rounded-xl shadow-xl border-b-8 border-green-600 text-right transform transition-all duration-300 hover:rotate-1 hover:scale-105">
                {/* IMPORTANT: Add icon /images/icon-success.png */}
                {/* Make sure this image exists in your public/images folder */}
                <Image src="/images/icon-success.png" alt="موفقیت" width={60} height={60} className="mx-auto mb-4" />
                {/* IMPORTANT: Replace with real testimonial text */}
                <p className="text-lg italic text-gray-800 mb-4">
                  "زندگی من قبل و بعد از این استراتژی به دو بخش تقسیم می‌شود! دیگر استرس ندارم و با اطمینان معامله می‌کنم. سودهایم باورنکردنی شده‌اند. بهترین سرمایه‌گذاری عمرم بود!"
                </p>
                {/* IMPORTANT: Replace with real customer name/title */}
                <p className="font-semibold text-blue-700">- [نام مشتری ۱], معامله‌گر مبتدی</p>
              </div>
              {/* Testimonial 2 */}
              <div className="p-8 bg-blue-50 rounded-xl shadow-xl border-b-8 border-green-600 text-right transform hover:rotate-1 hover:scale-105">
                {/* IMPORTANT: Add icon /images/icon-growth.png */}
                {/* Make sure this image exists in your public/images folder */}
                <Image src="/images/icon-growth.png" alt="رشد" width={60} height={60} className="mx-auto mb-4" />
                {/* IMPORTANT: Replace with real testimonial text */}
                <p className="text-lg italic text-gray-800 mb-4">
                  "به عنوان یک تریدر باتجربه, فکر می‌کردم همه چیز را می‌دانم. اما این سیستم, چشم مرا به روی مفاهیم جدیدی باز کرد که وین‌ریت مرا دو برابر کرد. این یک بازی عوض‌کن است!"
                </p>
                {/* IMPORTANT: Replace with real customer name/title */}
                <p className="font-semibold text-blue-700">- [نام مشتری ۲], معامله‌گر حرفه‌ای</p>
              </div>
              {/* Testimonial 3 - Add more as needed */}
              <div className="p-8 bg-blue-50 rounded-xl shadow-xl border-b-8 border-green-600 text-right transform hover:rotate-1 hover:scale-105">
                {/* IMPORTANT: Add icon /images/icon-confidence.png */}
                {/* Make sure this image exists in your public/images folder */}
                <Image src="/images/icon-confidence.png" alt="اعتماد به نفس" width={60} height={60} className="mx-auto mb-4" />
                {/* IMPORTANT: Replace with real testimonial text */}
                <p className="text-lg italic text-gray-800 mb-4">
                  "حالا بازار را می‌خوانم, نه اینکه حدس بزنم. دیگر از هیچ معامله‌ای ترس ندارم. این استراتژی به من اعتماد به نفس واقعی در ترید داد."
                </p>
                {/* IMPORTANT: Replace with real customer name/title */}
                <p className="font-semibold text-blue-700">- [نام مشتری ۳], کارمند تمام‌وقت</p>
              </div>
              {/* Add more testimonial blocks here */}
            </div>
            {/* Visual Proof Section - Show Results */}
            <div className="mt-16 text-center">
              <h3 className="text-3xl font-bold text-blue-900 mb-8">
                <span className="text-yellow-500">سودها دروغ نمی‌گویند:</span> نگاهی به قدرت استراتژی ما.
              </h3>
              {/* IMPORTANT: Add a compelling chart image showing high R:R trade or equity curve /images/farsi-proof-chart.png */}
              {/* Make sure this image exists in your public/images folder */}
              <Image
                src="/images/farsi-proof-chart.png"
                alt="نمونه معامله با ریسک به ریوارد بالا"
                width={1000}
                height={562}
                className="mx-auto rounded-xl shadow-2xl border-4 border-blue-600 transform transition-all duration-300 hover:scale-105"
              />
              <p className="text-gray-700 mt-6 leading-relaxed">
                (تصویر بالا نمونه‌ای واقعی از ده‌ها معامله انجام شده با این استراتژی و ریسک به ریوارد ۱:۲۰ را نشان می‌دهد. جزئیات کامل و مثال‌های بیشتر, **فقط در فایل اصلی استراتژی**.)
              </p>
            </div>
          </div>
        </section>

        {/* The Journey to Mastery - Upselling & Future Vision */}
        <section id="mastery-journey" className="bg-gradient-to-br from-indigo-900 to-purple-900 text-white py-20 relative overflow-hidden">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-12 leading-tight">
                    سفر شما به <span className="text-yellow-400">تسلط کامل</span> بر بازار:
                </h2>
                <p className="text-xl md:text-2xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed">
                    استراتژی نهایی ترید, آغازگر مسیر شماست. اما سفر تسلط, ادامه دارد. با ما, هیچوقت درجا نمی‌زنید!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Step 1: Free Checklist */}
                    <div className="p-8 bg-white bg-opacity-10 rounded-xl shadow-xl border-b-8 border-yellow-400 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                        {/* IMPORTANT: Add icon /images/journey-step1.png */}
                        {/* Make sure this image exists in your public/images folder */}
                        <Image src="/images/journey-step1.png" alt="گام ۱" width={80} height={80} className="mx-auto mb-6 animate-fadeIn" />
                        <h3 className="text-2xl font-bold text-white mb-4">گام ۱: <br/> درک بنیادها (چک لیست رایگان)</h3>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            اینجاست که با مفاهیم اساسی ساختار بازار آشنا می‌شوی و اولین قدم محکم را برمی‌داری. (همین صفحه‌ای که در آن هستی!)
                        </p>
                        {/* CTA to Free Checklist */}
                        <a href={YOUR_GUMROAD_FREE_PRODUCT_LINK_FOR_FARSI_CHECKLIST} className="text-yellow-400 hover:text-yellow-500 font-bold mt-4 inline-block text-lg underline">
                            دانلود کن! →
                        </a>
                    </div>
                    {/* Step 2: Main Strategy */}
                    <div className="p-8 bg-white bg-opacity-10 rounded-xl shadow-xl border-b-8 border-blue-400 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                        {/* IMPORTANT: Add icon /images/journey-step2.png */}
                        {/* Make sure this image exists in your public/images folder */}
                        <Image src="/images/journey-step2.png" alt="گام ۲" width={80} height={80} className="mx-auto mb-6 animate-fadeIn delay-100" />
                        <h3 className="text-2xl font-bold text-white mb-4">گام ۲: <br/> تسلط بر استراتژی نهایی</h3>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            تمام رازها, ورودهای میلیمتری, مدیریت پوزیشن و رسیدن به سودهای رؤیایی. این قلب سیستم ماست!
                        </p>
                        {/* CTA to Main Paid Product */}
                        <a href={YOUR_IRANIAN_PLATFORM_PRODUCT_LINK} className="text-blue-400 hover:text-blue-500 font-bold mt-4 inline-block text-lg underline">
                            همین الان دریافت کن! →
                        </a>
                    </div>
                    {/* Step 3: Advanced Program / Future Offer */}
                    <div className="p-8 bg-white bg-opacity-10 rounded-xl shadow-xl border-b-8 border-purple-400 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                        {/* IMPORTANT: Add icon /images/journey-step3.png */}
                        {/* Make sure this image exists in your public/images folder */}
                        <Image src="/images/journey-step3.png" alt="گام ۳" width={80} height={80} className="mx-auto mb-6 animate-fadeIn delay-200" />
                        <h3 className="text-2xl font-bold text-white mb-4">گام ۳: <br/> برنامه تسلط پیشرفته (به زودی!)</h3>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            برای حرفه‌ای‌های واقعی: تکنیک‌های پیشرفته، مدیریت پورتفولیو و ذهنیتی شکست‌ناپذیر. **آماده باشید!**
                        </p>
                        {/* CTA to Future Product/Placeholder */}
                        <a href={YOUR_ADVANCED_COURSE_LINK} className="text-purple-400 hover:text-purple-500 font-bold mt-4 inline-block text-lg underline">
                            اطلاعات بیشتر →
                        </a>
                    </div>
                </div>
            </div>
        </section>

        {/* Risk Reversal / Guarantee Section - Reinforce Trust at the End */}
        <section className="py-16 bg-blue-700 text-white text-center">
            <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-6">بدون هیچ ریسکی, آینده‌ات رو بساز!</h2>
                <p className="text-xl mb-8">
                    ما به قدرت تحول‌آفرین استراتژی‌مون ایمان داریم. به همین دلیل, تمام ریسک رو ما به عهده می‌گیریم:
                </p>
                <div className="bg-white text-gray-900 p-8 rounded-lg shadow-xl border-b-8 border-yellow-500">
                    {/* IMPORTANT: Add a guarantee icon /images/icon-guarantee.png */}
                    {/* Make sure this image exists in your public/images folder */}
                    <Image src="/images/icon-guarantee.png" alt="تضمین بازگشت وجه" width={70} height={70} className="mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-4">۱۰۰٪ ضمانت بازگشت وجه تا ۱۴ روز!</h3>
                    <p className="text-lg leading-relaxed">
                        اگر ظرف ۱۴ روز پس از خرید, به هر دلیلی (حتی اگر فقط نظرت عوض شد!) احساس کردی این استراتژی برای تو مناسب نیست یا انتظاراتت رو برآورده نکرد, کافیه به ما پیام بدی تا تمام وجهت رو **بدون هیچ سوال و چونه‌ای** بهت برگردونیم.
                    </p>
                    <p className="text-md mt-4 italic text-gray-700">تنها چیزی که با امتحان کردن این استراتژی از دست می‌دی, فرصت رهایی از ضرر و رسیدن به سودهای رؤیاییه!</p>
                </div>
            </div>
        </section>

        {/* Final Call to Action - The Irresistible Offer */}
        <section className="bg-gradient-to-br from-green-700 to-teal-800 py-20 text-white text-center relative overflow-hidden">
          {/* Add some subtle background patterns or shapes */}
          {/* <div className="absolute inset-0 z-0 opacity-20" style={{backgroundImage: 'url(/images/abstract-pattern-green.svg)', backgroundRepeat: 'repeat'}}></div> */}
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-8 leading-tight animate-pulse-fomo drop-shadow-lg">
              <span className="text-yellow-300">یک تصمیم نهایی.</span> <br className="md:hidden"/> یک عمر پشیمانی, یا <span className="text-yellow-300">آزادی مالی؟</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
              این لحظه, نقطه عطفی در زندگی شماست. بازار منتظر کسی نمی‌ماند. آیا آماده‌ای برای همیشه از ضرر خداحافظی کنی و به دنیای سودهای پایدار قدم بگذاری؟ **فرصت رو از دست نده!**
            </p>
            {/* Final Primary CTA Button - Repeat for maximum impact */}
            <a href={YOUR_IRANIAN_PLATFORM_PRODUCT_LINK} className="download-button bg-gradient-to-r from-red-600 to-orange-700 text-white py-6 px-16 rounded-full text-4xl font-extrabold hover:from-red-700 hover:to-orange-800 transition-all duration-300 inline-block shadow-2xl transform hover:scale-105 animate-wiggle-strong"> {/* Added new animation class */}
              <span className="animate-pulse-once">بله! می‌خواهم زندگی مالی‌ام را همین الان متحول کنم!</span>
            </a>
            <p className="text-md text-gray-300 mt-6 leading-relaxed">
              با تضمین ۱۰۰٪ بازگشت وجه تا ۱۴ روز. ریسک با ماست, سود برای شما.
            </p>
          </div>
        </section>

        {/* Secondary CTA to Free Checklist (for those not ready to buy yet) */}
        <section className="py-12 bg-gray-200 text-center">
          <div className="container mx-auto px-4">
            <p className="text-xl font-bold text-gray-800 mb-6">هنوز <span className="text-blue-600">کاملاً مطمئن</span> نیستید؟</p>
            <p className="text-lg text-gray-600 mb-8">
              با دانلود **نقشه راه رایگان** ما, اولین قدم‌های خود را بدون هیچ ریسک و تعهدی بردارید و با مفاهیم پایه ساختار بازار آشنا شوید. <span className="font-semibold">حتی این چک لیست هم می‌تواند دیدگاه شما را تغییر دهد!</span>
            </p>
            {/* Link to Free Checklist Button - Secondary CTA */}
            <a href={YOUR_GUMROAD_FREE_PRODUCT_LINK_FOR_FARSI_CHECKLIST} className="bg-blue-600 text-white py-3 px-10 rounded-full text-xl font-bold hover:bg-blue-700 transition-all duration-300 inline-block no-underline shadow-lg transform hover:scale-105">
              دانلود نقشه راه رایگان (چک لیست)
            </a>
          </div>
        </section>

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
      </main>
    </>
  );
}