import React, { useState } from 'react';
import { Alert, Image, TextInput, TouchableOpacity, View } from 'react-native';

import Texto from '../../componentes/Texto';
import { getUsuario } from '../../servicos/requisicoes/Usuario';
import estilos from './estilos';

export default function Principal({ navigation }) {
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [usuario, setUsuario] = useState({});

    async function buscarUsuario() {
        const resultado = await getUsuario(nomeUsuario);

        setNomeUsuario('');
        if (resultado) {
            setUsuario(resultado)
        } else {
            Alert.alert('Usuário não encontrado');
            setUsuario({});
        }
    }

    return (
        <View style={estilos.tela}>
            {
                usuario?.login &&
                <>
                    <View style={estilos.fundoImagem} />
                    <View style={estilos.areaImagem}>
                        <Image style={estilos.imagem} source={{ uri: usuario.avatar_url }} />
                    </View>
                    <Texto style={estilos.nomeUsuario}>{usuario.name}</Texto>
                    <Texto style={estilos.localUsuario}>{usuario.location}</Texto>
                    <View style={estilos.areaSeguidores}>
                        <View style={estilos.colunaSeguidores}>
                            <Texto style={estilos.numeroSeguidores}>{usuario.followers}</Texto>
                            <Texto style={estilos.textoSeguidores}>Seguidores</Texto>
                        </View>
                        <View style={estilos.colunaSeguidores}>
                            <Texto style={estilos.numeroSeguidores}>{usuario.following}</Texto>
                            <Texto style={estilos.textoSeguidores}>Seguindo</Texto>
                        </View>
                    </View>

                    <TouchableOpacity onPress={() => { navigation.navigate('Repositorios', { login: usuario.login })}}>
                        <Texto style={estilos.textoRepositorios}>Ver repositórios</Texto>
                    </TouchableOpacity>
                </>
            }
            <TextInput
                placeholder='Busque por um usuário'
                autoCapitalize='none'
                value={nomeUsuario}
                onChangeText={setNomeUsuario}
                style={estilos.textInput}
            />

            <TouchableOpacity style={estilos.botao} onPress={buscarUsuario}>
                <Texto style={estilos.textoBotao}>Buscar</Texto>
            </TouchableOpacity>
        </View>
    );
}