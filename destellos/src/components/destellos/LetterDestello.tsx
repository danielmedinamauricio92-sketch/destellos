"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type LetterDestelloProps = {
  label: string;
  title: string;
  image: string;
  paragraphs: string[];
  signature?: string;
};

export default function LetterDestello({
  label,
  title,
  image,
  paragraphs,
  signature,
}: LetterDestelloProps) {
  return (
    <main className="bg-[#0B0908] text-[#F5E9DC]">
      <section className="relative min-h-screen overflow-hidden px-6 py-24">
        <Image src={image} alt={title} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-linear-to-b from-[#0B0908]/20 via-[#0B0908]/70 to-[#0B0908]" />

        <motion.article
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 mx-auto max-w-3xl pt-16"
        >
          <p className="mb-8 text-sm uppercase tracking-[0.3em] text-[#C8A27A]">
            {label}
          </p>

          <h1 className="text-5xl font-light tracking-[0.12em] md:text-7xl">
            {title}
          </h1>

          <div className="my-10 h-px w-20 bg-[#C8A27A]/40" />

          <div className="space-y-8 text-xl leading-9 text-[#E8D8C8] md:text-2xl md:leading-10">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          {signature && (
            <p className="mt-14 text-right text-xl text-[#C8A27A]">
              {signature}
            </p>
          )}

          <Link
            href="/explorar"
            className="mt-16 inline-block border border-[#C8A27A]/40 px-7 py-4 text-sm uppercase tracking-[0.18em] text-[#F5E9DC] transition-all duration-500 hover:bg-[#C8A27A] hover:text-black"
          >
            Volver a explorar
          </Link>
        </motion.article>
      </section>
    </main>
  );
}
