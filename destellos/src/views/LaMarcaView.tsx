"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const fragments = [
  {
    title: "Reconciliación",
    text:
      "Hablábamos en serio de cambiar, de escucharnos más, de entender cómo era posible querernos tanto y aun así no funcionar.",
  },
  {
    title: "El pato",
    text:
      "No era solo tu nombre. También estaba ese pato, una broma familiar, una forma pequeña y absurda de decir que todavía existíamos.",
  },
  {
    title: "La mancha",
    text:
      "Años después me mostraste cómo lo habías tapado. Lo que había sido promesa ahora era algo que necesitabas cubrir.",
  },
  {
    title: "El nombre",
    text:
      "Mucho tiempo después apareció una palabra para una parte del caos. Ayudó a mirar, pero no convirtió la historia en diagnóstico.",
  },
];

export default function LaMarcaView() {
  return (
    <main className="bg-[#0B0908] text-[#F5E9DC]">
      <section className="relative flex min-h-screen items-end overflow-hidden px-6 pb-20 pt-32">
        <Image
          src="/la-marca.png"
          alt="Una marca de tinta cubierta junto a un pequeño pato"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/68" />
        <div className="absolute inset-0 bg-linear-to-t from-[#0B0908] via-[#0B0908]/38 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 mx-auto w-full max-w-6xl"
        >
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-[#C8A27A]">
            Destello VI
          </p>

          <h1 className="max-w-4xl text-5xl font-light uppercase tracking-[0.14em] md:text-7xl">
            La marca
          </h1>

          <div className="mt-8 h-px w-20 bg-[#C8A27A]/40" />

          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-[#DDD0C2] md:text-2xl">
            Hay marcas que nacen como promesa y con los años aprenden otro
            idioma.
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
            La promesa
          </p>

          <div className="max-w-3xl space-y-6 text-xl leading-9 text-[#DDD0C2] md:text-2xl md:leading-10">
            <p>
              Bromeaste durante días con tatuarte mi nombre. Yo siempre te
              respondía lo mismo: no te animás.
            </p>
            <p>
              Hasta que una noche llegó una foto. Tu nombre escrito en el pecho
              y, al lado, un pato. En ese momento parecía una forma rara y
              hermosa de decir todavía.
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
              El cuerpo
            </p>
            <h2 className="mt-5 text-4xl font-light leading-tight md:text-5xl">
              No todo lo que queda en la piel
              <span className="mt-3 block text-[#C8A27A]">
                sabe explicar por qué quedó.
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
              Veníamos de un golpe grave y nos aferrábamos a una relación que
              ya se estaba volviendo demasiado difícil. La reconciliación número
              trescientos cuarenta y cinco, quizá. Pero en ese momento todavía
              hablábamos como si cambiar fuera una puerta que podíamos abrir si
              encontrábamos la llave correcta.
            </p>
            <p>
              Decíamos que había que hablar más. Que si nos queríamos tanto,
              algo tenía que poder acomodarse. Lo decíamos con seriedad, con
              cansancio, con esa esperanza torpe de quienes ya se lastimaron
              demasiado pero todavía no saben soltar.
            </p>
            <p>
              Entonces apareció esa foto. Mi nombre en tu pecho y un pato al
              lado. El pato no era un detalle menor: a Alma, al bebé y a mí nos
              gustaban los patos. A mí también me gustaba pelear con los gansos,
              que es una forma bastante ridícula de guardar ternura.
            </p>
            <p>
              Después de eso pensé que quizá podíamos con todo. Nos duró poco,
              como tantas cosas nuestras. Pero durante un rato esa marca pareció
              decir que todavía había algo dispuesto a quedarse.
            </p>
          </motion.article>
        </div>
      </section>

      <section className="border-y border-[#C8A27A]/10 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-10 text-sm uppercase tracking-[0.25em] text-[#C8A27A]">
            Restos
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
            Cuando me mostraste que lo habías tapado, sonreí.
          </p>
          <p className="mt-8 text-xl leading-8 text-[#DDD0C2]">
            Dije que estaba bien, que era normal, que cada uno tenía derecho a
            seguir. Y creo que era verdad. Pero también era verdad otra cosa:
            alguna parte de mí todavía recordaba la foto original.
          </p>
          <p className="mt-6 text-lg leading-8 text-[#DDD0C2]">
            Con el tiempo entendí algo más incómodo: cuando más me quisiste, no
            pude verlo. Y cuando te alejaste fue cuando más me aferré.
          </p>
          <p className="mt-6 text-lg leading-8 text-[#DDD0C2]">
            No todas las marcas de mis brazos llevaban tu nombre. Pero muchas
            nacieron en noches donde yo no sabía cómo quedarme conmigo.
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
