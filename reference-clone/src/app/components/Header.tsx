import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#faf8f5]/95 backdrop-blur-sm border-b border-[#e8e4dc]">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#2d5016] to-[#4a7c2a] rounded-full flex items-center justify-center">
              <span className="text-white text-xl font-semibold">N</span>
            </div>
            <h1 className="text-2xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              Nature Reserve
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-[#2d5016] hover:text-[#4a7c2a] transition-colors" style={{ fontFamily: "'Crimson Text', serif" }}>
              홈
            </a>
            <a href="#about" className="text-[#2d5016] hover:text-[#4a7c2a] transition-colors" style={{ fontFamily: "'Crimson Text', serif" }}>
              소개
            </a>
            <a href="#features" className="text-[#2d5016] hover:text-[#4a7c2a] transition-colors" style={{ fontFamily: "'Crimson Text', serif" }}>
              특징
            </a>
            <a href="#visit" className="text-[#2d5016] hover:text-[#4a7c2a] transition-colors" style={{ fontFamily: "'Crimson Text', serif" }}>
              방문안내
            </a>
            <button className="px-6 py-2 bg-[#2d5016] text-white rounded-full hover:bg-[#4a7c2a] transition-colors" style={{ fontFamily: "'Crimson Text', serif" }}>
              예약하기
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <a href="#home" className="text-[#2d5016] hover:text-[#4a7c2a] transition-colors" style={{ fontFamily: "'Crimson Text', serif" }}>
              홈
            </a>
            <a href="#about" className="text-[#2d5016] hover:text-[#4a7c2a] transition-colors" style={{ fontFamily: "'Crimson Text', serif" }}>
              소개
            </a>
            <a href="#features" className="text-[#2d5016] hover:text-[#4a7c2a] transition-colors" style={{ fontFamily: "'Crimson Text', serif" }}>
              특징
            </a>
            <a href="#visit" className="text-[#2d5016] hover:text-[#4a7c2a] transition-colors" style={{ fontFamily: "'Crimson Text', serif" }}>
              방문안내
            </a>
            <button className="px-6 py-2 bg-[#2d5016] text-white rounded-full hover:bg-[#4a7c2a] transition-colors" style={{ fontFamily: "'Crimson Text', serif" }}>
              예약하기
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
