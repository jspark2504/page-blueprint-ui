import { motion } from 'motion/react';
import { Clock, MapPin, Phone, Mail } from 'lucide-react';

const visitInfo = [
  {
    icon: Clock,
    title: '운영시간',
    content: '오전 9시 - 오후 6시\n(동절기: 오전 9시 - 오후 5시)'
  },
  {
    icon: MapPin,
    title: '위치',
    content: '서울특별시 강남구 자연로 123\n지하철 2호선 자연역 3번 출구'
  },
  {
    icon: Phone,
    title: '문의전화',
    content: '02-1234-5678\n평일 오전 9시 - 오후 6시'
  },
  {
    icon: Mail,
    title: '이메일',
    content: 'info@naturereserve.com\n24시간 문의 가능'
  }
];

export function Visit() {
  return (
    <section id="visit" className="py-24 bg-[#2d5016] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h3
            className="text-5xl md:text-6xl mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            방문 안내
          </h3>
          <p
            className="text-xl text-white/80 max-w-2xl mx-auto"
            style={{ fontFamily: "'Crimson Text', serif" }}
          >
            자연과 함께하는 특별한 시간을 위해 필요한 정보를 안내해드립니다
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {visitInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/15 transition-colors"
            >
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <info.icon size={28} />
              </div>
              <h4
                className="text-2xl mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {info.title}
              </h4>
              <p
                className="text-white/80 whitespace-pre-line leading-relaxed"
                style={{ fontFamily: "'Crimson Text', serif" }}
              >
                {info.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/10 backdrop-blur-sm p-12 rounded-3xl text-center"
        >
          <h4
            className="text-4xl mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            지금 바로 예약하세요
          </h4>
          <p
            className="text-xl text-white/80 mb-8"
            style={{ fontFamily: "'Crimson Text', serif" }}
          >
            온라인 예약 시 10% 할인 혜택을 드립니다
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-10 py-4 bg-white text-[#2d5016] rounded-full hover:bg-white/90 transition-colors shadow-lg text-lg" style={{ fontFamily: "'Crimson Text', serif" }}>
              예약하기
            </button>
            <button className="px-10 py-4 border-2 border-white text-white rounded-full hover:bg-white/10 transition-colors text-lg" style={{ fontFamily: "'Crimson Text', serif" }}>
              더 알아보기
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
