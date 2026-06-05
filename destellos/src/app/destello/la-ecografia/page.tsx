import SeedDestello from "@/components/destellos/SeedDestello";
import { destellos } from "@/data/destellos";

export default function LaEcografiaPage() {
  const entry = destellos.find((destello) => destello.id === "la-ecografia")!;
  return <SeedDestello entry={entry} />;
}
