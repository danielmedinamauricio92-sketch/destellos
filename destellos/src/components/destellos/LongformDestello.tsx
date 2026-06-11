"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import RelatedDestellos from "@/components/destellos/RelatedDestellos";

export type LongformChapter = {
  paragraphs: string[];
  pause?: string;
};

export type LongformDestelloProps = {
  label: string;
  title: string;
  heroImage: string;
  heroAlt: string;
  subtitle: string;
  threshold: {
    eyebrow: string;
    paragraphs: string[];
  };
  chapters: LongformChapter[];
  emotionalMap: string[];
  images: {
    src: string;
    alt: string;
  }[];
  closing: {
    title: string;
    text: string;
  };
  relatedIds?: string[];
};

export default function LongformDestello({
  label,
  title,
  heroImage,
  heroAlt,
  subtitle,
  threshold,
  chapters,
  emotionalMap,
  images,
  closing,
  relatedIds = [],
}: LongformDestelloProps) {
  return (
    <main className="bg-[#0B0908] text-[#F5E9DC]">
      <section className="relative flex min-h-screen items-end overflow-hidden px-6 pb-20 pt-32">
        <Image
          src={heroImage}
          alt={heroAlt}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-linear-to-t from-[#0B0908] via-[#0B0908]/35 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 mx-auto w-full max-w-6xl"
        >
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-[#C8A27A]">
            {label}
          </p>

          <h1 className="max-w-4xl text-5xl font-light uppercase tracking-[0.16em] md:text-7xl">
            {title}
          </h1>

          <div className="mt-8 h-px w-20 bg-[#C8A27A]/40" />

          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-[#DDD0C2] md:text-2xl">
            {subtitle}
          </p>
        </motion.div>
      </section>

      <section className="border-y border-[#C8A27A]/10 px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[220px_1fr]"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-[#C8A27A]">
            {threshold.eyebrow}
          </p>

          <div className="max-w-3xl space-y-6 text-xl leading-9 text-[#DDD0C2] md:text-2xl md:leading-10">
            {threshold.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1fr_300px]">
          <article className="space-y-14">
            {chapters.map((chapter, index) => (
              <div key={index} className="space-y-12">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7 }}
                  className="border-l border-[#C8A27A]/20 pl-6 md:pl-10"
                >
                  <p className="mb-6 text-sm text-[#C8A27A]/80">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <div className="space-y-6 text-lg leading-8 text-[#E8D8C8] md:text-xl md:leading-9">
                    {chapter.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </motion.div>

                {chapter.pause && (
                  <motion.blockquote
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.75 }}
                    className="mx-auto max-w-2xl border-y border-[#C8A27A]/20 py-10 text-center text-2xl font-light leading-relaxed text-[#C8A27A] md:text-4xl"
                  >
                    {chapter.pause}
                  </motion.blockquote>
                )}
              </div>
            ))}
          </article>

          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-8">
              <div className="border border-[#C8A27A]/15 bg-[#151210]/65 p-6">
                <p className="text-sm uppercase tracking-[0.22em] text-[#C8A27A]">
                  Mapa emocional
                </p>

                <div className="mt-6 space-y-4">
                  {emotionalMap.map((item, index) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="text-xs text-[#C8A27A]/70">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="h-px flex-1 bg-[#C8A27A]/15" />
                      <span className="text-sm text-[#DDD0C2]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {images.map((image) => (
                <div
                  key={image.src}
                  className="relative aspect-[4/5] overflow-hidden border border-[#C8A27A]/15"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/25" />
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-[#C8A27A]/10 px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-3xl font-light leading-relaxed text-[#C8A27A] md:text-5xl">
            {closing.title}
          </p>
          <p className="mt-8 text-xl leading-8 text-[#DDD0C2]">
            {closing.text}
          </p>

          <RelatedDestellos ids={relatedIds} />

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
