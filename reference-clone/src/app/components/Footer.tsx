import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1a2f0f] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#4a7c2a] to-[#2d5016] rounded-full flex items-center justify-center">
                <span className="text-white text-2xl font-semibold">N</span>
              </div>
              <h4 className="text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                Nature Reserve
              </h4>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed" style={{ fontFamily: "'Crimson Text', serif" }}>
              도심 속에서 만나는 푸르른 생태공간. 자연과 함께하는 특별한 여정을 경험해보세요.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              바로가기
            </h5>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-white/70 hover:text-white transition-colors" style={{ fontFamily: "'Crimson Text', serif" }}>
                  소개
                </a>
              </li>
              <li>
                <a href="#features" className="text-white/70 hover:text-white transition-colors" style={{ fontFamily: "'Crimson Text', serif" }}>
                  주요 특징
                </a>
              </li>
              <li>
                <a href="#visit" className="text-white/70 hover:text-white transition-colors" style={{ fontFamily: "'Crimson Text', serif" }}>
                  방문 안내
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors" style={{ fontFamily: "'Crimson Text', serif" }}>
                  예약하기
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h5 className="text-xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              고객지원
            </h5>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors" style={{ fontFamily: "'Crimson Text', serif" }}>
                  자주 묻는 질문
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors" style={{ fontFamily: "'Crimson Text', serif" }}>
                  이용약관
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors" style={{ fontFamily: "'Crimson Text', serif" }}>
                  개인정보처리방침
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors" style={{ fontFamily: "'Crimson Text', serif" }}>
                  문의하기
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-center text-white/60" style={{ fontFamily: "'Crimson Text', serif" }}>
          <p>© 2026 Nature Reserve. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
