// pages/posts/[slug].js
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
        <title>{postData.title} | {YOUR_NAME_OR_BRAND_NAME} وبلاگ</title>
        <meta name="description" content={postData.description} />
      </Head>

      <header className="bg-white py-4 border-b border-gray-200">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="logo">
            <Link href="/">
              <Image src="/images/farsi-logo.png" alt={`لوگو ${YOUR_NAME_OR_BRAND_NAME}`} width={160} height={40} className="h-10 object-contain cursor-pointer" />
            </Link>
          </div>
          <nav className="main-nav">
            <Link href="/blog" className="text-blue-600 hover:text-blue-800 font-bold mr-5">بازگشت به وبلاگ</Link>
            <Link href="/" className="text-blue-600 hover:text-blue-800 font-bold">صفحه اصلی</Link>
          </nav>
        </div>
      </header>

      <main className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">{postData.title}</h1>
          <p className="text-gray-600 text-sm mb-8">{postData.date}</p>
          <div
            className="prose prose-lg text-gray-800 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />

          {/* CTA section at the end of every blog post */}
          <section className="mt-12 p-6 bg-blue-50 rounded-lg text-center shadow-inner">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">آیا آماده‌اید عمیق‌تر شوید؟</h3>
            <p className="text-lg text-gray-700 mb-6">
              با دانلود چک لیست رایگان ما، اولین قدم‌های خود را در مسیر ترید مطمئن بردارید و مفاهیم کلیدی ساختار بازار را بیاموزید.
            </p>
            <a href={YOUR_GUMROAD_FREE_PRODUCT_LINK_FOR_FARSI_CHECKLIST} className="download-button bg-green-600 text-white py-3 px-6 rounded-lg text-lg font-bold hover:bg-green-700 transition-colors duration-300 inline-block no-underline">
              دانلود چک لیست رایگان
            </a>
            <p className="text-md text-gray-700 mt-4">
              و برای کشف استراتژی کامل، [نام پلتفرم ایرانی شما] را بررسی کنید:
            </p>
            <a href={YOUR_IRANIAN_PLATFORM_PRODUCT_LINK} className="text-blue-600 hover:text-blue-800 font-bold text-lg mt-2 inline-block">
              مشاهده استراتژی کامل ترید →
            </a>
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