import BriefDestello, {
  type BriefDestelloBlock,
} from "@/components/destellos/BriefDestello";

const blocks: BriefDestelloBlock[] = [
  {
    text: "Durante d\u00edas hablamos de un futuro\nque todav\u00eda no exist\u00eda.",
    image: "/cuna.png",
  },
  {
    text: "Cochecitos dobles.\n\nNombres.\n\nHorarios.\n\nFormas de cuidarlos.",
    image: "/planes.png",
    imageLeft: true,
  },
  {
    text: "Pero mientras hac\u00edamos planes\nalgo ya se estaba rompiendo.\n\nY todav\u00eda no pod\u00edamos verlo.",
    image: "/incertidumbre.png",
  },
  {
    text: "Ese d\u00eda hablamos poco.\n\nMensajes.\n\nPeleas.\n\nS\u00faplicas.\n\nPromesas de que todo iba a estar bien.",
    image: "/llamada.png",
    imageLeft: true,
  },
  {
    text: "Y despu\u00e9s llam\u00f3.",
  },
  {
    text: '"Ya no est\u00e1."',
  },
  {
    text: "No recuerdo cu\u00e1nto tiempo pas\u00f3.\n\nEncend\u00ed un cigarrillo.\n\nVolv\u00ed a casa.",
    image: "/esquina.png",
  },
  {
    text: "Me encerr\u00e9 en la habitaci\u00f3n\nde mis padres.\n\nY me derrumb\u00e9.",
  },
  {
    text: "Creo que fue la primera vez\nque nuestro destello\nempez\u00f3 a perder\nun poco de su brillo.",
    highlight: true,
  },
];

export default function LaLlamadaView() {
  return (
    <BriefDestello
      label="Destello I"
      title="La llamada"
      heroImage="/llamada.png"
      subtitle="Esta es la historia de c\u00f3mo un destello empez\u00f3 a perder su brillo."
      blocks={blocks}
    />
  );
}
