import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await getServerSession();

  if(!session) {
    redirect("/")
  }

  return (
    <div className="">
      <h1 className="text-3xl">Dashboard</h1>
      <h1 className="text-3xl">Olá, {session?.user?.name}</h1>
    </div>
  );
}
