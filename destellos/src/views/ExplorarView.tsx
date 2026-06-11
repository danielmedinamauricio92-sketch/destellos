"use client";

import { motion } from "framer-motion";
import MemoryArchive from "@/components/destellos/MemoryArchive";
import { destellos } from "@/data/destellos";

export default function ExplorarView() {
  return (
    <main className="min-h-screen bg-[#0B0908] px-6 py-24 text-[#F5E9DC]">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C8A27A]">
            Archivo
          </p>

          <h1 className="mb-6 max-w-4xl text-5xl font-light leading-tight tracking-[0.12em] md:text-7xl">
            Entrar por recuerdos
          </h1>

          <p className="max-w-2xl text-lg leading-8 text-[#DDD0C2]">
            {
              "No todos los recuerdos llegan en orden. Algunos se encuentran por culpa, otros por amor, otros por esa clase de silencio que tarda a\u00f1os en decir algo."
            }
          </p>
        </motion.div>

        <MemoryArchive entries={destellos} />
      </div>
    </main>
  );
}
