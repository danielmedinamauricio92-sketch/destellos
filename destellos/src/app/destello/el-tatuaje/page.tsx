import SeedDestello from "@/components/destellos/SeedDestello";
import { destellos } from "@/data/destellos";

export default function ElTatuajePage() {
  const entry = destellos.find((destello) => destello.id === "el-tatuaje")!;
  return <SeedDestello entry={entry} />;
}
