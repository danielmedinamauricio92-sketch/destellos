"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  type DestelloEntry,
  emotionLabels,
} from "@/data/destellos";

type MemoryArchiveProps = {
  entries: DestelloEntry[];
};

export default function MemoryArchive({ entries }: MemoryArchiveProps) {
  const emotions = Array.from(
    new Set(entries.flatMap((entry) => entry.emotions)),
  );
  const published = entries.filter((entry) => entry.status === "published");
  const seeds = entries.filter((entry) => entry.status === "seed");

  return (
    <section className="space-y-16">
      <div className="flex flex-wrap gap-3">
        {emotions.map((emotion) => (
          <span
            key={emotion}
            className="border border-[#C8A27A]/20 px-4 py-2 text-xs uppercase tracking-[0.16em] text-[#C8A27A]"
          >
            {emotionLabels[emotion]}
          </span>
        ))}
      </div>

      <ArchiveSection
        title="Publicados"
        description="Historias que ya tienen cuerpo. No siguen un orden exacto, pero empiezan a conversar entre ellas."
        entries={published}
      />

      <ArchiveSection
        title="Semillas"
        description="Lugares preparados para cuando aparezca el recuerdo verdadero. No hace falta forzarlos."
        entries={seeds}
        muted
      />
    </section>
  );
}

function ArchiveSection({
  title,
  description,
  entries,
  muted = false,
}: {
  title: string;
  description: string;
  entries: DestelloEntry[];
  muted?: boolean;
}) {
  if (!entries.length) {
    return null;
  }

  return (
    <div className="space-y-8">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.25em] text-[#C8A27A]">
          {title}
        </p>
        <p className="mt-4 leading-7 text-[#DDD0C2]">{description}</p>
      </div>

      <div className="grid auto-rows-fr gap-8 md:grid-cols-2 lg:grid-cols-3">
        {entries.map((entry, index) => (
          <ArchiveCard key={entry.id} entry={entry} index={index} muted={muted} />
        ))}
      </div>
    </div>
  );
}

function ArchiveCard({
  entry,
  index,
  muted,
}: {
  entry: DestelloEntry;
  index: number;
  muted: boolean;
}) {
  const label =
    entry.role === "origin"
      ? "Origen de Destellos"
      : entry.status === "seed"
        ? "Semilla"
        : "Destello";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.06,
        duration: 0.6,
      }}
      className="h-full"
    >
      <Link href={entry.route} className="block h-full">
        <article
          className={`group flex h-[560px] flex-col overflow-hidden border bg-[#151210] transition-all duration-500 ${
            entry.role === "origin"
              ? "border-[#C8A27A]/55"
              : muted
                ? "border-[#C8A27A]/10 opacity-75 hover:opacity-100"
                : "border-[#C8A27A]/20 hover:border-[#C8A27A]/60"
          }`}
        >
          <div className="relative h-64 shrink-0 overflow-hidden">
            <Image
              src={entry.image}
              alt={entry.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/35 transition-all duration-500 group-hover:bg-black/20" />
            <span className="absolute left-4 top-4 bg-[#151210]/80 px-4 py-2 text-xs uppercase tracking-[0.18em] text-[#C8A27A]">
              {label}
            </span>
          </div>

          <div className="flex min-h-0 flex-1 flex-col p-6">
            <div className="flex items-start justify-between gap-4">
              <h2 className="text-2xl font-light transition-colors duration-500 group-hover:text-[#C8A27A]">
                {entry.title}
              </h2>

              <span className="text-sm text-[#C8A27A] transition-all duration-500 group-hover:translate-x-1">
                {"\u2192"}
              </span>
            </div>

            <p className="mt-4 line-clamp-4 flex-1 leading-7 text-[#DDD0C2]">
              {entry.summary}
            </p>

            <div className="mt-6 flex min-h-10 flex-wrap items-end gap-2">
              {entry.emotions.map((emotion) => (
                <span key={emotion} className="text-xs text-[#C8A27A]/80">
                  {emotionLabels[emotion]}
                </span>
              ))}
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
