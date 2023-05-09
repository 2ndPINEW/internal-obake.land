import { Clock } from "../components/clock";
import { Contributes } from "../components/contributes";

export default function NewTab({ params }: { params: { userName: string } }) {
  return (
    <>
      <Clock></Clock>
      {/* @ts-expect-error Server Component */}
      <Contributes userName={params.userName}></Contributes>
    </>
  );
}
