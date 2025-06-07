// pages/index.js
import Head from 'next/head';
import Image from 'next/image'; // For optimized images
import Link from 'next/link'; // For client-side navigation

export default function Home() {
  // IMPORTANT: Replace these placeholders with your actual links and names
  const YOUR_GUMROAD_FREE_PRODUCT_LINK_FOR_FARSI_CHECKLIST = "YOUR_GUMROAD_FREE_PRODUCT_LINK_FOR_FARSI_CHECKLIST"; // From Gumroad
  const YOUR_IRANIAN_PLATFORM_PRODUCT_LINK = "YOUR_IRANIAN_PLATFORM_PRODUCT_LINK"; // From your Iranian platform
  const YOUR_NAME_OR_BRAND_NAME = "[نام شما/برند شما]";
  const CURRENT_YEAR = new Date().getFullYear();

  return (
    <>
      <Head>
        <title>چک لیست شروع ترید: مفاهیم پایه ساختار بازار | {YOUR_NAME_OR_BRAND_NAME}</title>
        <meta name="description" content="اولین قدم‌های شما برای درک عمیق بازار و رسیدن به سود مستمر." />
        <link rel="icon" href="/favicon.ico" /> {/* You might want to add a favicon to /public */}
      </Head>

      <header className="bg-white py-4 border-b border-gray-200">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="logo">
            {/* Replace /images/farsi-logo.png with your actual logo image path */}
            {/* If you prefer text logo, remove Image component and use <span> */}
            <Image src="/images/farsi-logo.png" alt={`لوگو ${YOUR_NAME_OR_BRAND_NAME}`} width={160} height={40} className="h-10 object-contain" />
            {/* <span className="text-xl font-bold text-gray-800">{YOUR_NAME_OR_BRAND_NAME}</span> */}
          </div>
          <nav className="main-nav">
            {/* Link to blog (will be created later) */}
            <Link href="/blog" className="text-blue-600 hover:text-blue-800 font-bold mr-5">وبلاگ</Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="bg-blue-50 py-16 text-center">
          <div className="container mx-auto flex flex-wrap items-center justify-center gap-10 px-4">
            <div className="text-content flex-1 min-w-[300px] max-w-[600px] text-center">
              <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-2 leading-tight">
                چک لیست شروع ترید: <br />مفاهیم پایه ساختار بازار
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                اولین قدم‌های شما برای درک عمیق بازار و رسیدن به سود مستمر.
              </p>

              <div className="form-container bg-white p-8 rounded-lg shadow-lg inline-block text-right w-full max-w-md">
                <p className="text-lg text-gray-800 mb-6">برای دریافت چک لیست رایگان، روی دکمه زیر کلیک کنید:</p>
                {/* IMPORTANT: This button links directly to your Gumroad FREE product page */}
                <a href={YOUR_GUMROAD_FREE_PRODUCT_LINK_FOR_FARSI_CHECKLIST} className="download-button bg-green-600 text-white py-4 px-6 rounded-lg text-xl font-bold hover:bg-green-700 transition-colors duration-300 block w-full text-center no-underline">
                  دانلود رایگان چک لیست
                </a>
                <p className="text-sm text-gray-500 mt-4">
                  با کلیک روی دکمه بالا، به صفحه دانلود هدایت می‌شوید و به لیست ایمیلی ما می‌پیوندید تا نکات ترید بیشتری دریافت کنید.
                </p>
              </div>
            </div>
            <div className="image-content flex-1 min-w-[250px] max-w-[400px] text-center">
              {/* Replace /images/farsi-checklist-cover.png with your actual Lead Magnet cover image */}
              <Image
                src="/images/farsi-checklist-cover.png"
                alt="چک لیست شروع ترید"
                width={400}
                height={200} // Adjust height as needed, will be responsive
                className="max-w-full h-auto rounded-lg shadow-xl"
                priority={true} // Prioritize loading for LCP
              />
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-10">چرا این چک لیست، نقطه شروع شماست؟</h2>
            <ul className="list-none p-0 text-center">
              <li className="bg-white mx-auto my-4 p-5 rounded-lg shadow-md max-w-xl text-lg text-gray-700 text-right">
                درک مفاهیم پیچیده بازار به زبان ساده.
              </li>
              <li className="bg-white mx-auto my-4 p-5 rounded-lg shadow-md max-w-xl text-lg text-gray-700 text-right">
                نقشه راه گام به گام برای شروعی مطمئن.
              </li>
              <li className="bg-white mx-auto my-4 p-5 rounded-lg shadow-md max-w-xl text-lg text-gray-700 text-right">
                جلوگیری از اشتباهات رایج مبتدیان.
              </li>
              <li className="bg-white mx-auto my-4 p-5 rounded-lg shadow-md max-w-xl text-lg text-gray-700 text-right">
                آماده‌سازی ذهنیت شما برای سودآوری پایدار.
              </li>
            </ul>
          </div>
        </section>

        <section className="py-16 bg-blue-50">
          <div className="container mx-auto flex flex-wrap items-center justify-center gap-10 px-4">
            <div className="profile-image flex-shrink-0 w-40 h-40 rounded-full overflow-hidden shadow-lg mx-auto md:mx-0 mb-6 md:mb-0">
              {/* Replace /images/farsi-profile.png with your actual profile image */}
              <Image src="/images/farsi-profile.png" alt={`تصویر پروفایل ${YOUR_NAME_OR_BRAND_NAME}`} width={160} height={160} className="w-full h-full object-cover" />
            </div>
            <div className="about-text flex-grow min-w-[300px] max-w-[700px] text-right">
              <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">درباره خالق این استراتژی</h2>
              <p className="text-lg text-gray-700">
                {YOUR_NAME_OR_BRAND_NAME}، معامله‌گر با ۵ سال تجربه در بازارهای مالی و خالق سیستم‌های معاملاتی اثبات‌شده. مأموریت من، توانمندسازی شما برای رسیدن به آزادی مالی از طریق ترید است.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8 text-center">
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