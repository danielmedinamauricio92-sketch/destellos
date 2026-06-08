"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const fragments = [
  {
    title: "Los planes",
    text:
      "Durante días hablamos de un futuro que todavía no existía. Nombres, horarios, formas de cuidarlos, una vida armada con palabras antes de tener paredes donde apoyarla.",
  },
  {
    title: "El alrededor",
    text:
      "Ella venía de una vida recién ordenada por otros: una casa, una familia, un esposo, decisiones tomadas con demasiada gente mirando.",
  },
  {
    title: "La presión",
    text:
      "En el medio apareció un embarazo. Y alrededor de esa noticia empezaron a moverse opiniones, miedos y obligaciones que no siempre llevaban su voz en el centro.",
  },
  {
    title: "La frase",
    text:
      "Después llamó. No hizo falta demasiado. A veces una noticia entra completa en tres palabras.",
  },
];

export default function LaLlamadaView() {
  return (
    <main className="bg-[#0B0908] text-[#F5E9DC]">
      <section className="relative flex min-h-screen items-end overflow-hidden px-6 pb-20 pt-32">
        <Image
          src="/llamada.png"
          alt="Un teléfono en la noche"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/72" />
        <div className="absolute inset-0 bg-linear-to-t from-[#0B0908] via-[#0B0908]/35 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 mx-auto w-full max-w-6xl"
        >
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-[#C8A27A]">
            Destello I
          </p>

          <h1 className="max-w-4xl text-5xl font-light uppercase tracking-[0.16em] md:text-8xl">
            La llamada
          </h1>

          <div className="mt-8 h-px w-20 bg-[#C8A27A]/40" />

          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-[#DDD0C2] md:text-2xl">
            Una noticia que no llegó sola. Venía con planes, miedo, familia y
            una decisión que otros también empujaban.
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
            Cerca de otra noche
          </p>

          <div className="max-w-3xl space-y-6 text-xl leading-9 text-[#DDD0C2] md:text-2xl md:leading-10">
            <p>
              Esta historia vive cerca de la noche de <em>Dame unos días</em>.
              No la explica del todo, pero deja ver una parte del mismo
              desorden.
            </p>
            <p>
              Para ese entonces ella ya estaba casada. Y aun así, entre los dos
              se había abierto una conversación imposible sobre un futuro que no
              sabía dónde entrar.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-[#C8A27A]">
              El peso
            </p>
            <h2 className="mt-5 text-4xl font-light leading-tight md:text-5xl">
              No era solo perder algo.
              <span className="mt-3 block text-[#C8A27A]">
                Era perder lo que ya habíamos empezado a imaginar.
              </span>
            </h2>
          </motion.div>

          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-7 text-lg leading-8 text-[#E8D8C8] md:text-xl md:leading-9"
          >
            <p>
              Durante días hablamos como hablan las personas que todavía no
              saben si están haciendo planes o pidiendo permiso para creer en
              ellos. Había nombres posibles. Había horarios. Había ideas
              torpes, hermosas, sobre cómo cuidar una vida que todavía era más
              pregunta que certeza.
            </p>
            <p>
              Todo pasaba en un momento raro. Ella llevaba poco tiempo casada y
              alrededor suyo había una familia intentando decidir qué era lo
              correcto, qué convenía, qué debía hacerse. Como si una noticia así
              pudiera resolverse entre voces ajenas.
            </p>
            <p>
              Yo no estaba en el centro de esa casa. Tampoco tenía un lugar
              claro desde donde hablar. Pero igual estaba. Del otro lado del
              teléfono, de los mensajes, de las promesas de que de alguna forma
              íbamos a poder con eso.
            </p>
            <p>
              Después empezaron las peleas, las súplicas, las frases dichas con
              miedo. No recuerdo el orden exacto. Recuerdo la sensación de estar
              intentando sostener algo que se nos iba de las manos mientras
              todos alrededor empujaban hacia una decisión.
            </p>
          </motion.article>
        </div>
      </section>

      <section className="border-y border-[#C8A27A]/10 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-10 text-sm uppercase tracking-[0.25em] text-[#C8A27A]">
            Fragmentos
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {fragments.map((fragment, index) => (
              <motion.article
                key={fragment.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: index * 0.08 }}
                className="border border-[#C8A27A]/15 bg-[#151210]/70 p-7"
              >
                <p className="mb-8 text-sm text-[#C8A27A]/80">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="text-2xl font-light text-[#F5E9DC]">
                  {fragment.title}
                </h3>
                <p className="mt-5 leading-7 text-[#DDD0C2]">
                  {fragment.text}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-3xl font-light leading-relaxed text-[#C8A27A] md:text-5xl">
            “Ya no está.”
          </p>
          <p className="mt-8 text-xl leading-8 text-[#DDD0C2]">
            No recuerdo cuánto tiempo pasó después de escuchar eso. Recuerdo
            prender un cigarrillo, volver a casa y encerrarme en la habitación
            de mis padres.
          </p>
          <p className="mt-6 text-lg leading-8 text-[#DDD0C2]">
            Creo que fue la primera vez que nuestro destello empezó a perder un
            poco de su brillo.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link
              href="/destello/dame-unos-dias"
              className="inline-block border border-[#C8A27A]/40 px-7 py-4 text-sm uppercase tracking-[0.18em] text-[#F5E9DC] transition-all duration-500 hover:bg-[#C8A27A] hover:text-black"
            >
              Leer Dame unos días
            </Link>
            <Link
              href="/explorar"
              className="inline-block border border-[#C8A27A]/20 px-7 py-4 text-sm uppercase tracking-[0.18em] text-[#DDD0C2] transition-all duration-500 hover:border-[#C8A27A]/50 hover:text-[#F5E9DC]"
            >
              Volver a explorar
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
