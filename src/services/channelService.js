import ENVIRONMENT from "../config/environment.js"
import useFetch from "../hooks/useFetch"
import { getAuthorizationToken } from "../constants/http";


async function getChannelList(workspace_id) {
    const lista_canales = await fetch(ENVIRONMENT.URL_API + `/api/workspaces/${workspace_id}/channels`,
        {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('auth_token')}`,
            }
        }
    )
    if (!lista_canales.ok) {
        throw new Error('Error al obtener la lista de canales')
    }
    return lista_canales
}

async function createChannelByWorkspaceId(workspace_id, channel_name) {
    console.log(channel_name);
    
    const response_http = await fetch(
        ENVIRONMENT.URL_API + `/api/workspaces/${workspace_id}/channels`,
        {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                'Authorization': `Bearer ${getAuthorizationToken()}`,
            },
            body: JSON.stringify({name:channel_name}),
        }
    );
    const response_data = await response_http.json();
    if (!response_data.ok) {
        throw new Error(response_data.message);
    }
    return response_data;
}


export {
    getChannelList,
    createChannelByWorkspaceId
}
