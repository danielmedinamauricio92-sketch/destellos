import SeedDestello from "@/components/destellos/SeedDestello";
import { destellos } from "@/data/destellos";

export default function LaDespedidaPage() {
  const entry = destellos.find((destello) => destello.id === "la-despedida")!;
  return <SeedDestello entry={entry} />;
}
