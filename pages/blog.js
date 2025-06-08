// pages/blog.js (Renamed from Blog to Specialized Articles concept)
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blog({ allPostsData }) { // Keep function name as Blog for simplicity with routing
  const YOUR_NAME_OR_BRAND_NAME = "[نام شما/برند شما]"; // Replace
  const YOUR_IRANIAN_PLATFORM_PRODUCT_LINK = "YOUR_IRANIAN_PLATFORM_PRODUCT_LINK"; // Replace
  const CURRENT_YEAR = new Date().getFullYear();

  return (
    <>
      <Head>
        {/* Updated Title and Description */}
        <title>مقالات تخصصی ترید: بینش‌های عمیق بازار | {YOUR_NAME_OR_BRAND_NAME}</title>
        <meta name="description" content="جامع‌ترین مقالات آموزشی در مورد استراتژی‌های ترید، ساختار بازار، روانشناسی و مدیریت ریسک. دانش خود را ارتقا دهید." />
      </Head>

      {/* Header - Consistent with Home Page */}
      <header className="bg-gradient-to-r from-gray-900 to-black text-white py-4 shadow-2xl sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="logo">
            <Link href="/">
              {/* Replace /images/farsi-logo-light.png with your actual light logo image path */}
              <Image src="/images/farsi-logo-light.png" alt={`لوگو ${YOUR_NAME_OR_BRAND_NAME}`} width={180} height={45} className="h-12 object-contain cursor-pointer transition-transform duration-300 hover:scale-105" />
            </Link>
          </div>
          <nav className="main-nav hidden md:flex space-x-6 space-x-reverse"> {/* space-x-reverse for RTL */}
            <Link href="/" className="text-lg font-bold text-white hover:text-green-400 transition-colors duration-300">خانه</Link>
             {/* Link back to blog list (now Specialized Articles) */}
            <Link href="/blog" className="text-lg font-bold text-white hover:text-blue-400 transition-colors duration-300">مقالات تخصصی</Link>
            {/* Add other menu items as needed, linking to sections on the home page or new pages */}
             {/* <a href="/#ultimate-strategy" className="text-lg font-bold text-white hover:text-green-400 transition-colors duration-300">استراتژی اصلی</a> */}
             {/* <a href="/#mastery-journey" className="text-lg font-bold text-white hover:text-yellow-400 transition-colors duration-300">نقشه راه تسلط</a> */}
          </nav>
          {/* Mobile menu icon - will be implemented later with JS */}
          <button className="md:hidden text-white text-3xl">☰</button>
        </div>
      </header>

      {/* Blog/Articles List Section */}
      <main className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Updated Heading */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-12 text-center">مقالات تخصصی و بینش‌های بازار</h1>
           <p className="text-xl md:text-2xl text-gray-800 mb-12 max-w-4xl mx-auto text-center leading-relaxed">
              دانش خود را عمیق‌تر کنید و با مفاهیم کلیدی ترید آشنا شوید. هر مقاله, یک قدم به سوی تسلط!
           </p>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPostsData.map(({ id, date, title, description }) => (
              <div key={id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border-b-4 border-blue-500"> {/* Added border */}
                {/* FIX: Changed template literal to string concatenation */}
                <Link href={"/posts/" + id} className="block">
                  {/* You can add a placeholder image here if you don't have one for each post */}
                  {/* IMPORTANT: Add a placeholder image for blog posts /images/placeholder-blog.png */}
                  {/* <Image src="/images/placeholder-blog.png" alt={title} width={400} height={200} className="w-full h-48 object-cover" /> */}
                  <div className="p-6 text-right"> {/* Ensure text alignment */}
                    <h2 className="text-xl font-bold text-blue-800 mb-2">{title}</h2>
                    <p className="text-gray-600 text-sm mb-4">{date}</p> {/* Consider formatting date */}
                    <p className="text-gray-700 text-base leading-relaxed">{description}</p> {/* Added leading-relaxed */}
                    <span className="text-blue-600 hover:text-blue-800 mt-4 inline-block font-semibold underline">ادامه مطلب →</span> {/* Added underline for clarity */}
                  </div>
                </Link>
              </div>
            ))}
          </section>
        </div>
      </main>

      {/* Footer - Consistent with Home Page */}
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
  );
}