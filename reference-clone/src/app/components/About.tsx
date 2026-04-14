import { motion } from 'motion/react';
import { ImageWithFallback } from './ImageWithFallback';

export function About() {
  return (
    <section id="about" className="py-24 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3
              className="text-5xl md:text-6xl mb-6 text-[#2d5016]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              자연과 하나되는
              <br />
              휴식 공간
            </h3>
            <p
              className="text-xl text-[#4a5d3a] mb-6 leading-relaxed"
              style={{ fontFamily: "'Crimson Text', serif" }}
            >
              도시의 번잡함에서 벗어나 자연의 고요함과 아름다움을 경험할 수 있는 특별한 공간입니다.
              계절마다 변화하는 풍경과 다양한 생태계를 관찰하며 자연과 교감하는 시간을 가져보세요.
            </p>
            <p
              className="text-xl text-[#4a5d3a] mb-8 leading-relaxed"
              style={{ fontFamily: "'Crimson Text', serif" }}
            >
              수천 그루의 나무와 수백 종의 식물들이 어우러진 이곳은 도심 속 작은 낙원으로,
              방문객들에게 힐링과 영감을 선사합니다.
            </p>
            <div className="flex gap-4">
              <div className="flex-1 p-6 bg-white rounded-2xl shadow-sm">
                <div className="text-4xl mb-2 text-[#2d5016]" style={{ fontFamily: "'Playfair Display', serif" }}>200+</div>
                <div className="text-[#4a5d3a]" style={{ fontFamily: "'Crimson Text', serif" }}>식물 종류</div>
              </div>
              <div className="flex-1 p-6 bg-white rounded-2xl shadow-sm">
                <div className="text-4xl mb-2 text-[#2d5016]" style={{ fontFamily: "'Playfair Display', serif" }}>50ha</div>
                <div className="text-[#4a5d3a]" style={{ fontFamily: "'Crimson Text', serif" }}>총 면적</div>
              </div>
              <div className="flex-1 p-6 bg-white rounded-2xl shadow-sm">
                <div className="text-4xl mb-2 text-[#2d5016]" style={{ fontFamily: "'Playfair Display', serif" }}>365일</div>
                <div className="text-[#4a5d3a]" style={{ fontFamily: "'Crimson Text', serif" }}>연중 운영</div>
              </div>
            </div>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=80"
                  alt="자연 풍경 1"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&q=80"
                alt="자연 풍경 2"
                className="w-full h-48 object-cover rounded-2xl shadow-lg"
              />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&q=80"
                alt="자연 풍경 3"
                className="w-full h-48 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
