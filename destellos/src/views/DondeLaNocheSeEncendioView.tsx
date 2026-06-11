"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import RelatedDestellos from "@/components/destellos/RelatedDestellos";

const fragments = [
  {
    title: "La pelea",
    text:
      "No recuerdo el motivo. Eso se perdió antes que muchas de las cosas que vinieron después.",
  },
  {
    title: "La olla",
    text:
      "La puse como quien busca un límite. Adentro empezaron a caer fotos, cartas, regalos, restos de una historia.",
  },
  {
    title: "Los libros",
    text:
      "También estaban sus libros favoritos, esos que alguna vez habían llegado prestados y ya formaban parte de la casa.",
  },
  {
    title: "El almohadón",
    text:
      "Un corazón de las primeras salidas terminó mezclado con todo lo demás, como si el objeto tuviera la culpa de algo.",
  },
  {
    title: "La puerta",
    text:
      "Alguien entró y me encontró mirando el humo. No había mucho para explicar. Tampoco yo entendía demasiado.",
  },
];

export default function DondeLaNocheSeEncendioView() {
  return (
    <main className="bg-[#0B0908] text-[#F5E9DC]">
      <section className="relative flex min-h-screen items-end overflow-hidden px-6 pb-20 pt-32">
        <Image
          src="/donde-la-noche-se-encendio.png"
          alt="Una olla con papeles quemados y humo dentro de un departamento de noche"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/66" />
        <div className="absolute inset-0 bg-linear-to-t from-[#0B0908] via-[#0B0908]/34 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 mx-auto w-full max-w-6xl"
        >
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-[#C8A27A]">
            Destello IX
          </p>

          <h1 className="max-w-5xl text-5xl font-light uppercase tracking-[0.12em] md:text-7xl">
            Donde la noche se encendió
          </h1>

          <div className="mt-8 h-px w-20 bg-[#C8A27A]/40" />

          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-[#DDD0C2] md:text-2xl">
            No me acuerdo por qué peleamos. Me acuerdo del humo.
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
            El humo
          </p>

          <div className="max-w-3xl space-y-6 text-xl leading-9 text-[#DDD0C2] md:text-2xl md:leading-10">
            <p>
              Hay discusiones que con el tiempo pierden la forma. Uno sabe que
              fueron importantes, que dolieron, que dejaron algo movido de lugar.
              Pero el motivo se borra.
            </p>
            <p>
              Lo que queda es otra cosa. Una habitación. Una olla. El olor a
              papel quemado metiéndose en todo.
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
              El desborde
            </p>
            <h2 className="mt-5 text-4xl font-light leading-tight md:text-5xl">
              A veces uno no sabe qué hacer
              <span className="mt-3 block text-[#C8A27A]">
                con todo lo que siente.
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
              Había sido una pelea más, o eso parece ahora. Una discusión por
              algo que en ese momento debía sentirse enorme y que hoy no puedo
              recordar.
            </p>
            <p>
              Sí recuerdo haber llegado de trabajar y no poder quedarme quieto.
              Caminaba por el departamento, fumaba sin parar, daba vueltas como
              si el cuerpo estuviera buscando una salida antes que la cabeza.
            </p>
            <p>
              Había tristeza, bronca, pérdida. Todo junto. Demasiadas emociones
              para una sola persona y ninguna frase ordenada para ponerlas en su
              lugar.
            </p>
            <p>
              Entonces empecé a juntar cosas. Regalos, fotos, cartas. Objetos
              que en otro momento habían sido una prueba de amor y esa noche se
              volvieron una prueba de que algo seguía doliendo.
            </p>
            <p>
              Puse una olla y las fui dejando ahí. Después vino el fuego. No
              como una escena grande. Más bien como una torpeza desesperada:
              quedarse mirando cómo ardían cosas que no sabían defenderse.
            </p>
            <p>
              También estaban sus libros favoritos, esos que me había prestado.
              El almohadón con forma de corazón de las primeras salidas. Una
              consola vieja que me había regalado para una Navidad, o un Año
              Nuevo. Ya no sé.
            </p>
            <p>
              Saqué cosas a la basura. Quemé otras. Me deshice de lo que pude,
              aunque ahora sé que no era eso lo que quería sacar de mí.
            </p>
          </motion.article>
        </div>
      </section>

      <section className="border-y border-[#C8A27A]/10 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-10 text-sm uppercase tracking-[0.25em] text-[#C8A27A]">
            Restos
          </p>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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
            Después alguien entró al departamento.
          </p>
          <p className="mt-8 text-xl leading-8 text-[#DDD0C2]">
            Me encontró sentado ahí, mirando la olla, mientras el humo empezaba
            a llenar el lugar.
          </p>
          <p className="mt-6 text-lg leading-8 text-[#DDD0C2]">
            No sé qué vio exactamente. Tal vez a una persona enojada. Tal vez a
            alguien triste. Tal vez a alguien que había confundido deshacerse de
            los objetos con deshacerse del dolor.
          </p>
          <p className="mt-6 text-lg leading-8 text-[#DDD0C2]">
            Cuando vuelvo a esa noche, no vuelvo a la pelea.
          </p>
          <p className="mt-6 text-lg leading-8 text-[#DDD0C2]">
            Vuelvo al humo.
          </p>
          <p className="mt-6 text-lg leading-8 text-[#DDD0C2]">
            A esa olla absurda sosteniendo, por un rato, todo lo que yo no sabía
            dónde poner.
          </p>

          <RelatedDestellos ids={["el-tatuaje", "respirar-profundo"]} />

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
