import { motion } from 'motion/react';
import { Trees, Bird, Flower2, Mountain } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

const features = [
  {
    icon: Trees,
    title: '숲속 산책로',
    description: '울창한 숲 사이로 조성된 산책로를 따라 여유로운 시간을 보내보세요.',
    image: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=600&q=80'
  },
  {
    icon: Bird,
    title: '생태 관찰',
    description: '다양한 조류와 곤충을 관찰할 수 있는 특별한 공간입니다.',
    image: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=600&q=80'
  },
  {
    icon: Flower2,
    title: '계절 정원',
    description: '사계절 내내 아름다운 꽃과 식물을 감상할 수 있습니다.',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&q=80'
  },
  {
    icon: Mountain,
    title: '전망대',
    description: '높은 곳에서 바라보는 탁 트인 자연 경관을 만끽하세요.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80'
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-[#faf8f5] to-[#e8e4dc]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h3
            className="text-5xl md:text-6xl mb-6 text-[#2d5016]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            주요 특징
          </h3>
          <p
            className="text-xl text-[#4a5d3a] max-w-2xl mx-auto"
            style={{ fontFamily: "'Crimson Text', serif" }}
          >
            자연의 다양한 모습을 경험할 수 있는 특별한 공간들을 만나보세요
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl shadow-xl bg-white hover:shadow-2xl transition-shadow duration-500"
            >
              <div className="relative h-72 overflow-hidden">
                <ImageWithFallback
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Icon */}
                <div className="absolute top-6 left-6 w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center">
                  <feature.icon className="text-white" size={28} />
                </div>
              </div>

              <div className="p-8">
                <h4
                  className="text-3xl mb-3 text-[#2d5016]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {feature.title}
                </h4>
                <p
                  className="text-lg text-[#4a5d3a] leading-relaxed"
                  style={{ fontFamily: "'Crimson Text', serif" }}
                >
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
