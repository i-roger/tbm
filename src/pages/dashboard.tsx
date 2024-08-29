import { useContext } from "react"; //Fragment ???
import { AuthContext } from "@/contexts/AuthContext";
import { GetServerSideProps } from "next";
import { parseCookies } from 'nookies'; 
import { getAPIClient } from "@/services/axios";


export default function Dashboard() {
  const { user } = useContext(AuthContext);

  // useEffect(() => {
  //   api.get('/users');
  // },[])


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

// !!!!!! SERVER SIDE !!!!!
// Acessar dados do lado servidor via lado cliente
// Validação do token, SERVER SIDE
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  console.log(ctx.req.cookies) // Retorna token na aplicação

  const apiClient = getAPIClient(ctx);

  const {['2you.token']: token} = parseCookies(ctx)

  if (!token) {
    console.log('dashboard.tsx --> Erro, você não tem session token: ', token)
    return {
      redirect: {
        destination: '/login', // Se não tiver autenticado vai para login
        permanent: false, // Não é permanente porque é baseado no estado do usuário, Autenticado ou não?
      }
    }
  }

  await apiClient.get('http://localhost:3000/dashboard') // apiClient.get --> é a pesquisa pelo browser, lado do cliente.

  return {
    props: {} //Objeto vazio que aparece no console.
  }
}