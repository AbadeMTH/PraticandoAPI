import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function Texto({style, children}){
   let estilo = estilos.texto;

   if(style?.fontWeight === 'bold'){
    estilo = estilos.textoNegrito;
   }

   return <Text style={[style, estilo]}>{children}</Text>
}

const estilos = StyleSheet.create({
    texto: {
        fontWeight: 'normal',
        fontFamily: 'AsapRegular',
    },
    textoNegrito: {
        fontWeight: 'normal',
        fontFamily: 'AsapBold',
    },
})