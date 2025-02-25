const usuarios = []

function adicionarUsuario(nome, email, senha) {
    usuarios.push({ nome, email, senha })
}

function removerUsuario(email) {
    const index = usuarios.findIndex(user => user.email === email);
    if (index !== -1) {
        usuarios.splice(index, 1)
        return true
    }
    return false;
}

function atualizarUsuario(email, novoNome, novaSenha) {
    const usuario = usuarios.find(user => user.email === email)
    if (usuario) {
        usuario.nome = novoNome;
        usuario.senha = novaSenha;
        return true
    }
    return false
}

function listarUsuarios() {
    return usuarios.map(user => ({ nome: user.nome, email: user.email }))
}

export { adicionarUsuario, removerUsuario, atualizarUsuario, listarUsuarios }
