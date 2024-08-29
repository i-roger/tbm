// ISTO É PARA SIMULAR O BACKEND!!!!!!!
import { v4 as uuid } from 'uuid';

type SignInRequestData = {
    email: string;
    password: string;
}

// Simular demora! Apenas para desenvolvimento LOCALHOST
const delay = (amount = 750) => new Promise(resolve => setTimeout(resolve, amount))
//Apenas para local
export async function signInRequest(data: SignInRequestData) {
    await delay()

    return {
        token: uuid(),
        user: {
            name: 'Matheus Roger',
            email: 'roger@x.com.br',
            avatar_url: 'https://github.com/i-roger.png'
        }

    }
}

export async function recoverUserInformation() {
    await delay()

    return {
        user: {
            name: 'Matheus Roger',
            email: 'roger@x.com.br',
            avatar_url: 'https://github.com/i-roger.png'
        }
    }
}