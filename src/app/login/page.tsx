"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import Link from "next/link"

export default function Login() {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  /* Validation if is empty */
  useEffect(() => {
    if (
      user.username.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);
  /* Validation if is empty */

  const router = useRouter();

  const onLogin = async () => {
    try {
      setLoading(true);

      const response = await axios.post("/api/users/login", user);
      console.log("Dados do FRONTEND enviados: ", user);
      console.log("Response :", response.data);
      router.push("/");

    } catch (error: any) {
      setLoading(false);
      error = error.message;
      console.log(error)
      /* Clear all inputs, accessing objects inside of setUser state */
      setUser({username:"", password:""});

    } finally {

    }
  };

  return (
    <div className="flex flex-col justify-center max-w-md min-h-screen p-6 mx-auto">
      <h1 className="text-center text-3xl font-bold">
        {loading ? "Conectando..." : "Login"}
      </h1>
      <div className="flex flex-col gap-4 pt-10">
        <label className="font-bold" htmlFor="username">
          Usuário
        </label>
        <Input
          id="username"
          type="text"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />

        <label className="font-bold" htmlFor="password">Senha</label>
        <Input
          id="password"
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </div>
      <div className="flex justify-evenly pt-4">
        <Button disabled={buttonDisabled} onClick={onLogin} className="">
          {buttonDisabled ? "Complete o Formulário!" : "Entrar"}
        </Button>
        
        <Link href="/">
          <Button className="">Sair</Button>
        </Link>
      </div>
    </div>
  );
}
