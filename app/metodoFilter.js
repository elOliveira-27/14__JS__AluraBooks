const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

// function filtrarLivros() {
//     const botaoClicado = document.getElementById(this.id)
//     const filtro = botaoClicado.value
//     let livrosFiltrados = filtroPorCategoria(filtro)
//     exibirOsLivrosNaTela(livrosFiltrados)
// }

// function filtroPorCategoria(filtro) {
//     return livros.filter(livro => livro.categoria == filtro)
// }

// const botaoLivrosDisponiveis = document.getElementById('btnLivrosDisponiveis')
// botaoLivrosDisponiveis.addEventListener('click', selecionarLivrosDisponiveis)

// function selecionarLivrosDisponiveis () {
//     let livrosDisponiveis = filtroPorDisponibilidade()
//     exibirOsLivrosNaTela(livrosDisponiveis)
//     exibirValorTotalDosLivrosDisponiveisNaTela ()
// }

// function filtroPorDisponibilidade() {
//     return livros.filter(livro => livro.quantidade > 0)
// }

function filtrarLivros() {
    const botaoClicado = document.getElementById(this.id)
    const categoria = botaoClicado.value
    let livrosFiltrados = categoria == 'disponivel' ? filtroPorDisponibilidade() : filtroPorCategoria(categoria)
    exibirOsLivrosNaTela(livrosFiltrados)
    if (categoria == 'disponivel') {
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados)
        exibirValorTotalDosLivrosDisponiveisNaTela (valorTotal)
    }
}

function filtroPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtroPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTotalDosLivrosDisponiveisNaTela (valorTotal) {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
        </div>  
    `
}
