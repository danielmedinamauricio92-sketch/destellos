"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { type DestelloEntry, emotionLabels } from "@/data/destellos";

type SeedDestelloProps = {
  entry: DestelloEntry;
};

export default function SeedDestello({ entry }: SeedDestelloProps) {
  return (
    <main className="bg-[#0B0908] text-[#F5E9DC]">
      <section className="relative flex min-h-screen items-end overflow-hidden px-6 pb-20 pt-32">
        <Image
          src={entry.image}
          alt={entry.title}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-linear-to-t from-[#0B0908] via-[#0B0908]/45 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 mx-auto w-full max-w-5xl"
        >
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-[#C8A27A]">
            Espacio abierto
          </p>

          <h1 className="max-w-4xl text-5xl font-light tracking-[0.14em] md:text-7xl">
            {entry.title}
          </h1>

          <div className="mt-8 h-px w-20 bg-[#C8A27A]/40" />

          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-[#DDD0C2] md:text-2xl">
            {entry.summary}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {entry.emotions.map((emotion) => (
              <span
                key={emotion}
                className="border border-[#C8A27A]/20 px-4 py-2 text-xs uppercase tracking-[0.16em] text-[#C8A27A]"
              >
                {emotionLabels[emotion]}
              </span>
            ))}
          </div>

          <p className="mt-12 max-w-2xl leading-8 text-[#DDD0C2]">
            {
              "Este destello todav\u00eda no tiene su historia escrita. Queda como un lugar preparado para cuando aparezca el recuerdo verdadero."
            }
          </p>

          <Link
            href="/explorar"
            className="mt-12 inline-block border border-[#C8A27A]/40 px-7 py-4 text-sm uppercase tracking-[0.18em] text-[#F5E9DC] transition-all duration-500 hover:bg-[#C8A27A] hover:text-black"
          >
            Volver al archivo
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
