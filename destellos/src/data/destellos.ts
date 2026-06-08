export type DestelloKind = "longform" | "brief" | "letter" | "placeholder";

export type DestelloEmotion =
  | "amor"
  | "culpa"
  | "perdida"
  | "familia"
  | "memoria"
  | "regreso"
  | "silencio"
  | "tiempo"
  | "cuerpo";

export type DestelloEntry = {
  id: string;
  title: string;
  image: string;
  route: string;
  kind: DestelloKind;
  status: "published" | "seed";
  emotions: DestelloEmotion[];
  summary: string;
};

export const emotionLabels: Record<DestelloEmotion, string> = {
  amor: "Amor",
  culpa: "Culpa",
  perdida: "P\u00e9rdida",
  familia: "Familia",
  memoria: "Memoria",
  regreso: "Regreso",
  silencio: "Silencio",
  tiempo: "Tiempo",
  cuerpo: "Cuerpo",
};

export const destellos: DestelloEntry[] = [
  {
    id: "la-linea-invisible",
    title: "La l\u00ednea invisible",
    image: "/esquina.png",
    route: "/destello/la-linea-invisible",
    kind: "longform",
    status: "published",
    emotions: ["amor", "culpa", "memoria", "tiempo"],
    summary:
      "El punto donde todav\u00eda no hab\u00eda pasado nada, pero algo ya hab\u00eda empezado.",
  },
  {
    id: "la-llamada",
    title: "La llamada",
    image: "/telefono.png",
    route: "/destello/la-llamada",
    kind: "brief",
    status: "published",
    emotions: ["perdida", "familia", "silencio"],
    summary:
      "Una llamada que no solo trae una noticia. Tambi\u00e9n cambia la forma de recordar todo lo anterior.",
  },
  {
    id: "frente-al-hospital",
    title: "Frente al hospital",
    image: "/frente-al-hospital.png",
    route: "/destello/frente-al-hospital",
    kind: "longform",
    status: "published",
    emotions: ["perdida", "culpa", "cuerpo", "silencio"],
    summary:
      "Una madrugada afuera de un hospital, cuando no hab\u00eda nada que hacer salvo quedarse cerca.",
  },
  {
    id: "casa-casa",
    title: "Casa, casa",
    image: "/casa-casa.png",
    route: "/destello/casa-casa",
    kind: "longform",
    status: "published",
    emotions: ["familia", "amor", "memoria", "tiempo"],
    summary:
      "Los v\u00ednculos que nadie sabe nombrar del todo, pero que igual aprenden la forma de una familia.",
  },
  {
    id: "dame-unos-dias",
    title: "Dame unos d\u00edas",
    image: "/dame-unos-dias.png",
    route: "/destello/dame-unos-dias",
    kind: "longform",
    status: "published",
    emotions: ["amor", "culpa", "memoria", "tiempo", "silencio"],
    summary:
      "La noche en que una decisi\u00f3n firme empez\u00f3 a caerse en un parque enorme.",
  },
  {
    id: "el-balcon",
    title: "El balc\u00f3n",
    image: "/balcon.png",
    route: "/destello/el-balcon",
    kind: "placeholder",
    status: "seed",
    emotions: ["memoria", "silencio"],
    summary: "Un lugar quieto desde donde algo se mira de otra manera.",
  },
  {
    id: "la-ecografia",
    title: "La ecograf\u00eda",
    image: "/ecografia.png",
    route: "/destello/la-ecografia",
    kind: "placeholder",
    status: "seed",
    emotions: ["familia", "perdida", "tiempo"],
    summary: "Una imagen peque\u00f1a que alguna vez sostuvo un futuro entero.",
  },
  {
    id: "el-tatuaje",
    title: "El tatuaje",
    image: "/tatuaje.png",
    route: "/destello/el-tatuaje",
    kind: "placeholder",
    status: "seed",
    emotions: ["memoria", "tiempo"],
    summary: "Algo que queda en el cuerpo cuando la vida ya cambi\u00f3 de forma.",
  },
  {
    id: "la-despedida",
    title: "La despedida",
    image: "/despedida.png",
    route: "/destello/la-despedida",
    kind: "placeholder",
    status: "seed",
    emotions: ["perdida", "amor", "silencio"],
    summary: "No todas las despedidas terminan cuando alguien se va.",
  },
  {
    id: "el-silencio",
    title: "El silencio",
    image: "/silencio.png",
    route: "/destello/el-silencio",
    kind: "placeholder",
    status: "seed",
    emotions: ["silencio", "culpa", "memoria"],
    summary: "Eso que no se dijo, pero sigui\u00f3 ocupando lugar.",
  },
  {
    id: "la-carta",
    title: "La carta",
    image: "/carta.png",
    route: "/destello/la-carta",
    kind: "letter",
    status: "seed",
    emotions: ["amor", "culpa", "tiempo"],
    summary: "Una forma de decir tarde lo que no encontr\u00f3 lugar antes.",
  },
  {
    id: "el-regreso",
    title: "El regreso",
    image: "/regreso.png",
    route: "/destello/el-regreso",
    kind: "placeholder",
    status: "seed",
    emotions: ["regreso", "memoria", "tiempo"],
    summary: "Volver a un lugar y descubrir que uno tampoco vuelve igual.",
  },
  {
    id: "el-viaje",
    title: "El viaje",
    image: "/viaje.png",
    route: "/destello/el-viaje",
    kind: "placeholder",
    status: "seed",
    emotions: ["regreso", "amor", "memoria"],
    summary: "A veces moverse de lugar alcanza para escuchar otra cosa.",
  },
];

export const publishedDestellos = destellos.filter(
  (destello) => destello.status === "published",
);
