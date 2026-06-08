"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const escenas = [
  {
    title: "Pato",
    text:
      "Un sándwich de milanesa, una comida de salubridad dudosa y una mano chiquita tirando de la ropa para pedir un bocado.",
  },
  {
    title: "Las llaves",
    text:
      "La puerta cerrada como juego. Ella apenas caminando, buscando la llave para no dejarte afuera.",
  },
  {
    title: "La tarjeta",
    text:
      "La máquina de peluches se quedó sin efectivo. Ella ya había entendido que en la billetera todavía quedaba otra respuesta.",
  },
  {
    title: "El abrazo",
    text:
      "Una tarde en casa de tus viejos, subida encima tuyo, abrazada como si soltar tambien fuera perder algo.",
  },
];

export default function CasaCasaView() {
  return (
    <main className="bg-[#0B0908] text-[#F5E9DC]">
      <section className="relative flex min-h-screen items-end overflow-hidden px-6 pb-20 pt-32">
        <Image
          src="/casa-casa.png"
          alt="Una puerta de casa con llaves y un juguete"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-linear-to-t from-[#0B0908] via-[#0B0908]/35 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 mx-auto w-full max-w-6xl"
        >
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-[#C8A27A]">
            Destello IV
          </p>

          <h1 className="max-w-4xl text-5xl font-light uppercase tracking-[0.14em] md:text-7xl">
            Casa, casa
          </h1>

          <div className="mt-8 h-px w-20 bg-[#C8A27A]/40" />

          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-[#DDD0C2] md:text-2xl">
            Hay vínculos que nadie sabe nombrar del todo, pero que igual
            aprenden la forma de una familia.
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
            La frase
          </p>

          <div className="max-w-3xl space-y-6 text-xl leading-9 text-[#DDD0C2] md:text-2xl md:leading-10">
            <p>
              Ella no decía casa una sola vez. Decía casa, casa, como si
              repitiéndolo pudiera encontrar la puerta correcta.
            </p>
            <p>
              Yo la tenía en brazos y no sabía cómo explicarle que ese lugar ya
              no estaba. Que los adultos a veces rompen cosas que los chicos
              todavía siguen buscando.
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
              El lugar
            </p>
            <h2 className="mt-5 text-4xl font-light leading-tight md:text-5xl">
              No era una familia prolija.
              <span className="mt-3 block text-[#C8A27A]">
                Pero fue familia igual.
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
              Yo venía de otra vida. De salir, de ir a bailar, de no pensar
              demasiado lejos. Y de golpe me encontré pasando de ser un pibe de
              veintipico a entender que había una casa esperándome.
            </p>
            <p>
              No fue algo que alguien nombrara con papeles ni con palabras
              grandes. Pasó de a poco. En comidas tarde, en puertas cerradas de
              mentira, en juguetes elegidos con una seriedad imposible, en tus
              viejos convertidos en abuelos sin que nadie supiera bien cuándo.
            </p>
            <p>
              Algunas escenas vuelven sin pedir permiso. No porque hayan sido
              enormes, sino porque tuvieron esa manera rara de quedarse. Una
              mano chiquita pidiendo un pedazo de sándwich. Una llave alcanzada
              desde el otro lado del juego. Una cartera de dinosaurio llena de
              armas y autos.
            </p>
            <p>
              Después, cuando todo se rompió por primera vez, ella volvió a
              verte y pidió volver a casa, casa. Y ahí no había explicación que
              alcanzara.
            </p>
          </motion.article>
        </div>
      </section>

      <section className="border-y border-[#C8A27A]/10 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-10 text-sm uppercase tracking-[0.25em] text-[#C8A27A]">
            Escenas
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {escenas.map((escena, index) => (
              <motion.article
                key={escena.title}
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
                  {escena.title}
                </h3>
                <p className="mt-5 leading-7 text-[#DDD0C2]">{escena.text}</p>
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
            A veces también se extraña lo que nunca fue del todo propio.
          </p>
          <p className="mt-8 text-xl leading-8 text-[#DDD0C2]">
            Y tal vez por eso duele distinto. Porque no hay un nombre exacto
            para ese lugar, pero sí hay memoria.
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
