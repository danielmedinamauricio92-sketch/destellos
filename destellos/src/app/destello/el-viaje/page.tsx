import SeedDestello from "@/components/destellos/SeedDestello";
import { destellos } from "@/data/destellos";

export default function ElViajePage() {
  const entry = destellos.find((destello) => destello.id === "el-viaje")!;
  return <SeedDestello entry={entry} />;
}
