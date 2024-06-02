import { React, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { FilmeService } from "../../services/filme";
import { 
    Container, 
    Cabecalho, 
    Titulo, 
    ContainerTabela, 
    Tabela, 
    ItemLista, 
    Linha, 
    Informacao, 
    Cliente, 
    Data, 
    Valor,
    BotaoTouchable,
    TextoBotao
 } from "./styles";

export default function Home() {
    const navigation = useNavigation();
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [dataId, setDataId] = useState(null);

    useEffect(() => {
        findAllFilme();
    }, []);

    const deleteFilme = (id) => {
        findById(id);
        if (dataId != null) {
            FilmeService.deleteData(id);
            alert("Filme deletado com sucesso!");
        }
    };

    const findAllFilme = () => {
        FilmeService.findAll().then((result) => {
            setData(result);
            setIsLoading(false);
        });
    };

    return (
        <Container>
            <Cabecalho>
                <Titulo>Lista de Filmes</Titulo>
                <BotaoTouchable onPress={() => navigation.navigate("CadastrarEditar")}>
                    <TextoBotao>+</TextoBotao>
                </BotaoTouchable>
            </Cabecalho>
            <ContainerTabela>
            <Tabela 
              showVerticalScrollIndicator={false}
              removeClippedSubviews={false}
              data={data}
              keyExtractor={item => item.id}
              renderItem={ ({ item }) =>  ( 
                <ItemLista
                  titulo={item.titulo}
                  onPress={() => navigation.navigate("Detalhes", { id: item.id })}
                  onDelete={() => deleteFilme(item.id)}
                >
                    <Linha>
                        <Informacao>
                            <Cliente> {item.titulo} </Cliente>
                        </Informacao>
                    </Linha>
                </ItemLista>
              )}
            />
          </ContainerTabela>

        </Container>
    );
}