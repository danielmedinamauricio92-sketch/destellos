import SeedDestello from "@/components/destellos/SeedDestello";
import { destellos } from "@/data/destellos";

export default function ElRegresoPage() {
  const entry = destellos.find((destello) => destello.id === "el-regreso")!;
  return <SeedDestello entry={entry} />;
}
