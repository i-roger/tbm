import { NextRequest, NextResponse } from "next/server";

/* Login | Username: zero Senha: 123 | */
export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const { username, password } = reqBody

        if (username === "zero" && password === "123"){
            console.log("Logado com sucesso! ", username)
            return NextResponse.json({message: "Usuário Logado!"})
        }

    } catch ( error: any ) {
        return NextResponse.json({error: error.message},
        {status: 500})
    }
}