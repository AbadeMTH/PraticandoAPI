import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    tela: {
        flex: 1,
        alignItems: 'center',
    },
    topo: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        backgroundColor: '#d6d6d6',
    },
    botaoVoltar: {
        width: '20%',
    },
    textoVoltar: {
        fontSize: 16,
        lineHeight: 20,
        fontWeight: 'bold',
    },
    quantidadeRepositorios: {
        fontSize: 26,
        lineHeight: 42,
        marginTop: 30,
        marginBottom: 20,
        color: 'purple',
        fontWeight: 'bold',
    },
    flatlist: {
        flex: 1,
        width: '100%',
    },
    cardRepositorio: {
        padding: 26,
        borderBottomColor: '#d6d6d6',
        borderBottomWidth: 1,
    },
    nomeRepositorio: {
        fontSize: 16,
        lineHeight: 32,
        fontWeight: 'bold',
    },
    dataRepositorio: {
        fontSize: 12,
    },
})

export default estilos;