import React, { useEffect, useState } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import Texto from '../../componentes/Texto';
import { getRepositorios } from '../../servicos/requisicoes/Repositorios';
import estilos from './estilos'

export default function Repositorios({ route, navigation }) {
    const [repo, setRepo] = useState([]);
    const estaNaTela = useIsFocused();

    async function buscarRepositorios() {
        const resultado = await getRepositorios(route.params.login);
        setRepo(resultado);
        console.log(repo);
    }

    useEffect(() => {
        buscarRepositorios();
    }, [estaNaTela])

    return (
        <>
            <View style={estilos.topo}>
                <TouchableOpacity style={estilos.botaoVoltar} onPress={() => {navigation.goBack()}}>
                    <Texto style={estilos.textoVoltar}>Voltar</Texto>
                </TouchableOpacity>
            </View>
            <View style={estilos.tela}>

                <Texto style={estilos.quantidadeRepositorios}>{repo.length} repositórios</Texto>

                <FlatList
                    data={repo}
                    keyExtractor={repo => repo.id}
                    style={estilos.flatlist}
                    renderItem={({ item }) => (
                        <View style={estilos.cardRepositorio}>
                            <Texto style={estilos.nomeRepositorio}>{item.name}</Texto>
                            <Texto style={estilos.dataRepositorio}>{item.created_at}</Texto>
                        </View>
                    )}

                />
            </View>
        </>
    );
}