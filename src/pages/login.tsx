import { useForm } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import Link from "next/link";

import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext"

export default function Login() {
  //Rocketseat tutorial: https://www.youtube.com/watch?v=pvrKHpXGO8E&t=1007s

  const { register, handleSubmit } = useForm();
  const { signIn } = useContext(AuthContext)

  async function handleSignIn(data:any) {
    await signIn(data)
  }

  return (
    <div className="flex flex-col justify-center max-w-md min-h-screen p-6 mx-auto">
      <h1 className="text-center text-3xl font-bold">Login</h1>
      <form
        className="flex flex-col gap-4 pt-10"
        onSubmit={handleSubmit(handleSignIn)}
      >
        {/*Chama função handlesubmit e passa handleSignIn como parametro*/}
        <label className="font-bold" htmlFor="username">
          Usuário
        </label>
        <Input
          {...register("username")}
          id="username"
          name="username"
          type="text"
          required
        />
        <label className="font-bold" htmlFor="password">
          Senha
        </label>
        <Input
          {...register("password")}
          id="password"
          type="password"
          required
        />
        <div className="flex justify-evenly pt-4">
        <Button>Entrar</Button>

        <Link href="/">
          <Button>Sair</Button>
        </Link>
      </div>
      </form>
    </div>
  );
}
