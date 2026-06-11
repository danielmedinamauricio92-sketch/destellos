"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  type DestelloEntry,
  type DestelloEmotion,
  emotionLabels,
} from "@/data/destellos";

type MemoryArchiveProps = {
  entries: DestelloEntry[];
};

type EmotionGroup = {
  emotion: DestelloEmotion;
  entries: DestelloEntry[];
};

const emotionDoorCopy: Record<DestelloEmotion, string> = {
  amor: "Cuando algo todavía conserva una forma de ternura.",
  culpa: "Lo que sigue pesando aunque nadie vuelva a nombrarlo.",
  perdida: "Los lugares donde algo se fue, pero dejó una marca.",
  familia: "Vínculos que aprendieron a existir sin pedir permiso.",
  memoria: "Escenas pequeñas que vuelven cuando menos se las espera.",
  regreso: "El impulso raro de volver a tocar una puerta vieja.",
  silencio: "Lo que no se dijo y aun así siguió ocupando lugar.",
  tiempo: "Eso que cambia la escena sin pedir explicaciones.",
  cuerpo: "Cuando lo que dolía encontró otra manera de aparecer.",
};

export default function MemoryArchive({ entries }: MemoryArchiveProps) {
  const emotions = Array.from(
    new Set(entries.flatMap((entry) => entry.emotions)),
  );
  const published = entries.filter((entry) => entry.status === "published");
  const seeds = entries.filter((entry) => entry.status === "seed");
  const emotionGroups = emotions
    .map((emotion) => ({
      emotion,
      entries: published.filter((entry) => entry.emotions.includes(emotion)),
    }))
    .filter((group) => group.entries.length);

  return (
    <section className="space-y-16">
      <EmotionDoors groups={emotionGroups} />

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

      <EmotionRooms groups={emotionGroups} />
    </section>
  );
}

function EmotionDoors({
  groups,
}: {
  groups: EmotionGroup[];
}) {
  if (!groups.length) {
    return null;
  }

  return (
    <div className="border-y border-[#C8A27A]/10 py-10">
      <p className="mb-6 text-sm uppercase tracking-[0.25em] text-[#C8A27A]">
        Puertas de entrada
      </p>

      <div className="grid gap-px overflow-hidden border border-[#C8A27A]/10 bg-[#C8A27A]/10 md:grid-cols-2 lg:grid-cols-4">
        {groups.map(({ emotion }) => (
          <Link
            key={emotion}
            href={`#emocion-${emotion}`}
            className="group bg-[#0B0908] p-5 transition-colors duration-500 hover:bg-[#151210]"
          >
            <span className="text-sm uppercase tracking-[0.18em] text-[#C8A27A]">
              {emotionLabels[emotion]}
            </span>
            <p className="mt-5 line-clamp-2 min-h-12 text-sm leading-6 text-[#DDD0C2]/78">
              {emotionDoorCopy[emotion]}
            </p>
          </Link>
        ))}
      </div>
    </div>
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

            <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/25 to-black/10 transition-all duration-500 group-hover:from-black/50" />
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

            <div className="mt-6 flex min-h-10 items-end text-xs leading-5 text-[#C8A27A]/80">
              {entry.emotions.map((emotion) => emotionLabels[emotion]).join(" · ")}
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}

function EmotionRooms({
  groups,
}: {
  groups: EmotionGroup[];
}) {
  if (!groups.length) {
    return null;
  }

  return (
    <div className="space-y-8">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.25em] text-[#C8A27A]">
          Por emoción
        </p>
        <p className="mt-4 leading-7 text-[#DDD0C2]">
          Algunas historias no se encuentran por fecha. Se encuentran por la
          forma en que todavía pesan.
        </p>
      </div>

      <div className="space-y-6">
        {groups.map(({ emotion, entries }) => (
          <section
            key={emotion}
            id={`emocion-${emotion}`}
            className="scroll-mt-28 border-t border-[#C8A27A]/10 pt-6"
          >
            <div className="grid gap-5 md:grid-cols-[180px_1fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-[#C8A27A]">
                  {emotionLabels[emotion]}
                </p>
                <p className="mt-3 max-w-40 text-sm leading-6 text-[#DDD0C2]/65">
                  {emotionDoorCopy[emotion]}
                </p>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                {entries.slice(0, 4).map((entry) => (
                  <Link
                    key={entry.id}
                    href={entry.route}
                    className="group border border-[#C8A27A]/10 bg-[#151210]/50 p-5 transition-all duration-500 hover:border-[#C8A27A]/45 hover:bg-[#151210]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl font-light text-[#F5E9DC] transition-colors duration-500 group-hover:text-[#C8A27A]">
                        {entry.title}
                      </h3>
                      <span className="text-sm text-[#C8A27A] transition-transform duration-500 group-hover:translate-x-1">
                        {"\u2192"}
                      </span>
                    </div>
                    <p className="mt-3 line-clamp-2 text-sm leading-6 text-[#DDD0C2]/80">
                      {entry.summary}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
