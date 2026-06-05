import LetterDestello from "@/components/destellos/LetterDestello";

export default function LaCartaPage() {
  return (
    <LetterDestello
      label="Modelo carta"
      title="La carta"
      image="/carta.png"
      paragraphs={[
        "Hay cosas que uno no escribe para enviarlas.",
        "Las escribe para ordenar un poco el ruido. Para decir tarde, aunque sea en una p\u00e1gina, lo que en su momento no encontr\u00f3 lugar en la voz.",
        "Este espacio queda preparado para una carta real. No una explicaci\u00f3n perfecta. Una forma honesta de acercarse a lo que todav\u00eda pesa.",
      ]}
      signature="Destellos"
    />
  );
}
