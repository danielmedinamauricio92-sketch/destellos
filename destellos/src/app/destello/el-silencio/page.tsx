import SeedDestello from "@/components/destellos/SeedDestello";
import { destellos } from "@/data/destellos";

export default function ElSilencioPage() {
  const entry = destellos.find((destello) => destello.id === "el-silencio")!;
  return <SeedDestello entry={entry} />;
}
