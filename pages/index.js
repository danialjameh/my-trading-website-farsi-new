// pages/index.js
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  // IMPORTANT: Replace these placeholders with your actual links and names
  const YOUR_GUMROAD_FREE_PRODUCT_LINK_FOR_FARSI_CHECKLIST = "YOUR_GUMROAD_FREE_PRODUCT_LINK_FOR_FARSI_CHECKLIST"; // From Gumroad
  const YOUR_IRANIAN_PLATFORM_PRODUCT_LINK = "YOUR_IRANIAN_PLATFORM_PRODUCT_LINK"; // From your Iranian platform
  const YOUR_NAME_OR_BRAND_NAME = "[نام شما/برند شما]"; // e.g., "فردین ترید" or "استراتژی برتر"
  const CURRENT_YEAR = new Date().getFullYear();

  return (
    <>
      <Head>
        <title>چک لیست شروع ترید: راهنمای نهایی برای سود پایدار | {YOUR_NAME_OR_BRAND_NAME}</title>
        <meta name="description" content="اولین قدم‌های شما برای درک عمیق بازار، غلبه بر ضررها و رسیدن به سود مستمر با استراتژی اثبات‌شده." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header - A consistent and clean header */}
      <header className="bg-white py-4 border-b border-gray-200 shadow-sm">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="logo">
            <Link href="/">
              <Image src="/images/farsi-logo.png" alt={`لوگو ${YOUR_NAME_OR_BRAND_NAME}`} width={160} height={40} className="h-10 object-contain cursor-pointer" />
            </Link>
          </div>
          <nav className="main-nav">
            <Link href="/blog" className="text-blue-700 hover:text-blue-900 font-bold transition-colors duration-300 mr-5">وبلاگ</Link>
            <a href="#full-strategy" className="text-green-600 hover:text-green-800 font-bold transition-colors duration-300">استراتژی کامل</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section - Emotional Hook & Immediate Value */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20 text-center relative overflow-hidden">
          {/* Subtle background graphics for visual interest */}
          <div className="absolute inset-0 z-0 opacity-10">
            <Image src="/images/hero-bg-pattern.png" alt="Background pattern" layout="fill" objectFit="cover" quality={20} />
          </div>
          <div className="container mx-auto flex flex-wrap items-center justify-center gap-12 px-4 relative z-10">
            <div className="text-content flex-1 min-w-[300px] max-w-[650px] text-center md:text-right">
              <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 mb-4 leading-tight drop-shadow-sm">
                آیا از ضررهای مداوم خسته شده‌اید؟ <br/> <span className="text-green-600">مسیر شما به سود پایدار، از اینجاست.</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed">
                راز ۵ سال تجربه و موفقیت در بازارهای مالی، حالا در دستان شما.
              </p>

              <div className="form-container bg-white p-8 md:p-10 rounded-xl shadow-2xl inline-block text-right w-full max-w-md transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
                <p className="text-lg text-gray-800 mb-6 font-semibold">
                  اولین قدم را همین الان بردارید:
                </p>
                <a href={YOUR_GUMROAD_FREE_PRODUCT_LINK_FOR_FARSI_CHECKLIST} className="download-button bg-gradient-to-r from-green-500 to-teal-600 text-white py-4 px-8 rounded-xl text-2xl font-extrabold hover:from-green-600 hover:to-teal-700 transition-all duration-300 block w-full text-center no-underline shadow-lg transform hover:scale-105">
                  دانلود چک لیست رایگان
                </a>
                <p className="text-sm text-gray-500 mt-4 leading-relaxed">
                  با کلیک روی دکمه بالا، به صفحه دانلود هدایت می‌شوید و به لیست ایمیلی ما می‌پیوندید تا نکات ترید بیشتری دریافت کنید و دیگر هیچوقت در بازار گم نشوید.
                </p>
              </div>
            </div>
            <div className="image-content flex-1 min-w-[280px] max-w-[500px] text-center">
              <Image
                src="/images/farsi-checklist-cover.png"
                alt="چک لیست شروع ترید: مفاهیم پایه ساختار بازار"
                width={500}
                height={500}
                className="max-w-full h-auto rounded-xl shadow-2xl transform transition-all duration-300 hover:rotate-2 hover:scale-105"
                priority={true}
              />
            </div>
          </div>
        </section>

        {/* Pain Point Section - Acknowledge and Validate User's Struggles */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-12">
              آیا با این چالش‌ها دست و پنجه نرم می‌کنید؟
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Pain Point 1 */}
              <div className="p-6 bg-red-50 rounded-lg shadow-md border-t-4 border-red-500 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <Image src="/images/icon-confusion.png" alt="سردرگمی" width={60} height={60} className="mx-auto mb-4" />
                <h3 className="text-xl font-bold text-red-700 mb-3">سردرگمی در تحلیل بازار؟</h3>
                <p className="text-gray-700">دائم در حال تغییر استراتژی، از دست دادن فرصت‌ها و گیج شدن در میان انبوه اطلاعات ضد و نقیض.</p>
              </div>
              {/* Pain Point 2 */}
              <div className="p-6 bg-red-50 rounded-lg shadow-md border-t-4 border-red-500 transform hover:scale-105 hover:shadow-xl">
                <Image src="/images/icon-losses.png" alt="ضرر مداوم" width={60} height={60} className="mx-auto mb-4" />
                <h3 className="text-xl font-bold text-red-700 mb-3">ضررها و از دست دادن سرمایه؟</h3>
                <p className="text-gray-700">وارد شدن به معاملات هیجانی، عدم رعایت حد ضرر و سوختن حساب‌های ترید.</p>
              </div>
              {/* Pain Point 3 */}
              <div className="p-6 bg-red-50 rounded-lg shadow-md border-t-4 border-red-500 transform hover:scale-105 hover:shadow-xl">
                <Image src="/images/icon-lonely.png" alt="تنهایی" width={60} height={60} className="mx-auto mb-4" />
                <h3 className="text-xl font-bold text-red-700 mb-3">احساس تنهایی و ناامیدی؟</h3>
                <p className="text-gray-700">بدون یک راهنما یا سیستم قابل اعتماد، در این مسیر پر چالش احساس تنهایی می‌کنید.</p>
              </div>
            </div>
            <p className="text-xl text-gray-800 mt-12 font-semibold">
              <span className="text-red-600">دیگر بس است!</span> ما اینجا هستیم تا این مسیر را برای شما تغییر دهیم.
            </p>
          </div>
        </section>

        {/* My Story/Journey - Build Trust & Relatability */}
        <section className="bg-gradient-to-l from-blue-50 to-indigo-50 py-16">
          <div className="container mx-auto px-4 flex flex-wrap items-center justify-center gap-10">
            <div className="profile-image flex-shrink-0 w-48 h-48 rounded-full overflow-hidden shadow-2xl mb-6 md:mb-0 transform transition-all duration-300 hover:rotate-3 hover:scale-105">
              <Image src="/images/farsi-profile.png" alt={`تصویر پروفایل ${YOUR_NAME_OR_BRAND_NAME}`} width={192} height={192} className="w-full h-full object-cover" />
            </div>
            <div className="about-text flex-grow min-w-[300px] max-w-[700px] text-right">
              <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">
                داستان من: از ضرر تا سودآوری پایدار در ۵ سال
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                سال‌ها در این بازار، با شکست‌های مداوم، استراتژی‌های بی‌نتیجه و سردرگمی مطلق دست و پنجه نرم کردم. درست مثل شما، احساس می‌کردم هیچ راهی برای موفقیت وجود ندارد و این بازار فقط برای عده خاصی است.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                اما من تسلیم نشدم. ۵ سال، شبانه‌روز را صرف مطالعه عمیق، بک‌تست‌گیری، آزمون و خطا و مهندسی معکوس حرکات بازار کردم. نتیجه این تلاش‌ها، سیستمی است که امروز آن را "استراتژی نهایی ترید (Market Structure)" نامیده‌ام. سیستمی که به من اجازه داد از ضرر خارج شده و به سودآوری **مستمر و قابل پیش‌بینی** برسم.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed font-semibold mt-4">
                اکنون، این دانش را با شما به اشتراک می‌گذارم تا مسیر شما را کوتاه‌تر و پربارتر کنم.
              </p>
            </div>
          </div>
        </section>

        {/* Value Proposition & Solution - The Promise of Transformation */}
        <section className="bg-white py-16 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-12">
              با این چک لیست رایگان، اولین قدم را به سوی <span className="text-green-600">آزادی مالی و ترید مطمئن</span> بردارید!
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="text-right">
                <h3 className="text-2xl font-bold text-blue-800 mb-4">
                  در این چک لیست، مفاهیم بنیادین ساختار بازار را خواهید آموخت:
                </h3>
                <ul className="list-none p-0 space-y-4 text-lg text-gray-700">
                  <li className="flex items-center justify-end">
                    <span className="ml-2 font-bold text-green-600 text-2xl">✓</span>
                    <span className="flex-1">درک **حرکات واقعی بازار**، نه فقط الگوهای سطحی.</span>
                  </li>
                  <li className="flex items-center justify-end">
                    <span className="ml-2 font-bold text-green-600 text-2xl">✓</span>
                    <span className="flex-1">چگونه **روندهای پنهان** را شناسایی کنید.</span>
                  </li>
                  <li className="flex items-center justify-end">
                    <span className="ml-2 font-bold text-green-600 text-2xl">✓</span>
                    <span className="flex-1">اصول اولیه **تشخیص نواحی مهم** برای ورود/خروج.</span>
                  </li>
                  <li className="flex items-center justify-end">
                    <span className="ml-2 font-bold text-green-600 text-2xl">✓</span>
                    <span className="flex-1">آمادگی برای **سیستم حرفه‌ای‌تر** ترید.</span>
                  </li>
                </ul>
              </div>
              <div className="image-content text-center">
                <Image
                  src="/images/checklist-diagram.png" // New illustrative image
                  alt="نمودار چک لیست"
                  width={500}
                  height={300}
                  className="max-w-full h-auto rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
                />
              </div>
            </div>
            <a href={YOUR_GUMROAD_FREE_PRODUCT_LINK_FOR_FARSI_CHECKLIST} className="download-button bg-gradient-to-r from-green-500 to-teal-600 text-white py-5 px-10 rounded-xl text-3xl font-extrabold mt-12 hover:from-green-600 hover:to-teal-700 transition-all duration-300 inline-block shadow-lg transform hover:scale-105">
              چک لیست رایگان را همین الان دانلود کن و متحول شو!
            </a>
          </div >
        </section>

        {/* Introduction to Full Strategy - The Ultimate Solution */}
        <section id="full-strategy" className="bg-gradient-to-r from-blue-100 to-indigo-100 py-20 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-8">
              برای سودآوری <span className="text-purple-700">حرفه‌ای و پایدار</span>، استراتژی کامل را کشف کن!
            </h2>
            <p className="text-xl md:text-2xl text-gray-800 mb-12 max-w-3xl mx-auto leading-relaxed">
              چک لیست رایگان، اولین گام شماست. اما برای دستیابی به **وین‌ریت بالا و ریسک به ریوارد ۱:۳۰+** که زندگی شما را متحول می‌کند، به سیستم کامل و مهندسی‌شده ما نیاز دارید.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="image-content text-center">
                <Image
                  src="/images/farsi-strategy-diagram.png" // Your existing strategy diagram
                  alt="نقشه راه استراتژی ترید"
                  width={600}
                  height={400}
                  className="max-w-full h-auto rounded-lg shadow-2xl transform transition-all duration-300 hover:rotate-[-2deg] hover:scale-105"
                />
              </div>
              <div className="text-right">
                <h3 className="text-2xl font-bold text-blue-800 mb-4">
                  چه چیزی این استراتژی را نهایی می‌کند؟
                </h3>
                <ul className="list-none p-0 space-y-4 text-lg text-gray-700">
                  <li className="flex items-center justify-end">
                    <span className="ml-2 font-bold text-purple-700 text-2xl">✓</span>
                    <span className="flex-1">**سیستم ۳ فاز دقیق:** از تشخیص جهت بازار تا ورود میلیمتری در تایم ۱ دقیقه.</span>
                  </li>
                  <li className="flex items-center justify-end">
                    <span className="ml-2 font-bold text-purple-700 text-2xl">✓</span>
                    <span className="flex-1">**ریسک به ریوارد افسانه‌ای:** پتانسیل کسب سود تا ۳۰ برابر ریسک.</span>
                  </li>
                  <li className="flex items-center justify-end">
                    <span className="ml-2 font-bold text-purple-700 text-2xl">✓</span>
                    <span className="flex-1">**مبتنی بر ساختار بازار:** درک عمیق‌ترین منطق حرکتی قیمت.</span>
                  </li>
                  <li className="flex items-center justify-end">
                    <span className="ml-2 font-bold text-purple-700 text-2xl">✓</span>
                    <span className="flex-1">**مدیریت پوزیشن حرفه‌ای:** برای حفظ سود و کاهش ریسک.</span>
                  </li>
                </ul>
                <p className="text-lg text-gray-800 mt-6 leading-relaxed">
                  این فقط یک استراتژی نیست؛ یک نقشه کامل برای تسلط بر بازار و رسیدن به **آزادی مالی واقعی** است.
                </p>
              </div>
            </div>
            <a href={YOUR_IRANIAN_PLATFORM_PRODUCT_LINK} className="download-button bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-5 px-10 rounded-xl text-3xl font-extrabold mt-12 hover:from-purple-700 hover:to-indigo-800 transition-all duration-300 inline-block shadow-lg transform hover:scale-105">
              استراتژی کامل را همین الان دریافت کن!
            </a>
          </div>
        </section>

        {/* Testimonials/Social Proof - Build Credibility & Overcome Doubt */}
        <section className="bg-white py-16 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-12">
              نتایج مشتریان ما <span className="text-green-600">خود گواه</span> بر قدرت این سیستم است.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Testimonial 1 */}
              <div className="p-8 bg-blue-50 rounded-lg shadow-lg border-t-4 border-blue-600 text-right">
                <p className="text-lg italic text-gray-800 mb-4">
                  "قبل از این استراتژی، فقط ضرر می‌کردم و کاملاً ناامید بودم. اما حالا، با راهنمایی‌های دقیق و کاربردی، نه تنها سودده شده‌ام، بلکه اعتماد به نفسم در ترید صدها برابر شده است. واقعا ممنونم!"
                </p>
                <p className="font-semibold text-blue-700">- [نام مشتری ۱], معامله‌گر مبتدی</p>
              </div>
              {/* Testimonial 2 */}
              <div className="p-8 bg-blue-50 rounded-lg shadow-lg border-t-4 border-blue-600 text-right">
                <p className="text-lg italic text-gray-800 mb-4">
                  "من سال‌ها ترید می‌کردم، اما همیشه دنبال یک سیستم منسجم بودم. این استراتژی، تمام پازل‌ها را کنار هم قرار داد. وین‌ریت و R:R من به سطحی رسیده که فکر نمی‌کردم ممکن باشد. بی‌نظیر!"
                </p>
                <p className="font-semibold text-blue-700">- [نام مشتری ۲], معامله‌گر حرفه‌ای</p>
              </div>
              {/* Add more testimonials as you get them */}
            </div>
            {/* Optional: Add a section for visual proof (e.g., blurred charts with R:R labels) */}
            <div className="mt-12 text-center">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">نتایج واقعی، با منطق و اثبات:</h3>
              <Image
                src="/images/farsi-proof-chart.png" // New image: chart showing a high R:R trade example (blurred price action, clear R:R labels)
                alt="نمونه معامله با ریسک به ریوارد بالا"
                width={800}
                height={450}
                className="mx-auto rounded-lg shadow-xl"
              />
              <p className="text-gray-700 mt-4">
                (تصویر بالا نمونه‌ای از ده‌ها معامله انجام شده با این استراتژی و ریسک به ریوارد ۱:۲۰ را نشان می‌دهد. جزئیات بیشتر در فایل اصلی است.)
              </p>
            </div>
          </div>
        </section>

        {/* Final Call to Action - Overcome Last Doubts */}
        <section className="bg-gradient-to-r from-gray-800 to-gray-900 py-20 text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              یک تصمیم. یک تغییر. <span className="text-yellow-400">آینده مالی شما در انتظار است.</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              این لحظه، نقطه عطفی در مسیر تریدینگ شماست. آیا می‌خواهید همچنان در مسیر ضرر و سردرگمی بمانید، یا آماده‌اید به جمع معامله‌گران موفق بپیوندید؟
            </p>
            <a href={YOUR_IRANIAN_PLATFORM_PRODUCT_LINK} className="download-button bg-gradient-to-r from-red-600 to-orange-700 text-white py-5 px-12 rounded-full text-3xl font-extrabold hover:from-red-700 hover:to-orange-800 transition-all duration-300 inline-block shadow-xl transform hover:scale-105">
              همین الان آینده ترید خود را بساز!
            </a>
            <p className="text-sm text-gray-400 mt-6">
              با تضمین ۱۰۰٪ بازگشت وجه تا ۱۴ روز. ریسک با ماست، سود برای شما.
            </p>
          </div>
        </section>
      </main>

      {/* Footer - Consistent across pages */}
      <footer className="bg-gray-800 text-white py-8 text-center border-t border-gray-700">
        <div className="container mx-auto flex flex-wrap justify-center items-center gap-4 px-4">
          <nav className="footer-nav">
            <a href="#" className="text-gray-400 hover:text-white text-sm mx-2">سیاست حفظ حریم خصوصی</a>
            <a href={YOUR_IRANIAN_PLATFORM_PRODUCT_LINK} className="text-gray-400 hover:text-white text-sm mx-2">
              مشاهده استراتژی کامل ترید در [نام پلتفرم]
            </a>
          </nav>
          <p className="copyright text-gray-400 text-xs">
            © {CURRENT_YEAR}. {YOUR_NAME_OR_BRAND_NAME}. تمام حقوق محفوظ است.
          </p>
        </div>
      </footer>
    </>
  )
}