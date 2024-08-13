"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Login() {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  /* Login Validation */
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
  /* Login Validation */

  const router = useRouter();

  const onLogin = async () => {
    try {
      setLoading(true)

      const response = await axios.post("/api/users/login", user);
      console.log("Dados do FRONTEND enviados: ", user);
      console.log("Response :", response.data);
      router.push("/");
      
    } catch (error: any) {
      setLoading(false)

      error = error.message
      console.log("Seu usuário está errado!", error.message);

    } finally {
      console.log("entrou!!!!!!") 
    }
  };

  return (
    <div className="bg-blue-500 flex flex-col items-center justify-center min-h-screen py-2 gap-2">
      <h1 className="text-3xl">{loading ? "Conectando..." : "Login"}</h1>
      <hr />
      <label htmlFor="username">Username</label>
      <input
        id="username"
        type="text"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />

      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <button disabled={buttonDisabled} onClick={onLogin} className="p-2 rounded bg-green-400">
        {buttonDisabled ? "Complete o Formulário!" : "Entrar"}
      </button>
    </div>
  );
}
