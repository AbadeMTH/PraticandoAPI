import api from "../api";

export async function getUsuario(login){
    try {
        const resultado = await api.get(`/users/${login}`);
        return resultado.data;
    } catch (error) {
        console.log(error)
        return {}
    }
}