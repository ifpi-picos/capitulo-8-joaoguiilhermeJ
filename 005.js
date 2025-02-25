import { adicionarUsuario, removerUsuario, atualizarUsuario, listarUsuarios } from './modulos/modulo05'

const prompt = require('prompt-sync')()

while (true) {
    console.log("\n1 - Adicionar Usuário")
    console.log("2 - Remover Usuário")
    console.log("3 - Atualizar Usuário")
    console.log("4 - Listar Usuários")
    console.log("5 - Sair")

    const opcao = prompt("Escolha uma opção: ")

    if (opcao === "1") {
        const nome = prompt("Nome: ")
        const email = prompt("E-mail: ")
        const senha = prompt("Senha: ");
        adicionarUsuario(nome, email, senha)
        console.log("Usuário adicionado com sucesso!")
    } 
    else if (opcao === "2") {
        const email = prompt("E-mail do usuário a remover: ")
        if (removerUsuario(email)) {
            console.log("Usuário removido com sucesso!")
        } else {
            console.log("Usuário não encontrado.")
        }
    } 
    else if (opcao === "3") {
        const email = prompt("E-mail do usuário a atualizar: ")
        const novoNome = prompt("Novo nome: ")
        const novaSenha = prompt("Nova senha: ")
        if (atualizarUsuario(email, novoNome, novaSenha)) {
            console.log("Usuário atualizado com sucesso!");
        } else {
            console.log("Usuário não encontrado.")
        }
    } 
    else if (opcao === "4") {
        console.log("Lista de usuários:")
        console.log(listarUsuarios())
    } 
    else if (opcao === "5") {
        console.log("Saindo...")
        break;
    } 
    else {
        console.log("Opção inválida!")
    }
}
