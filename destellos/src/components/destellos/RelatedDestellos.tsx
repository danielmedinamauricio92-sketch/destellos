"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { destellos, emotionLabels } from "@/data/destellos";

type RelatedDestellosProps = {
  ids: string[];
};

export default function RelatedDestellos({ ids }: RelatedDestellosProps) {
  const related = ids
    .map((id) => destellos.find((destello) => destello.id === id))
    .filter((destello): destello is NonNullable<typeof destello> => Boolean(destello));

  if (!related.length) {
    return null;
  }

  return (
    <div className="mx-auto mt-14 max-w-4xl text-left">
      <div className="mb-6 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-[#C8A27A]">
          Cerca de este destello
        </p>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#DDD0C2]/70">
          No por orden. Por una emoción parecida, una marca cercana, una forma
          de seguir mirando.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {related.map((destello, index) => (
          <motion.div
            key={destello.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
          >
            <Link
              href={destello.route}
              className="group grid min-h-36 grid-cols-[112px_1fr] overflow-hidden border border-[#C8A27A]/15 bg-[#151210]/80 transition-all duration-500 hover:border-[#C8A27A]/55"
            >
              <div className="relative min-h-full overflow-hidden">
                <Image
                  src={destello.image}
                  alt={destello.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/35" />
              </div>

              <div className="p-5">
                <p className="mb-3 text-xs uppercase tracking-[0.18em] text-[#C8A27A]/80">
                  {destello.role === "origin" ? "Origen" : "Relacionado"}
                </p>
                <h3 className="text-xl font-light text-[#F5E9DC] transition-colors duration-500 group-hover:text-[#C8A27A]">
                  {destello.title}
                </h3>
                <p className="mt-3 line-clamp-2 text-sm leading-6 text-[#DDD0C2]">
                  {destello.summary}
                </p>
                <p className="mt-4 text-xs leading-5 text-[#C8A27A]/70">
                  {destello.emotions
                    .map((emotion) => emotionLabels[emotion])
                    .join(" · ")}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
