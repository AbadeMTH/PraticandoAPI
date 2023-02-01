import api from '../api';

export async function getRepositorios(login) {
    try {
        const resultado = await api.get(`/users/${login}/repos`);
        return resultado.data;
    } catch (error) {
        console.log(error);
        return [];
    }
}