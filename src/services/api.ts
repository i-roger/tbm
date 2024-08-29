import { getAPIClient } from './axios';
// Inicializando Axios
// Enviar os tokens em toda requisição para ter authentication.

// Chamadas que não são server side rendering.. usando "api"
export const api = getAPIClient();