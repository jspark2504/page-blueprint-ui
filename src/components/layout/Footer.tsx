import Link from "next/link";

import siteConfig from "@/content/site.config";

export function Footer() {
  return (
    <footer className="mt-auto bg-[#1a2f0f] py-16 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4a7c2a] text-sm font-semibold text-white">
                N
              </div>
              <h4 className="serif-display text-4xl">{siteConfig.siteName}</h4>
            </div>
            <p className="serif-body max-w-xl text-lg text-white/75">{siteConfig.siteDescription}</p>
          </div>

          <div>
            <h5 className="serif-display text-3xl">바로가기</h5>
            <ul className="serif-body mt-4 space-y-2 text-lg text-white/75">
              <li><Link href="/#about-overview" className="hover:text-white">소개</Link></li>
              <li><Link href="/#features" className="hover:text-white">주요 특징</Link></li>
              <li><Link href="/#visit-guide" className="hover:text-white">방문 안내</Link></li>
              <li><Link href="/#visit-guide" className="hover:text-white">예약하기</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="serif-display text-3xl">고객지원</h5>
            <ul className="serif-body mt-4 space-y-2 text-lg text-white/75">
              <li><Link href="/#visit-guide" className="hover:text-white">자주 묻는 질문</Link></li>
              <li><Link href="/#visit-guide" className="hover:text-white">이용약관</Link></li>
              <li><Link href="/#visit-guide" className="hover:text-white">개인정보처리방침</Link></li>
              <li><Link href="/#visit-guide" className="hover:text-white">문의하기</Link></li>
            </ul>
          </div>
        </div>

        <div className="serif-body mt-10 border-t border-white/15 pt-6 text-center text-base text-white/60">
          © {new Date().getFullYear()} {siteConfig.siteName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
