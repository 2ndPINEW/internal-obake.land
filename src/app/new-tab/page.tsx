import { Contributes } from "./components/contributes";
export default function NewTab() {
  {/* @ts-expect-error Server Component */ }
  return <Contributes></Contributes>;
}
