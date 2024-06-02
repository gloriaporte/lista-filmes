import styled from "styled-components";

export const Container = styled.View`
    background-color: #fff;
    justify-content: space-between;
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

export const ContainerTabela = styled.View`
    display: flex;
    margin-top: 20px;
`;

export const Tabela = styled.FlatList.attrs({
})`
    height: 330px;
`;

export const ItemLista = styled.View`
    background-color: #f2f2f2;
    padding: 10px;
    margin: 5px;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Linha = styled.View`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    width: 100%;
    padding: 20px 10px;
  `;

export const Informacao = styled.View`
    width: 140px;
`;

export const Cliente = styled.Text`
    font-size: 16px;
    font-weight: 700;
    color: #444;
`;

export const Data = styled.Text`
    font-size: 14px;
    font-weight: 100;
    color: #bbb;
`;

export const Valor = styled.Text`
    font-size: 16px;
    font-weight: 700;
    width: 100px;
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