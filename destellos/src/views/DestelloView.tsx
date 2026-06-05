"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const principios = [
  {
    titulo: "No explica todo",
    texto:
      "Un destello deja espacio. Cuenta lo suficiente para que algo se entienda, pero no tanto como para quitarle al recuerdo su silencio.",
  },
  {
    titulo: "Parte de algo peque\u00f1o",
    texto:
      "Una llamada, una esquina, una foto, una frase dicha tarde. Lo importante casi nunca llega vestido de cosa importante.",
  },
  {
    titulo: "Habla desde la cicatriz",
    texto:
      "No escribe desde el grito. Mira lo que pas\u00f3 con algo de distancia, sin fingir que ya no duele.",
  },
];

export default function DestelloView() {
  return (
    <main className="bg-[#0B0908] text-[#F5E9DC]">
      <section className="relative flex min-h-[85vh] items-end overflow-hidden px-6 pb-20 pt-32">
        <Image
          src="/que-es.png"
          alt={"\u00bfQu\u00e9 es un destello?"}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-linear-to-t from-[#0B0908] via-[#0B0908]/40 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 mx-auto w-full max-w-6xl"
        >
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-[#C8A27A]">
            Una forma de mirar
          </p>

          <h1 className="max-w-4xl text-5xl font-light tracking-[0.14em] md:text-7xl">
            {"\u00bfQU\u00c9 ES UN DESTELLO?"}
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-[#DDD0C2] md:text-2xl">
            No es una historia extraordinaria. Es algo que casi todos vivieron,
            pero pocas veces se detuvieron a mirar.
          </p>
        </motion.div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm uppercase tracking-[0.25em] text-[#C8A27A]">
              La voz
            </p>
            <h2 className="mt-5 text-4xl font-light leading-tight md:text-5xl">
              Destellos no habla desde la herida abierta.
              <span className="block text-[#C8A27A]">Habla desde la cicatriz.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-6 text-lg leading-8 text-[#DDD0C2] md:text-xl md:leading-9"
          >
            <p>
              Por eso no busca impresionar. No necesita cerrar todo con una
              {"ense\u00f1anza ni convertir cada dolor en una frase linda."}
            </p>
            <p>
              A veces alcanza con volver a una escena y mirarla mejor. Una mesa,
              {
                "un mensaje, una despedida, un silencio que en su momento pareci\u00f3 normal."
              }
            </p>
            <p>
              Lo que importa no es sonar inteligente. Lo que importa es sonar
              verdadero.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-[#C8A27A]/10 px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {principios.map((principio, index) => (
            <motion.article
              key={principio.titulo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: index * 0.08 }}
              className="border border-[#C8A27A]/15 bg-[#151210]/70 p-6"
            >
              <p className="mb-8 text-sm text-[#C8A27A]/80">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="text-2xl font-light text-[#F5E9DC]">
                {principio.titulo}
              </h3>
              <p className="mt-5 leading-7 text-[#DDD0C2]">{principio.texto}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="px-6 py-24 text-center">
        <p className="mx-auto max-w-3xl text-3xl font-light leading-relaxed text-[#C8A27A] md:text-5xl">
          {"Algunas cosas no vuelven. Pero a veces todav\u00eda iluminan un poco."}
        </p>

        <Link
          href="/explorar"
          className="mt-12 inline-block border border-[#C8A27A]/40 px-7 py-4 text-sm uppercase tracking-[0.18em] text-[#F5E9DC] transition-all duration-500 hover:bg-[#C8A27A] hover:text-black"
        >
          Explorar destellos
        </Link>
      </section>
    </main>
  );
}
