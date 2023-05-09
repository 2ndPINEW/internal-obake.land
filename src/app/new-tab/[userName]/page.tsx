import { Contributes } from "../components/contributes";

export default function NewTab({ params }: { params: { userName: string } }) {
  /* @ts-expect-error Server Component */
  return <Contributes userName={params.userName}></Contributes>;
}
