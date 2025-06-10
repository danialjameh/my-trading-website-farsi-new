import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const YOUR_GUMROAD_FREE_PRODUCT_LINK_FOR_FARSI_CHECKLIST = "YOUR_GUMROAD_FREE_PRODUCT_LINK_FOR_FARSI_CHECKLIST";
  const YOUR_IRANIAN_PLATFORM_PRODUCT_LINK = "YOUR_IRANIAN_PLATFORM_PRODUCT_LINK";
  const YOUR_ADVANCED_COURSE_LINK = "#future-mastery-program";
  const YOUR_NAME_OR_BRAND_NAME = "[نام شما/برند شما]";
  const CURRENT_YEAR = new Date().getFullYear();
  const YOUR_WEBSITE_VERCEL_URL = "YOUR_WEBSITE_VERCEL_URL";
  const YOUR_TWITTER_HANDLE = "@yourtwitterhandle";

  return (
    <>
      <Head>
        <title>راز سودآوری پایدار در ترید: نقشه نهایی شما | {YOUR_NAME_OR_BRAND_NAME}</title>
        <meta name="description" content="آیا از ضرر خسته شده‌اید؟ کشف کنید چگونه با استراتژی اثبات‌شده ما، به سودهای مداوم و آزادی مالی برسید. همین حالا متحول شوید!" />
        <meta property="og:title" content={`استراتژی نهایی ترید (ساختار بازار) | ${YOUR_NAME_OR_BRAND_NAME}`} />
        <meta property="og:description" content="کشف سیستم اثبات‌شده ۵ ساله ترید بر اساس ساختار بازار. افزایش وین‌ریت و سودهای شگفت‌انگیز تا ۱:۳۰ R:R. مناسب برای مبتدی تا حرفه‌ای." />
        <meta property="og:url" content={YOUR_WEBSITE_VERCEL_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${YOUR_WEBSITE_VERCEL_URL}/images/social-share.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={YOUR_TWITTER_HANDLE} />
        <meta name="twitter:title" content={`استراتژی نهایی ترید (ساختار بازار) | ${YOUR_NAME_OR_BRAND_NAME}`} />
        <meta name="twitter:description" content="کشف سیستم اثبات‌شده ۵ ساله ترید بر اساس ساختار بازار. افزایش وین‌ریت و سودهای شگفت‌انگیز تا ۱:30 R:R. مناسب برای مبتدی تا حرفه‌ای." />
        <meta name="twitter:image" content={`${YOUR_WEBSITE_VERCEL_URL}/images/social-share.png`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-gradient-to-r from-gray-900 to-black text-white py-4 shadow-2xl sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="logo">
            <Link href="/">
              <Image src="/images/farsi-logo-light.png" alt={`لوگو ${YOUR_NAME_OR_BRAND_NAME}`} width={180} height={45} className="h-12 object-contain cursor-pointer transition-transform duration-300 hover:scale-105" />
            </Link>
          </div>
          <nav className="main-nav hidden md:flex space-x-6 space-x-reverse">
            <Link href="/" className="text-lg font-bold text-white hover:text-green-400 transition-colors duration-300">خانه</Link>
            <a href="#ultimate-strategy" className="text-lg font-bold text-white hover:text-green-400 transition-colors duration-300">استراتژی اصلی</a>
            <a href="#mastery-journey" className="text-lg font-bold text-white hover:text-yellow-400 transition-colors duration-300">نقشه راه تسلط</a>
            <a href="#success-stories" className="text-lg font-bold text-white hover:text-blue-400 transition-colors duration-300">داستان‌های موفقیت</a>
            <Link href="/about" className="text-lg font-bold text-white hover:text-orange-400 transition-colors duration-300">درباره من</Link>
            <Link href="/contact" className="text-lg font-bold text-white hover:text-purple-400 transition-colors duration-300">تماس با ما</Link>
          </nav>
          <button className="md:hidden text-white text-3xl">☰</button>
        </div>
      </header>

      <main>
        <section className="bg-gradient-to-br from-gray-900 to-blue-900 text-white py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            <Image src="/images/hero-bg-dynamic.png" alt="Dynamic financial background" layout="fill" objectFit="cover" quality={30} />
          </div>
          <div className="container mx-auto flex flex-wrap items-center justify-center gap-16 px-4 relative z-10">
            <div className="text-content flex-1 min-w-[300px] max-w-[700px] text-center md:text-right transform -translate-x-full opacity-0 animate-slideInRight">
              <h1 className="text-6xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-lg text-yellow-400">
                اگر تا امروز فقط ضرر کردی... <br/> اگر نقشه راه نداری...
              </h1>
              <p className="text-2xl md:text-3xl text-gray-200 mb-10 leading-relaxed font-light">
                <span className="text-green-400 font-bold">بیدار شو!</span> این لحظه, پایان سردرگمی و آغاز سودآوری مداوم در بازارهای مالی است.
              </p>
              <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-3xl inline-block text-right w-full max-w-lg transform transition-all duration-500 hover:scale-[1.02] hover:shadow-4xl border-2 border-green-400">
                <p className="text-xl md:text-2xl text-white mb-6 font-semibold animate-pulse">
                  آینده مالی شما, از همینجا آغاز می‌شود:
                </p>
                <a href={YOUR_GUMROAD_FREE_PRODUCT_LINK_FOR_FARSI_CHECKLIST} className="download-button bg-gradient-to-r from-green-500 to-teal-600 text-white py-5 px-10 rounded-full text-3xl font-extrabold hover:from-green-600 hover:to-teal-700 transition-all duration-300 block w-full text-center no-underline shadow-lg transform hover:scale-105">
                  دانلود نقشه راه رایگان (چک لیست)
                </a>
                <p className="text-sm text-gray-300 mt-4 leading-relaxed">
                  این یک چک لیست معمولی نیست؛ این **اولین قدم شما به سوی تسلط کامل** است.
                </p>
              </div>
            </div>
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

        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-red-700 mb-14 leading-tight">
              آیا از این <span className="text-red-900">واقعیت‌های تلخ</span> ترید خسته شده‌اید؟
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="p-8 bg-white rounded-xl shadow-xl border-b-8 border-red-600 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <Image src="/images/icon-maze.png" alt="سردرگمی بی‌حد" width={70} height={70} className="mx-auto mb-5 animate-bounce-slow" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">سردرگمی در هزارتوی بازار؟</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  ساعت‌ها پای چارت می‌نشینید اما با اولین حرکت بازار غافلگیر می‌شوید...
                </p>
              </div>
              <div className="p-8 bg-white rounded-xl shadow-xl border-b-8 border-red-600 transform hover:-translate-y-2 hover:shadow-2xl">
                <Image src="/images/icon-empty-wallet.png" alt="خالی شدن کیف پول" width={70} height={70} className="mx-auto mb-5 animate-pulse-slow" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">ترس از خالی شدن حساب؟</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  استراتژی‌های بی‌نتیجه و ضررهای مالی شما را ناامید کرده‌اند.
                </p>
              </div>
              <div className="p-8 bg-white rounded-xl shadow-xl border-b-8 border-red-600 transform hover:-translate-y-2 hover:shadow-2xl">
                <Image src="/images/icon-missed-opportunity.png" alt="فرصت‌های از دست رفته" width={70} height={70} className="mx-auto mb-5 animate-slideInBottom" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">حسرت فرصت‌های از دست رفته؟</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  احساس می‌کنید بازار همیشه یک قدم از شما جلوتر است.
                </p>
              </div>
              <div className="p-8 bg-white rounded-xl shadow-xl border-b-8 border-red-600 transform hover:-translate-y-2 hover:shadow-2xl">
                <Image src="/images/icon-inconsistency.png" alt="نتایج نامنظم" width={70} height={70} className="mx-auto mb-5 animate-bounce-slow" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">نتایج ترید شما نامنظم است؟</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  یک معامله موفق و دیگری شکست؛ نمی‌دانید چرا.
                </p>
              </div>
            </div>
            <p className="text-2xl text-red-800 mt-16 font-extrabold leading-relaxed animate-fadeIn">
              <span className="text-red-600">پایان این کابوس, همینجاست.</span> آماده‌ای برای یک زندگی متفاوت؟
            </p>
          </div>
        </section>

        <section className="bg-gradient-to-br from-blue-900 to-gray-900 text-white py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 flex flex-wrap items-center justify-center gap-16">
            <div className="profile-image flex-shrink-0 w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden shadow-3xl mb-6 md:mb-0 border-4 border-yellow-400 animate-fadeInLeft">
              <Image src="/images/farsi-profile.png" alt={`تصویر پروفایل ${YOUR_NAME_OR_BRAND_NAME}`} width={320} height={320} className="w-full h-full object-cover" />
            </div>
            <div className="about-text flex-grow min-w-[300px] max-w-[700px] text-right animate-fadeInRight">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-white">
                داستان من: از تاریکی مطلق تا <span className="text-green-400">نور آزادی مالی</span> در ۵ سال
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                من هم مثل شما بودم؛ ضررهای سنگین، ناامیدی و ساعت‌ها سردرگمی در بازار. تا اینکه...
              </p>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                یک کشف بزرگ همه چیز را تغییر داد: استراتژی مبتنی بر ساختار بازار.
              </p>
              <p className="text-xl text-yellow-300 leading-relaxed font-bold mt-6">
                نتیجه؟ سیستمی که سودهای پایدار و قابل پیش‌بینی به ارمغان آورد.
              </p>
              <p className="text-xl text-white leading-relaxed mt-6">
                حالا, این نقشه راه را با شما به اشتراک می‌گذارم.
              </p>
            </div>
          </div>
        </section>

        <section id="ultimate-strategy" className="bg-white py-20 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-8">
              دیگر دنبال هیچ استراتژی دیگری نگرد! <br/> این, <span className="text-green-600">پایان جستجوی شماست.</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-800 mb-12 max-w-4xl mx-auto leading-relaxed">
              شما چک لیست رایگان را دانلود کرده‌اید (اگر نه, در پایین همین صفحه می‌توانید!). این تنها نوک کوه یخ است. برای دستیابی به **وین‌ریت تضمینی, ریسک به ریوارد ۱:۳۰+** و درک کندل به کندل بازار, به استراتژی کامل ما نیاز دارید.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="image-content text-center animate-fadeInLeft">
                <Image
                  src="/images/farsi-strategy-diagram.png"
                  alt="نقشه راه استراتژی ترید"
                  width={600}
                  height={400}
                  className="max-w-full h-auto rounded-xl shadow-2xl border-4 border-blue-600 transform transition-all duration-300 hover:scale-105"
                />
              </div>
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
            <a href={YOUR_IRANIAN_PLATFORM_PRODUCT_LINK} className="download-button bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-6 px-16 rounded-full text-4xl font-extrabold mt-16 hover:from-purple-800 hover:to-indigo-900 transition-all duration-300 inline-block shadow-2xl transform hover:scale-105 animate-pulse-fast">
              بله! می‌خواهم آینده‌ام را همین الان بسازم!
            </a>
          </div>
        </section>

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

        <section id="success-stories" className="bg-white py-20 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-14">
              <span className="text-green-600">داستان‌های واقعی,</span> از کسانی که متحول شدند.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-8 bg-blue-50 rounded-xl shadow-xl border-b-8 border-green-600 text-right transform transition-all duration-300 hover:rotate-1 hover:scale-105">
                <Image src="/images/icon-success.png" alt="موفقیت" width={60} height={60} className="mx-auto mb-4" />
                <p className="text-lg italic text-gray-800 mb-4">
                  "زندگی من قبل و بعد از این استراتژی به دو بخش تقسیم می‌شود! دیگر استرس ندارم و با اطمینان معامله می‌کنم. سودهایم باورنکردنی شده‌اند. بهترین سرمایه‌گذاری عمرم بود!"
                </p>
                <p className="font-semibold text-blue-700">- [نام مشتری ۱], معامله‌گر مبتدی</p>
              </div>
              <div className="p-8 bg-blue-50 rounded-xl shadow-xl border-b-8 border-green-600 text-right transform hover:rotate-1 hover:scale-105">
                <Image src="/images/icon-growth.png" alt="رشد" width={60} height={60} className="mx-auto mb-4" />
                <p className="text-lg italic text-gray-800 mb-4">
                  "به عنوان یک تریدر باتجربه, فکر می‌کردم همه چیز را می‌دانم. اما این سیستم, چشم مرا به روی مفاهیم جدیدی باز کرد که وین‌ریت مرا دو برابر کرد. این یک بازی عوض‌کن است!"
                </p>
                <p className="font-semibold text-blue-700">- [نام مشتری ۲], معامله‌گر حرفه‌ای</p>
              </div>
              <div className="p-8 bg-blue-50 rounded-xl shadow-xl border-b-8 border-green-600 text-right transform hover:rotate-1 hover:scale-105">
                <Image src="/images/icon-confidence.png" alt="اعتماد به نفس" width={60} height={60} className="mx-auto mb-4" />
                <p className="text-lg italic text-gray-800 mb-4">
                  "حالا بازار را می‌خوانم, نه اینکه حدس بزنم. دیگر از هیچ معامله‌ای ترس ندارم. این استراتژی به من اعتماد به نفس واقعی در ترید داد."
                </p>
                <p className="font-semibold text-blue-700">- [نام مشتری ۳], کارمند تمام‌وقت</p>
              </div>
            </div>
            <div className="mt-16 text-center">
              <h3 className="text-3xl font-bold text-blue-900 mb-8">
                <span className="text-yellow-500">سودها دروغ نمی‌گویند:</span> نگاهی به قدرت استراتژی ما.
              </h3>
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

        <section id="mastery-journey" className="bg-gradient-to-br from-indigo-900 to-purple-900 text-white py-20 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-12 leading-tight">
              سفر شما به <span className="text-yellow-400">تسلط کامل</span> بر بازار:
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed">
              استراتژی نهایی ترید، محور اصلی مسیر شماست. اما سفر بهینه‌سازی، ادامه دارد. با ما، همیشه به جلو حرکت کنید!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="p-8 bg-white bg-opacity-10 rounded-xl shadow-xl border-b-8 border-yellow-400 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <Image src="/images/journey-step1.png" alt="گام ۱" width={80} height={80} className="mx-auto mb-6 animate-fadeIn" />
                <h3 className="text-2xl font-bold text-white mb-4">گام ۱: <br/> درک بنیادها (چک لیست رایگان)</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  اینجاست که با مفاهیم اساسی ساختار بازار آشنا می‌شوی و اولین قدم محکم را برمی‌داری. (همین صفحه‌ای که در آن هستی!)
                </p>
                <a href={YOUR_GUMROAD_FREE_PRODUCT_LINK_FOR_FARSI_CHECKLIST} className="text-yellow-400 hover:text-yellow-500 font-bold mt-4 inline-block text-lg underline">
                  دانلود کن! →
                </a>
              </div>
              <div className="p-8 bg-white bg-opacity-10 rounded-xl shadow-xl border-b-8 border-blue-600 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <Image src="/images/journey-step2.png" alt="گام ۲" width={80} height={80} className="mx-auto mb-6 animate-fadeIn delay-100" />
                <h3 className="text-2xl font-bold text-white mb-4">گام ۲: <br/> تسلط بر استراتژی نهایی</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  تمام رازها، ورودهای میلی‌متری، مدیریت پوزیشن و رسیدن به سودهای رؤیایی. این قلب سیستم ماست!
                </p>
                <a href={YOUR_IRANIAN_PLATFORM_PRODUCT_LINK} className="text-blue-400 hover:text-blue-600 font-bold mt-4 inline-block text-lg underline">
                  همین الان دریافت کن! →
                </a>
              </div>
              <div className="p-8 bg-white bg-opacity-10 rounded-xl shadow-xl border-b-8 border-purple-400 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <Image src="/images/journey-step3.png" alt="گام ۳" width={80} height={80} className="mx-auto mb-6 animate-fadeIn delay-200" />
                <h3 className="text-2xl font-bold text-white mb-4">گام ۳: <br/> برنامه تسلط پیشرفته (به زودی!)</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  برای حرفه‌ای‌های واقعی: تکنیک‌های پیشرفته، مدیریت پورتفولیو و ذهنیتی شکست‌ناپذیر. **آماده باشید!**
                </p>
                <a href={YOUR_ADVANCED_COURSE_LINK} className="text-purple-400 hover:text-purple-500 font-bold mt-4 inline-block text-lg underline">
                  اطلاعات بیشتر →
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-blue-700 text-white text-center">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">بدون هیچ ریسکی، آینده‌ات رو بساز!</h2>
            <p className="text-xl mb-8">
              ما به قدرت تحول‌آفرین استراتژی‌مون ایمان داریم. به همین دلیل، تمام ریسک رو ما به عهده می‌گیریم:
            </p>
            <div className="bg-white text-gray-900 p-8 rounded-lg shadow-xl border-b-8 border-yellow-500">
              <Image src="/images/icon-guarantee.png" alt="تضمین بازگشت وجه" width={70} height={70} className="mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">۱۰۰٪ ضمانت بازگشت وجه تا 14 روز!</h3>
              <p className="text-lg leading-relaxed">
                اگر ظرف ۱۴ روز پس از خرید، به هر دلیلی (حتی اگر فقط نظرت عوض شد!) احساس کردی این استراتژی برای تو مناسب نیست یا انتظاراتت رو برآورده نکرد، کافیه به ما پیام بدی تا تمام وجهت رو **بدون هیچ سوال و چونه** بهت برگردونیم.
              </p>
              <p className="text-md mt-4 italic text-gray-700">تنها چیزی که با امتحان کردن این استراتژی از دست می‌دی، فرصت رهایی از ضرر و رسیدن به سودهای رؤیاییه!</p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-green-600 to-teal-800 py-20 text-white text-center relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-8 leading-tight animate-pulse-fomo drop-shadow-lg">
              <span className="text-yellow-300">یک تصمیم نهایی.</span> <br className="md:hidden" /> یک عمر پشیمانی، یا <span className="text-yellow-300">آزادی مالی؟</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
              این لحظه، نقطه عطفی در زندگی شماست. بازار منتظر کسی نمی‌ماند. آیا آماده‌اید برای همیشه از ضرر خداحافظی کنید و به دنیای سودهای پایدار قدم بگذارید؟ **فرصت رو از دست نده!**
            </p>
            <a href={YOUR_IRANIAN_PLATFORM_PRODUCT_LINK} className="download-button bg-gradient-to-r from-red-600 to-orange-600 text-white py-3 px-6 rounded-lg text-xl font-bold hover:from-red-500 hover:to-orange-500 transition-all duration-300 inline-block shadow-xl transform hover:scale-105 animate-wiggle-strong">
              <span className="animate-pulse-on">بله! می‌خواهم زندگی مالی‌ام را همین الان متحول کنم!</span>
            </a>
            <p className="text-md text-gray-300 mt-6 leading-relaxed">
              با تضمین ۱۰۰٪ بازگشت وجه تا ۱۴ روز. ریسک با ماست، سود برای شما.
            </p>
          </div>
        </section>

        <section className="py-12 bg-gray-200 text-center">
          <div className="container mx-auto px-4">
            <p className="text-xl font-bold text-gray-800 mb-6">هنوز <span className="text-blue-700">کاملاً مطمئن</span> نیستید؟</p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              با دانلود **نقشه راه رایگان** ما، اولین قدم‌های خود را بدون هیچ ریسک و تعهدی بردارید و با مفاهیم پایه ساختار بازار آشنا شوید. <span className="font-semibold">حتی این چک لیست هم می‌تواند دیدگاه شما را تغییر دهد!</span>
            </p>
            <a href={YOUR_GUMROAD_FREE_PRODUCT_LINK_FOR_FARSI_CHECKLIST} className="bg-blue-600 text-white py-3 px-6 rounded-lg text-xl font-bold hover:bg-blue-700 transition-all duration-300 inline-block no-underline shadow-lg transform hover:scale-105">
              دانلود نقشه راه رایگان (چک لیست)
            </a>
          </div>
        </section>

        <footer className="bg-gray-900 text-white py-8 text-center border-t border-gray-700">
          <div className="container mx-auto flex flex-wrap justify-center items-center gap-4 px-4">
            <nav className="footer-nav flex justify-center gap-4 mb-4 w-full">
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