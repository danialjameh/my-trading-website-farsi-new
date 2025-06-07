// pages/blog.js
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image'; // Assuming you might want to use Image component for logo/other images
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blog({ allPostsData }) {
  const YOUR_NAME_OR_BRAND_NAME = "[نام شما/برند شما]"; // Replace
  const YOUR_IRANIAN_PLATFORM_PRODUCT_LINK = "YOUR_IRANIAN_PLATFORM_PRODUCT_LINK"; // Replace
  const CURRENT_YEAR = new Date().getFullYear();

  return (
    <>
      <Head>
        <title>وبلاگ {YOUR_NAME_OR_BRAND_NAME} | آموزش ترید و ساختار بازار</title>
        <meta name="description" content="مقالات آموزشی جامع در مورد ترید، ساختار بازار، روانشناسی ترید و مدیریت ریسک." />
      </Head>

      <header className="bg-white py-4 border-b border-gray-200">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="logo">
            <Link href="/">
              <Image src="/images/farsi-logo.png" alt={`لوگو ${YOUR_NAME_OR_BRAND_NAME}`} width={160} height={40} className="h-10 object-contain cursor-pointer" />
            </Link>
          </div>
          <nav className="main-nav">
            <Link href="/" className="text-blue-600 hover:text-blue-800 font-bold mr-5">صفحه اصلی</Link>
          </nav>
        </div>
      </header>

      <main className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-12 text-center">مقالات آموزشی</h1>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPostsData.map(({ id, date, title, description }) => (
              <div key={id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <Link href={`/posts/${id}`} className="block">
                  {/* You can add a placeholder image here if you don't have one for each post */}
                  {/* <Image src="/images/placeholder-blog.png" alt={title} width={400} height={200} className="w-full h-48 object-cover" /> */}
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-blue-800 mb-2">{title}</h2>
                    <p className="text-gray-600 text-sm mb-4">{date}</p>
                    <p className="text-gray-700 text-base">{description}</p>
                    <span className="text-blue-600 hover:text-blue-800 mt-4 inline-block font-semibold">ادامه مطلب →</span>
                  </div>
                </Link>
              </div>
            ))}
          </section>
        </div>
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
  );
}