import styled from "styled-components";

export const Container = styled.View`
    background-color: #fff;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100%;
`;

export const Cabecalho = styled.View`
    background-color: #984efc;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    display: flex;
    width: 100%;
    height: 90px;
    top: 0;
    padding-left: 20px;
    padding-bottom: 10px;
    padding-right: 20px;
`;

export const Titulo = styled.Text`
    font-size: 24px;
    color: #fff;
`;

export const Input = styled.TextInput`
    width: 90%;
    height: 40px;
    border-radius: 10px;
    border: 1px solid #ccc;
    margin-top: 40px;
    padding: 10px;
    margin-bottom: 40px;
`;

export const BotaoTouchable = styled.TouchableOpacity`
   border-radius: 30px;
   display: flex;
   align-items: center;
`;

export const TextoBotao = styled.Text`
    color: #fff;
    font-size: 20px;
`;

export const DescricaoInput = styled.Text` 
    font-size: 16px;
`;

export const TextoBotaoFormulario = styled.Text`
    color: #fff;
    font-size: 20px;
`;

export const BotaoTouchableFormulario = styled.TouchableOpacity`
   width: 90%;
   border-radius: 10px;
   display: flex;
   padding-top: 10px;
   padding-bottom: 10px;
   align-items: center;
   background-color: #984efc;
`;
