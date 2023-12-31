import ButtonLogout from "@/app/components/ButtonLogout";
import { Noto_Sans_Thai } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const notosansthai = Noto_Sans_Thai({ subsets: ["latin"] });

export const metadata = {
  title: "Donmark || Admin",
  description: [
    "Generated by Ittisak",
    "donmark",
    "สุขภัณฑ์",
    "โถ",
    "อาบน้ำ",
    "ครัว",
    "ท่อ",
  ],
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={notosansthai.className}>
        <main className="grid grid-cols-12 w-full bg-gray-300">
          <section className="col-span-4 md:col-span-3 lg:col-span-2 flex min-h-screen flex-col justify-between border-e bg-white relative">
            <article className="px-4 py-6 h-full w-full relative">
              <aside className="w-full flex flex-col items-center justify-center mt-4 mb-10">
                <h1 className=" text-sm md:text-3xl font-bold text-slate-700 text-center">
                  ระบบจัดการข้อมูล
                </h1>
                <h3 className=" text-sm md:text-3xl font-semibold text-slate-700">
                  DONMARK
                </h3>
              </aside>

              <aside className="avatar w-full mx-auto px-5 lg:px-12">
                <div className="w-full rounded-full ring ring-red-600 ring-offset-base-300 ring-offset-2 shadow-lg shadow-slate-500 ">
                  <Image
                    src={`/images/logo.png`}
                    alt="donmark"
                    width={300}
                    height={300}
                    className="w-full h-auto object-fill object-center p-3"
                    style={{
                      loading: "lazy",
                    }}
                  />
                </div>
              </aside>
              <ul className="mt-6 space-y-1 overflow-y-auto">
                <li>
                  <Link
                    href="/admin"
                    className="block rounded-lg px-4 py-2 text-sm md:text-lg font-medium text-slate-500 hover:bg-gray-100 hover:text-gray-700 text-center sm:text-left"
                  >
                    Dashboard
                  </Link>
                </li>
                
                <li>
                  <Link
                    href="/admin/adminimageslide"
                    className="block rounded-lg px-4 py-2 text-sm md:text-lg font-medium text-slate-500 hover:bg-gray-100 hover:text-gray-700 text-center sm:text-left"
                  >
                    Promotion
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admin/adminhomepage"
                    className="block rounded-lg px-4 py-2 text-sm md:text-lg font-medium text-slate-500 hover:bg-gray-100 hover:text-gray-700 text-center sm:text-left"
                  >
                    บทความ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admin/adminimageproduct"
                    className="block rounded-lg px-4 py-2 text-sm md:text-lg font-medium text-slate-500 hover:bg-gray-100 hover:text-gray-700 text-center sm:text-left"
                  >
                    สินค้าใหม่ / ลดราคา
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admin/admincategory"
                    className="block rounded-lg px-4 py-2 text-sm md:text-lg font-medium text-slate-500 hover:bg-gray-100 hover:text-gray-700 text-center sm:text-left"
                  >
                    หมวดหมู่สินค้า
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admin/adminallproduct"
                    className="block rounded-lg px-4 py-2 text-sm md:text-lg font-medium text-slate-500 hover:bg-gray-100 hover:text-gray-700 text-center sm:text-left"
                  >
                    สินค้าทั้งหมด
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admin/adminjob"
                    className="block rounded-lg px-4 py-2 text-sm md:text-lg font-medium text-slate-500 hover:bg-gray-100 hover:text-gray-700 text-center sm:text-left"
                  >
                    สมัครงาน
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admin/adminquestion"
                    className="block rounded-lg px-4 py-2 text-sm md:text-lg font-medium text-slate-500 hover:bg-gray-100 hover:text-gray-700 text-center sm:text-left"
                  >
                    คำถามที่พบบ่อย
                  </Link>
                </li>
              </ul>
            </article>
            <ButtonLogout />
          </section>
          <section className="col-span-8 md:col-span-9 lg:col-span-10 h-screen overflow-x-hidden overflow-y-scroll">
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
