// pages/posts/[slug].js (For individual Specialized Articles)
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { getAllPostIds, getPostData } from '../../lib/posts';

// This function gets called at build time
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false, // Set to false to return 404 for paths not found
  };
}

// This function gets called at build time
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  const YOUR_NAME_OR_BRAND_NAME = "[نام شما/برند شما]"; // Replace
  const YOUR_GUMROAD_FREE_PRODUCT_LINK_FOR_FARSI_CHECKLIST = "YOUR_GUMROAD_FREE_PRODUCT_LINK_FOR_FARSI_CHECKLIST"; // From Gumroad
  const YOUR_IRANIAN_PLATFORM_PRODUCT_LINK = "YOUR_IRANIAN_PLATFORM_PRODUCT_LINK"; // From your Iranian platform
  const CURRENT_YEAR = new Date().getFullYear();

  return (
    <>
      <Head>
        {/* Updated Title */}
        <title>{postData.title} | مقالات تخصصی {YOUR_NAME_OR_BRAND_NAME}</title>
        <meta name="description" content={postData.description} />
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
             {/* Link back to blog list (now Specialized Articles) */}
            <Link href="/blog" className="text-lg font-bold text-white hover:text-blue-400 transition-colors duration-300">مقالات تخصصی</Link>
            {/* Added About Me link */}
            <Link href="/about" className="text-lg font-bold text-white hover:text-orange-400 transition-colors duration-300">درباره من</Link>
            {/* IMPORTANT: You need to create this contact page (pages/contact.js) */}
            <Link href="/contact" className="text-lg font-bold text-white hover:text-purple-400 transition-colors duration-300">تماس با ما</Link>
          </nav>
          {/* Mobile menu icon - will be implemented later with JS */}
          <button className="md:hidden text-white text-3xl">☰</button>
        </div>
      </header>

      {/* Article Content Section */}
      <main className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl bg-white p-8 rounded-lg shadow-md border-t-8 border-blue-500"> {/* Added border */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">{postData.title}</h1>
          <p className="text-gray-600 text-sm mb-8">{postData.date}</p> {/* Consider formatting date */}
          {/* Markdown content will be rendered here */}
          <div
            className="prose prose-lg text-gray-800 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />

          {/* CTA section at the end of every blog post */}
          <section className="mt-12 p-6 bg-blue-50 rounded-lg text-center shadow-inner border border-blue-200"> {/* Added border */}
            <h3 className="text-2xl font-bold text-blue-900 mb-4">آیا آماده‌اید عمیق‌تر شوید؟</h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              با دانلود **نقشه راه رایگان** ما, اولین قدم‌های خود را در مسیر ترید مطمئن بردارید و با مفاهیم پایه ساختار بازار آشنا شوید. <span className="font-semibold">حتی این چک لیست هم می‌تواند دیدگاه شما را تغییر دهد!</span>
            </p>
            {/* CTA to Free Checklist */}
            <a href={YOUR_GUMROAD_FREE_PRODUCT_LINK_FOR_FARSI_CHECKLIST} className="download-button bg-gradient-to-r from-green-600 to-teal-700 text-white py-3 px-6 rounded-lg text-xl font-bold hover:from-green-700 hover:to-teal-800 transition-all duration-300 inline-block no-underline shadow-lg transform hover:scale-105">
              دانلود نقشه راه رایگان (چک لیست)
            </a>
            <p className="text-md text-gray-700 mt-4 leading-relaxed">
              و برای کشف استراتژی کامل و رسیدن به سود مستمر, [نام پلتفرم ایرانی شما] را بررسی کنید:
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
  );
}