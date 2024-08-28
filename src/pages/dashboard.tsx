import { useContext } from "react"; //Fragment ???
import { AuthContext } from "@/contexts/AuthContext";

export default function Dashboard() {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex flex-col justify-center">
      <div className="flex w-full bg-slate-300">
        <h1 className="mx-auto text-3xl bg-slate-300">Dashboard</h1>
      </div>
      <div className="flex flex-col mx-auto">
        <img className="h-8 w-8 rounded-full mx-auto" src={user?.avatar_url} alt="" />
        <h1 className="text-3xl">Olá, {user?.name}</h1>
        <h1 className="text-3xl">Seu email é {user?.email}</h1>
      </div>
    </div>
  );
}
