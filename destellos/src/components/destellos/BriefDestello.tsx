"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export type BriefDestelloBlock = {
  text: string;
  image?: string;
  imageLeft?: boolean;
  highlight?: boolean;
};

type BriefDestelloProps = {
  label: string;
  title: string;
  heroImage: string;
  subtitle: string;
  blocks: BriefDestelloBlock[];
};

export default function BriefDestello({
  label,
  title,
  heroImage,
  subtitle,
  blocks,
}: BriefDestelloProps) {
  return (
    <main className="bg-[#0B0908] text-[#F5E9DC]">
      <section className="relative flex min-h-screen items-center overflow-hidden px-6">
        <Image
          src={heroImage}
          alt={title}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 mx-auto w-full max-w-7xl"
        >
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-[#C8A27A]">
            {label}
          </p>

          <h1 className="max-w-4xl text-5xl font-light uppercase tracking-[0.16em] md:text-8xl">
            {title}
          </h1>

          <div className="mt-8 h-px w-20 bg-[#C8A27A]/40" />

          <p className="mt-8 max-w-xl text-2xl leading-relaxed text-[#DDD0C2]">
            {subtitle}
          </p>
        </motion.div>
      </section>

      {blocks.map((block, index) => (
        <section key={index} className="border-t border-[#C8A27A]/10">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
            {block.imageLeft && block.image && (
              <StoryImage src={block.image} alt="" />
            )}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex items-start gap-6"
            >
              <div>
                <p className="text-4xl font-light text-[#C8A27A]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div className="mt-4 h-16 w-px bg-[#C8A27A]/40" />
              </div>

              <p
                className={`whitespace-pre-line leading-relaxed ${
                  block.highlight
                    ? "text-4xl text-[#C8A27A] md:text-5xl"
                    : "text-3xl text-[#F5E9DC] md:text-4xl"
                }`}
              >
                {block.text}
              </p>
            </motion.div>

            {!block.imageLeft && block.image && (
              <StoryImage src={block.image} alt="" />
            )}
          </div>
        </section>
      ))}

      <section className="border-t border-[#C8A27A]/10 px-6 py-20 text-center">
        <Link
          href="/explorar"
          className="inline-block border border-[#C8A27A]/40 px-7 py-4 text-sm uppercase tracking-[0.18em] text-[#F5E9DC] transition-all duration-500 hover:bg-[#C8A27A] hover:text-black"
        >
          Volver a explorar
        </Link>
      </section>
    </main>
  );
}

function StoryImage({ src, alt }: { src: string; alt: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative aspect-video overflow-hidden border border-[#C8A27A]/10"
    >
      <Image src={src} alt={alt} fill className="object-cover" />
      <div className="absolute inset-0 bg-black/20" />
    </motion.div>
  );
}
