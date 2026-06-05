"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type StoryBlockProps = {
  numero: string;
  texto: string;
  imagen?: string;
  imageLeft?: boolean;
  destacado?: boolean;
};

export default function StoryBlock({
  numero,
  texto,
  imagen,
  imageLeft = false,
  destacado = false,
}: StoryBlockProps) {
  return (
    <section className="border-t border-[#C8A27A]/10">
      <div
        className={`mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 ${
          imageLeft ? "" : ""
        }`}
      >
        {/* Imagen izquierda */}
        {imageLeft && imagen && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-video overflow-hidden"
          >
            <Image
              src={imagen}
              alt=""
              fill
              className="object-cover"
            />
          </motion.div>
        )}

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="flex items-start gap-6">
            <div>
              <p className="text-4xl font-light text-[#C8A27A]">
                {numero}
              </p>

              <div className="mt-4 h-16 w-px bg-[#C8A27A]/40" />
            </div>

            <p
              className={`whitespace-pre-line leading-relaxed ${
                destacado
                  ? "text-4xl md:text-5xl text-[#C8A27A]"
                  : "text-3xl md:text-4xl text-[#F5E9DC]"
              }`}
            >
              {texto}
            </p>
          </div>
        </motion.div>

        {/* Imagen derecha */}
        {!imageLeft && imagen && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[16/9] overflow-hidden"
          >
            <Image
              src={imagen}
              alt=""
              fill
              className="object-cover"
            />
          </motion.div>
        )}
      </div>
    </section>
  );
}