"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Bird, Clock3, Flower2, Mail, MapPin, Mountain, PhoneCall, Trees } from "lucide-react";

import siteConfig from "@/content/site.config";
import { Button } from "@/components/ui/Button";

export function HomeInformationSections() {
  const aboutRef = useRef<HTMLElement | null>(null);
  const featuresRef = useRef<HTMLElement | null>(null);
  const eventRef = useRef<HTMLElement | null>(null);
  const visitRef = useRef<HTMLElement | null>(null);
  const aboutInView = useInView(aboutRef, { once: false, margin: "-10% 0px" });
  const featuresInView = useInView(featuresRef, { once: false, margin: "-10% 0px" });
  const eventInView = useInView(eventRef, { once: false, margin: "-10% 0px" });
  const visitInView = useInView(visitRef, { once: false, margin: "-10% 0px" });

  const featureCards = [
    {
      title: "숲속 산책로",
      description: "울창한 숲 사이로 조성된 산책로를 따라 여유로운 시간을 보내보세요.",
      image: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1000&q=80",
      icon: Trees,
    },
    {
      title: "생태 관찰",
      description: "다양한 조류와 곤충을 관찰할 수 있는 특별한 공간입니다.",
      image: "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=1000&q=80",
      icon: Bird,
    },
    {
      title: "계절 정원",
      description: "사계절 내내 아름다운 꽃과 식물을 감상할 수 있습니다.",
      image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1000&q=80",
      icon: Flower2,
    },
    {
      title: "전망대",
      description: "높은 곳에서 바라보는 탁 트인 자연 경관을 만끽하세요.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1000&q=80",
      icon: Mountain,
    },
  ];

  return (
    <>
      <section ref={aboutRef} id="about-overview" className="bg-[#faf8f5] py-24 text-[#25361d]">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:grid-cols-2 sm:items-center sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={aboutInView ? { opacity: 1, y: 0 } : undefined} transition={{ duration: 0.55 }}>
            <h2 className="serif-display text-6xl leading-[1.05]">자연과 하나되는 휴식 공간</h2>
            <p className="serif-body mt-6 text-2xl leading-relaxed text-[#465b38]">
              도시의 번잡함에서 벗어나 자연의 고요함과 아름다움을 경험할 수 있는 특별한 공간입니다.
              계절마다 변화하는 풍경과 다양한 생태계를 관찰하며 자연과 교감하는 시간을 가져보세요.
            </p>
            <p className="serif-body mt-5 text-2xl leading-relaxed text-[#465b38]">
              수천 그루의 나무와 수백 종의 식물들이 어우러진 이곳은 도심 속 작은 낙원으로,
              방문객들에게 힐링과 영감을 선사합니다.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-3">
              <div className="rounded-2xl border border-[#e9e5dc] bg-white p-5 shadow-sm">
                <p className="serif-display text-4xl text-[#2d5016]">200+</p>
                <p className="serif-body mt-1 text-base text-[#5a7050]">식물 종류</p>
              </div>
              <div className="rounded-2xl border border-[#e9e5dc] bg-white p-5 shadow-sm">
                <p className="serif-display text-4xl text-[#2d5016]">50ha</p>
                <p className="serif-body mt-1 text-base text-[#5a7050]">총 면적</p>
              </div>
              <div className="rounded-2xl border border-[#e9e5dc] bg-white p-5 shadow-sm">
                <p className="serif-display text-4xl text-[#2d5016]">365일</p>
                <p className="serif-body mt-1 text-base text-[#5a7050]">연중 운영</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, y: 24 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            <div className="col-span-2">
              <div className="relative h-64 overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80"
                  alt="자연 풍경"
                  fill
                  className="object-cover"
                  sizes="(min-width: 640px) 50vw, 100vw"
                />
              </div>
            </div>
            <div className="relative h-48 overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=800&q=80"
                alt="바다 풍경"
                fill
                className="object-cover"
                sizes="(min-width: 640px) 25vw, 50vw"
              />
            </div>
            <div className="relative h-48 overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80"
                alt="산 풍경"
                fill
                className="object-cover"
                sizes="(min-width: 640px) 25vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section ref={featuresRef} id="features" className="bg-gradient-to-b from-[#faf8f5] to-[#e8e4dc] py-24 text-[#25361d]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-14 text-center"
            initial={{ opacity: 0, y: 24 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.55 }}
          >
            <h2 className="serif-display text-6xl">주요 특징</h2>
            <p className="serif-body mt-4 text-2xl text-[#4a5d3a]">자연의 다양한 모습을 경험할 수 있는 특별한 공간들</p>
          </motion.div>

          <ul className="grid gap-8 sm:grid-cols-2">
            {featureCards.map((feature, idx) => (
              <motion.li
                key={feature.title}
                className="overflow-hidden rounded-3xl bg-white shadow-xl"
                initial={{ opacity: 0, y: 22 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : undefined}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover transition duration-700 hover:scale-105"
                    sizes="(min-width: 640px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent" />
                  <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/25 text-white backdrop-blur">
                    <feature.icon size={22} strokeWidth={1.75} />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="serif-display text-4xl text-[#2d5016]">{feature.title}</h3>
                  <p className="serif-body mt-3 text-xl leading-relaxed text-[#4a5d3a]">{feature.description}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <section ref={eventRef} id="events" className="bg-[#f1eee7] py-24 text-[#25361d]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-10 flex items-center justify-between gap-4"
            initial={{ opacity: 0, y: 24 }}
            animate={eventInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h2 className="serif-display text-6xl">EVENT</h2>
              <p className="serif-body mt-3 text-2xl text-[#4a5d3a]">계절별 이벤트와 특별 프로그램을 만나보세요</p>
            </div>
            <Button href="/#events" variant="secondary">
              전체 보기
            </Button>
          </motion.div>

          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {siteConfig.eventCards.slice(0, 4).map((event, idx) => (
              <motion.li
                key={event.id}
                className="overflow-hidden rounded-xl bg-white shadow-sm"
                initial={{ opacity: 0, y: 18 }}
                animate={eventInView ? { opacity: 1, y: 0 } : undefined}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
              >
                <div className="relative h-48 w-full">
                  <Image src={event.image} alt={event.title} fill className="object-cover" sizes="(min-width: 1024px) 25vw, 50vw" />
                </div>
                <div className="p-4">
                  <p className="serif-body text-xl font-semibold">{event.title}</p>
                  <p className="mt-2 text-sm text-zinc-500">{event.date}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <section ref={visitRef} id="visit-guide" className="bg-[#2d5016] py-24 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-14 text-center"
            initial={{ opacity: 0, y: 24 }}
            animate={visitInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.55 }}
          >
            <h2 className="serif-display text-6xl">방문 안내</h2>
            <p className="serif-body mt-4 text-2xl text-white/80">자연과 함께하는 특별한 시간을 위해 필요한 정보를 안내해드립니다</p>
          </motion.div>
          <ul className="mb-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "운영시간", content: "오전 9시 - 오후 6시\n(동절기: 오전 9시 - 오후 5시)", icon: Clock3 },
              { title: "위치", content: siteConfig.contact.address ?? "서울특별시 강남구 자연로 123", icon: MapPin },
              { title: "문의전화", content: siteConfig.contact.phone ?? "02-1234-5678", icon: PhoneCall },
              { title: "이메일", content: `${siteConfig.contact.email}\n24시간 문의 가능`, icon: Mail },
            ].map((info, idx) => (
              <motion.li
                key={info.title}
                className="rounded-2xl bg-white/10 p-7 backdrop-blur-sm"
                initial={{ opacity: 0, y: 18 }}
                animate={visitInView ? { opacity: 1, y: 0 } : undefined}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-xl">
                  <info.icon size={20} strokeWidth={1.75} />
                </div>
                <h3 className="serif-display text-3xl">{info.title}</h3>
                <p className="serif-body mt-3 whitespace-pre-line text-lg leading-relaxed text-white/80">{info.content}</p>
              </motion.li>
            ))}
          </ul>

          <motion.div
            className="rounded-3xl bg-white/10 p-10 text-center backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={visitInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            <h3 className="serif-display text-5xl">지금 바로 예약하세요</h3>
            <p className="serif-body mt-4 text-2xl text-white/80">온라인 예약 시 10% 할인 혜택을 드립니다</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
              <Link
                href="/#visit-guide"
                className="inline-flex min-w-[164px] items-center justify-center rounded-full border border-white bg-white px-10 py-3 text-lg font-semibold text-[#2d5016] transition hover:bg-white/90"
              >
                예약하기
              </Link>
              <Link
                href="/#about-overview"
                className="inline-flex min-w-[164px] items-center justify-center rounded-full border-2 border-white bg-transparent px-10 py-3 text-lg font-semibold text-white transition hover:bg-white/10"
              >
                더 알아보기
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
