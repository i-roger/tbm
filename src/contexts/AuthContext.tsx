// ESSE ARQUIVO EXECUTA DO LADO DO BROWSER 
import { createContext, useState, useEffect } from "react";
import { setCookie, parseCookies } from "nookies";
import Router from "next/router";

import { recoverUserInformation, signInRequest } from "@/services/auth";
// Configuração para autenticação em todo app. abstração de _app.tsx

//Para descobrir que tipo de dados vai ter em authenticated
type User = {
    name: string;
    email: string;
    avatar_url: string;

}

type SignInData = {
    email: string;
    password: string;
}

type AuthContextType = {
    isAuthenticated: boolean;
    user: User | null;
    signIn: (data: SignInData) => Promise<void>
}


export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }:any) {

    const [user, setUser] = useState<User | null>(null)

    const isAuthenticated = !!user;

    // ver se tem um token salvo nos cookies
    useEffect(()=> {
        const { '2you.token': token } = parseCookies()

        if (token) {
            recoverUserInformation().then(response=> {
                setUser(response.user)
            })
        }

    }, [])

    async function  signIn({ email, password }: SignInData) {
        const { token, user } = await signInRequest({
            email,
            password,
        })

        setCookie(undefined, '2you.token', token, {
            //è obrigatório informar por quanto tempo esse cookie vai existir :maxAge:
            maxAge: 60 * 60 * 1 // 1 hora isso é igual a ==> 60segundos * 60minutos * 1hora
        })
        setUser(user)

        Router.push('/dashboard');
    }
    
    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
            {children}
        </AuthContext.Provider>
    )
}

