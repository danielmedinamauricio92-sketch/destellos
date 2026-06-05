"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HomeView() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0B0908] text-[#F5E9DC]">
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <Image
          src="/deste.png"
          alt="Destellos"
          fill
          priority
          className="object-cover scale-105"
        />

        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,162,122,0.12),transparent_60%)]" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="relative z-10 max-w-3xl"
        >
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-[#C8A27A]">
            {"Fragmentos de d\u00edas, recuerdos y silencios"}
          </p>

          <h1 className="mb-8 text-6xl font-light tracking-[0.25em] md:text-8xl">
            DESTELLOS
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-[#DDD0C2] md:text-xl">
            Algunas cosas no desaparecen.
            <br />
            {"Solo aprenden a vivir m\u00e1s lejos."}
          </p>

          <Link
            href="/explorar"
            className="inline-block border border-[#C8A27A]/40 px-8 py-4 text-sm uppercase tracking-[0.2em] text-[#F5E9DC] transition-all duration-500 hover:bg-[#C8A27A] hover:text-black"
          >
            Explorar
          </Link>
        </motion.div>

        <div className="absolute bottom-0 left-0 h-40 w-full bg-linear-to-t from-[#0B0908] to-transparent" />
      </section>
    </main>
  );
}
