let livros = [];
const dadosApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

pegarLivrosDaAPI();
const pegarListaDeLivros = document.getElementById('livros');

async function pegarLivrosDaAPI() {
    const response = await fetch(dadosApi);
    livros = await response.json();
    const livrosComDesconto = aplicandoDesconto(livros);
    listaLivros(livrosComDesconto);
    // calculaPreco(livrosComDesconto);
}

// Aplicando desconto
function aplicandoDesconto(livros) {
    const desconto = 0.03;
    livrosComDesconto = livros.map(livro => {
        return {
            ...livro, preco: livro.preco - (livro.preco * desconto)
        }
    })
    return livrosComDesconto;
}

// Listando livros na home
function listaLivros(e) {
    pegarListaDeLivros.innerHTML = '';
    e.forEach(livro => {
        pegarListaDeLivros.innerHTML += `
            <div class="livro">
        		<div class="tags">
					<span class="tag">${livro.categoria}</span>
				</div>
				<img
					class="livro__imagens ${livro.quantidade <= 0 ? 'indisponivel' : ''}"
					src="${livro.imagem}"
					alt="${livro.alt}"
				/>
				<h2 class="livro__titulo">
                    ${livro.titulo}
				</h2>
				<p class="livro__descricao">${livro.autor}</p>
				<p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
			</div>
        `;
    });
}

// Aplicando filtros
const btnFilters = document.querySelectorAll("button.btn");
let tags = document.querySelectorAll("span.tag");
let listBtnFilter = [];

btnFilters.forEach(btn => {
    btn.addEventListener("click", function() {
        let btnCategoria = btn.value;
        console.log(btnCategoria);
        if(btnCategoria == 'ordenar') {
            let ordenando = livros.sort((a,b) => a.preco - b.preco);
            let aplicandoDescontoFiltrados = aplicandoDesconto(ordenando);
            listaLivros(aplicandoDescontoFiltrados);
        } else if(btnCategoria == 'disponiveis') {
            let livrosFiltrados = livros.filter(livro => {
                livro.quantidade > 0;
            })
            listaLivros(livrosFiltrados);
            let tot = livros.reduce((acc, livro) => acc + livro.preco );
            console.log(tot);
        } else {
            // let livrosFiltrados = btnCategoria == 'disponiveis' ? livros.filter(livro => livro.quantidade > 0) : livros.filter(livro => livro.categoria == btnCategoria);
            let livrosFiltrados = livros.filter(livro => livro.categoria == btnCategoria);
            listaLivros(livrosFiltrados);
        }
    })
})

// calculando valor total dos precos
let valor = document.querySelector("#valor").innerText;

// function calculaPreco(livros) {
//     console.log(livros)
//     let total = 0;
//     livros.forEach(livro => {
//         let conta = livro.preco;
//         total = conta + total;
//         console.log(total);
//         document.querySelector("#valor").innerText = total.toFixed(2)
//     })
// }