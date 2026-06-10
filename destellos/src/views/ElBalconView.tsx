"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const fragments = [
  {
    title: "La invitación",
    text:
      "No parecía una noche destinada a empezar nada. Había cansancio, cortesía y demasiadas razones para que todo quedara en una anécdota rara.",
  },
  {
    title: "Los trofeos",
    text:
      "Bajo la autopista había trofeos guardados, como una imagen fuera de lugar. Después quedó la broma: algún día te voy a regalar uno.",
  },
  {
    title: "La comida",
    text:
      "Ofreciste algo de comer. Yo dije que no tenía tanta hambre. A veces el cariño también empieza con pequeñas mentiras piadosas.",
  },
  {
    title: "La palabra",
    text:
      "Salimos a tomar aire de madrugada. En medio de la confusión apareció una luz, y dijiste: mirá, un destello.",
  },
];

export default function ElBalconView() {
  return (
    <main className="bg-[#0B0908] text-[#F5E9DC]">
      <section className="relative flex min-h-screen items-end overflow-hidden px-6 pb-20 pt-32">
        <Image
          src="/balcon.png"
          alt="Un balcón de noche mirando la ciudad"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/62" />
        <div className="absolute inset-0 bg-linear-to-t from-[#0B0908] via-[#0B0908]/34 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 mx-auto w-full max-w-6xl"
        >
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-[#C8A27A]">
            Destello VII
          </p>

          <h1 className="max-w-4xl text-5xl font-light uppercase tracking-[0.14em] md:text-7xl">
            El balcón
          </h1>

          <div className="mt-8 h-px w-20 bg-[#C8A27A]/40" />

          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-[#DDD0C2] md:text-2xl">
            La noche en que una palabra apareció por accidente y después nos
            dejó diez años intentando volver al mismo lugar.
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
            El origen
          </p>

          <div className="max-w-3xl space-y-6 text-xl leading-9 text-[#DDD0C2] md:text-2xl md:leading-10">
            <p>
              Destellos no empezó como un proyecto. Empezó como una palabra
              dicha en un balcón, una madrugada, cuando todavía no sabíamos qué
              iba a hacer esa noche con nosotros.
            </p>
            <p>
              Quizá la historia nunca estuvo destinada a tener un final feliz.
              Pero en ese momento ninguno de los dos podía verlo.
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
              Esa madrugada
            </p>
            <h2 className="mt-5 text-4xl font-light leading-tight md:text-5xl">
              No hubo una gran escena.
              <span className="mt-3 block text-[#C8A27A]">
                Hubo una luz y alguien que la nombró.
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
              Habíamos vuelto de una juntada con amigos. Una tarde agradable,
              conversaciones sueltas, esa clase de calma que a veces engaña
              porque parece no estar preparando nada.
            </p>
            <p>
              Decidí acompañarte a tu casa y, por razones que todavía pertenecen
              al desorden de esa época, terminaste invitándome a quedarme a
              dormir. Yo no esperaba nada. Eras la ex de un amigo, estabas
              atravesando una vida que ya venía con demasiadas cosas encima, y
              había demasiado alrededor como para imaginar otra posibilidad.
            </p>
            <p>
              En el viaje te quedaste medio dormida. Cuando despertaste, estábamos
              más cerca de mi casa que de la tuya. Me preguntaste entre sueño y
              risa por qué no te había despertado. Yo te respondí algo bastante
              simple: no sabía dónde vivías.
            </p>
            <p>
              Después caminamos por una especie de autopista. Abajo había un
              montón de trofeos guardados, una imagen rota, absurda, de esas que
              se quedan porque no encajan con nada. Más adelante volvió como
              broma: algún día te voy a regalar un trofeo.
            </p>
            <p>
              La noche siguió sin saber bien qué era. Me ofreciste comida y yo
              dije que no tenía demasiada hambre. Charlamos. Se hizo tarde. En
              algún momento salimos al balcón a tomar aire, confundidos por lo
              que nos estaba pasando antes de poder ponerle un nombre.
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
            Durante diez años intentamos volver a ese momento.
          </p>
          <p className="mt-8 text-xl leading-8 text-[#DDD0C2]">
            Volver a sentir lo mismo. Volver a ese balcón, a esa luz, a esa
            versión nuestra que todavía no sabía cuánto iba a romperse.
          </p>
          <p className="mt-6 text-lg leading-8 text-[#DDD0C2]">
            Pero el final no tuvo una gran despedida. No hubo una escena final a
            la altura de todo lo que habíamos sido. Un día simplemente pareció
            natural que cada uno siguiera con su vida.
          </p>
          <p className="mt-6 text-lg leading-8 text-[#DDD0C2]">
            Destellos quedó ahí: sin balcón, sin promesa, sin reclamo. Solo como
            una palabra que nació de una luz y terminó aprendiendo a nombrar
            muchas otras cosas.
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
