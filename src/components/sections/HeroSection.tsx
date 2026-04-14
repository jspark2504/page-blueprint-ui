"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section id="home" className="relative isolate flex h-screen items-center justify-center overflow-hidden" aria-label="히어로">
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1920&q=80"
          alt="숲 배경"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#faf8f5]" aria-hidden />
      </div>

      <div className="relative mx-auto w-full max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="serif-display mt-4 text-6xl font-semibold leading-[1.02] tracking-tight text-white sm:text-7xl lg:text-8xl">
            자연과 함께하는
            <br />
            특별한 여정
          </h1>
          <p className="serif-body mt-6 text-2xl text-white/90">도심 속에서 만나는 푸르른 생태공간</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
            <Link
              href="/#about-overview"
              className="inline-flex min-w-[150px] items-center justify-center rounded-full border border-white bg-white px-8 py-3 text-base font-semibold text-[#2d5016] shadow-lg transition hover:bg-[#f1eee7]"
            >
              더 알아보기
            </Link>
            <Link
              href="/#visit-guide"
              className="inline-flex min-w-[150px] items-center justify-center rounded-full border-2 border-white bg-transparent px-8 py-3 text-base font-semibold text-white transition hover:bg-white/10"
            >
              오시는 길
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
