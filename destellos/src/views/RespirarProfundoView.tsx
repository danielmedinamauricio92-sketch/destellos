"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import RelatedDestellos from "@/components/destellos/RelatedDestellos";

const fragments = [
  {
    title: "La madrugada",
    text:
      "Una noche común. Tele tarde, cansancio, una cama ajena que durante un rato volvía a parecer conocida.",
  },
  {
    title: "El dolor",
    text:
      "Me despertó una presión en el pecho. No podía respirar bien. Moverme también costaba.",
  },
  {
    title: "La guardia",
    text:
      "Esperamos varias horas. Nadie nos atendió. Yo tenía que trabajar y preferí convencerme de que no era tan grave.",
  },
  {
    title: "La placa",
    text:
      "Después vinieron las preguntas, los estudios, la posibilidad de una operación, palabras grandes dichas en consultorios fríos.",
  },
];

export default function RespirarProfundoView() {
  return (
    <main className="bg-[#0B0908] text-[#F5E9DC]">
      <section className="relative flex min-h-screen items-end overflow-hidden px-6 pb-20 pt-32">
        <Image
          src="/respirar-profundo.png"
          alt="Una habitación de noche con una placa médica sobre una mesa"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/68" />
        <div className="absolute inset-0 bg-linear-to-t from-[#0B0908] via-[#0B0908]/36 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 mx-auto w-full max-w-6xl"
        >
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-[#C8A27A]">
            Destello VIII
          </p>

          <h1 className="max-w-4xl text-5xl font-light uppercase tracking-[0.13em] md:text-7xl">
            Respirar profundo
          </h1>

          <div className="mt-8 h-px w-20 bg-[#C8A27A]/40" />

          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-[#DDD0C2] md:text-2xl">
            A veces el cuerpo encuentra una forma de decir lo que la cabeza
            todavía no puede ordenar.
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
            El cuerpo
          </p>

          <div className="max-w-3xl space-y-6 text-xl leading-9 text-[#DDD0C2] md:text-2xl md:leading-10">
            <p>
              Veníamos de alejarnos y volver a intentarlo, como si todavía
              hubiera una forma de acomodar algo que se nos había roto muchas
              veces.
            </p>
            <p>
              Esa noche parecía normal. Hasta que el dolor apareció en el pecho
              y por unos minutos la habitación dejó de saber qué hacer conmigo.
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
              La espera
            </p>
            <h2 className="mt-5 text-4xl font-light leading-tight md:text-5xl">
              El miedo no siempre hace ruido.
              <span className="mt-3 block text-[#C8A27A]">
                A veces se queda mirando.
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
              Nos habíamos acostado tarde, después de mirar televisión como si
              la vida pudiera volver a ser una noche cualquiera. En algún
              momento de la madrugada me despertó un dolor fuerte en el pecho.
              Me costaba respirar. También moverme.
            </p>
            <p>
              Ella se quedó al lado, asustada, sin saber bien qué hacer. No era
              una escena grande. Era apenas una habitación quieta, alguien
              intentando volver a respirar y otra persona mirando con miedo a
              que algo pasara mientras no había nada útil para hacer.
            </p>
            <p>
              Después el dolor empezó a bajar. La calma volvió de a poco y pude
              dormir. Ella no. Se quedó despierta, mirándome, como si cerrar los
              ojos fuera dejarme solo con algo que podía volver.
            </p>
            <p>
              Al otro día fuimos a una guardia. Esperamos varias horas, no nos
              atendió nadie y terminamos yéndonos. Yo tenía que trabajar. También
              quería restarle importancia, como si nombrarlo demasiado pudiera
              hacerlo más real.
            </p>
            <p>
              Las semanas siguieron y el dolor también. Empecé a jugar con él:
              respiraba más profundo, movía el cuerpo de cierta manera, como
              quien toca una puerta para ver si alguien todavía está del otro
              lado.
            </p>
          </motion.article>
        </div>
      </section>

      <section className="border-y border-[#C8A27A]/10 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-10 text-sm uppercase tracking-[0.25em] text-[#C8A27A]">
            Señales
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
            Nos dijeron que había que operar.
          </p>
          <p className="mt-8 text-xl leading-8 text-[#DDD0C2]">
            Salimos de la consulta y fuimos al parque de siempre. Miramos patos,
            una tortuga, libretas, lapiceras. Para mis viejos el mundo se había
            derrumbado. Para nosotros, por alguna razón, seguía igual.
          </p>
          <p className="mt-6 text-lg leading-8 text-[#DDD0C2]">
            Después vino otro estudio.
          </p>
          <p className="mt-6 text-lg leading-8 text-[#DDD0C2]">
            Solo sé que un día la imagen volvió limpia, como si el cuerpo
            hubiera decidido callarse.
          </p>

          <RelatedDestellos ids={["frente-al-hospital", "el-tatuaje"]} />

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
