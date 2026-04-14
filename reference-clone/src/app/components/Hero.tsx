import { motion } from 'motion/react';
import { ImageWithFallback } from './ImageWithFallback';

export function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80"
          alt="자연 배경"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#faf8f5]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2
            className="text-6xl md:text-8xl text-white mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            자연과 함께하는
            <br />
            특별한 여정
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-xl md:text-2xl text-white/90 mb-8"
          style={{ fontFamily: "'Crimson Text', serif" }}
        >
          도심 속에서 만나는 푸르른 생태공간
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex gap-4 justify-center"
        >
          <button className="px-8 py-3 bg-white text-[#2d5016] rounded-full hover:bg-[#f0ede7] transition-colors shadow-lg" style={{ fontFamily: "'Crimson Text', serif" }}>
            더 알아보기
          </button>
          <button className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white/10 transition-colors" style={{ fontFamily: "'Crimson Text', serif" }}>
            오시는 길
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-white/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
