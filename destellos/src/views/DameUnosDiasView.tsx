"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const fragments = [
  {
    title: "La decisión",
    text:
      "Hasta ese momento, irme parecía posible. Dolía, sí, pero tenía una forma. Era una decisión cansada, repetida, casi tranquila.",
  },
  {
    title: "Los mensajes",
    text:
      "El teléfono empezó a sonar varias veces. Al principio no contesté. Hay silencios que uno usa para convencerse de que todavía manda sobre algo.",
  },
  {
    title: "El parque",
    text:
      "La batería se apagaba, el parque era enorme y no sabíamos si íbamos a volver a encontrarnos. Después te vi a lo lejos.",
  },
  {
    title: "La promesa",
    text:
      "Dijiste: dame unos días. No sonó a explicación. Sonó a alguien intentando sostener el mundo con las manos.",
  },
];

export default function DameUnosDiasView() {
  return (
    <main className="bg-[#0B0908] text-[#F5E9DC]">
      <section className="relative flex min-h-screen items-end overflow-hidden px-6 pb-20 pt-32">
        <Image
          src="/dame-unos-dias.png"
          alt="Un parque de noche bajo la lluvia con un teléfono sobre un banco"
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
            Destello V
          </p>

          <h1 className="max-w-4xl text-5xl font-light uppercase tracking-[0.13em] md:text-7xl">
            Dame unos días
          </h1>

          <div className="mt-8 h-px w-20 bg-[#C8A27A]/40" />

          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-[#DDD0C2] md:text-2xl">
            Una noche en la que una decisión parecía firme, hasta que alguien
            apareció caminando desde el fondo del parque.
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
            La caída
          </p>

          <div className="max-w-3xl space-y-6 text-xl leading-9 text-[#DDD0C2] md:text-2xl md:leading-10">
            <p>
              Mientras eras mensajes, yo todavía podía sostener mi decisión.
            </p>
            <p>
              Se empezó a caer cuando dijiste que venías. Terminó de caer
              cuando te vi a lo lejos.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-[#C8A27A]">
              Esa noche
            </p>
            <h2 className="mt-5 text-4xl font-light leading-tight md:text-5xl">
              No volviste para explicarlo todo.
              <span className="mt-3 block text-[#C8A27A]">
                Volviste para desordenarlo.
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
              Estaba en la casa de un amigo, quejándome de mi mal de amores
              como quien repite algo para terminar de creérselo. Hablamos de
              pavadas, del trabajo, de la vida. Afuera la noche estaba fresca y
              yo, por primera vez en mucho tiempo, creía saber qué tenía que
              hacer.
            </p>
            <p>
              Los mensajes empezaron a llegar y decidí no contestar. No por
              orgullo, o no solamente por eso. También porque responder era
              volver a entrar en una habitación de la que yo estaba intentando
              salir.
            </p>
            <p>
              Después preguntaste dónde estaba. Te contesté casi sin darle
              importancia, y entonces dijiste que ibas a verme. Que te buscara
              en un lugar.
            </p>
            <p>
              Pasaron horas. El teléfono se quedaba sin batería. El parque era
              demasiado grande para una noche así. Mi amigo me acompañó hasta
              que apareciste, y cuando te vi a lo lejos entendí que una cosa era
              decidir irme de una historia y otra muy distinta era verte venir
              hacia mí.
            </p>
            <p>
              Caminamos. Yo quería entenderte, justificar algo, encontrar una
              forma menos absurda de todo lo que había pasado. Pero nada estaba
              claro. Solo estaba esa promesa tuya, firme y pequeña: dame unos
              días, voy a arreglarlo todo.
            </p>
          </motion.article>
        </div>
      </section>

      <section className="border-y border-[#C8A27A]/10 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-10 text-sm uppercase tracking-[0.25em] text-[#C8A27A]">
            Lo que quedó
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
            Después no arreglaste todo.
          </p>
          <p className="mt-8 text-xl leading-8 text-[#DDD0C2]">
            Hiciste algo más extraño: pusiste las piezas de cabeza y confiaste
            en que íbamos a encontrar la forma de salir juntos de ese desorden.
          </p>
          <p className="mt-6 text-lg leading-8 text-[#DDD0C2]">
            Lo demás ya pertenecía a una vida que otros habían intentado ordenar
            por vos. Una casa, una familia, un esposo, decisiones tomadas
            alrededor de tu cuerpo y de tu futuro.
          </p>

          <Link
            href="/explorar"
            className="mt-12 inline-block border border-[#C8A27A]/40 px-7 py-4 text-sm uppercase tracking-[0.18em] text-[#F5E9DC] transition-all duration-500 hover:bg-[#C8A27A] hover:text-black"
          >
            Volver a explorar
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
