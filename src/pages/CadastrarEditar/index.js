import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Filme } from "../../models/Filme";
import { FilmeService } from "../../services/filme";
import { Container, Cabecalho, Titulo, BotaoTouchable, TextoBotao, Input, DescricaoInput, BotaoTouchableFormulario, TextoBotaoFormulario } from "./styles";

export default function CadastrarEditar() {
    const navigation = useNavigation();
    const [title, setTitle] = useState("");

    insertFilme=(item)=> {
        let file = new Filme();
        file.titulo = item;

        FilmeService.addData(file);
        if(title == null){
            alert("Não foi possivel inserir o novo filme")
        }
    }

    return (
        <Container>
            <Cabecalho>
                <Titulo>Novo Filme</Titulo>
                <BotaoTouchable onPress={() => navigation.navigate("Home")}>
                    <TextoBotao>Voltar</TextoBotao>
                </BotaoTouchable>
            </Cabecalho>
            <Input
                value={title}
                onChangeText={setTitle}
                placeholder="Título"
            />
            <BotaoTouchableFormulario onPress={() => insertFilme() }>
                <TextoBotaoFormulario>Adicionar</TextoBotaoFormulario>
            </BotaoTouchableFormulario>
        </Container>
    );
}