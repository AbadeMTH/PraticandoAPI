import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    tela: {
        flex: 1,
        alignItems: 'center',
    },
    fundoImagem: {
        backgroundColor: '#d6d6d6',
        width: '100%',
        height: 144
    },
    areaImagem: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
        width: 150,
        backgroundColor: '#ffff',
        borderRadius: 75,
        marginTop: -75,
    },
    imagem: {
        height: 120,
        width: 120,
        borderRadius: 60,
    },
    nomeUsuario: {
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: 40,
        marginTop: 20,
    },
    localUsuario: {
        fontSize: 14,
        lineHeight: 28,
        color: '#d6d6d6',
    },
    areaSeguidores: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
    },
    colunaSeguidores: {
        alignItems: 'center',
        marginHorizontal: 20,
    },
    numeroSeguidores: {
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 28,
        color: 'purple',
    },
    textoSeguidores: {
        fontSize: 14,
        lineHeight: 26,
    },
    textoRepositorios: {
        fontWeight: 'bold',
        fontSize: 12,
        lineHeight: 24,
        color: 'purple',
    },
    textInput: {
        borderWidth: 2,
        borderRadius: 15,
        width: '90%',
        height: 44,
        borderColor: '#d6d6d6',
        fontFamily: 'AsapRegular',
        paddingLeft: 15,
        marginBottom: 15,
        marginTop: 40,
    },
    botao: {
        borderRadius: 15,
        width: '90%',
        height: 44,
        backgroundColor: 'purple',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textoBotao: {
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 32,
        color: '#ffff',
    },
})

export default estilos;