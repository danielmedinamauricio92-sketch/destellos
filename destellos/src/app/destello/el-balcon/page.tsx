import SeedDestello from "@/components/destellos/SeedDestello";
import { destellos } from "@/data/destellos";

export default function ElBalconPage() {
  const entry = destellos.find((destello) => destello.id === "el-balcon")!;
  return <SeedDestello entry={entry} />;
}
