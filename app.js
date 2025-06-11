const container = document.getElementById('container');
const filtroCategoria = document.getElementById('filtroCategoria');

let cartoes = []; // variavel que armazena os cartoes

function criaCartao(categoria, pergunta, resposta) {
    let cartao = document.createElement('article');
    cartao.className = 'cartao';
    cartao.dataset.categoria = categoria;  // adiciona categoria

    cartao.innerHTML = `
    <div class="cartao__conteudo">
        <h3>${categoria}</h3>
        <div class="cartao__conteudo__pergunta">
            <p>${pergunta}</p>
        </div>
        <div class="cartao__conteudo__resposta">
            <p>${resposta}</p>
        </div>
    </div>
    `;

    let respostaEstaVisivel = false;

    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel;
        cartao.classList.toggle('active', respostaEstaVisivel);
    }
    cartao.addEventListener('click', viraCartao);

    container.appendChild(cartao);
    cartoes.push(cartao);
}

function populaFiltro() {
    // nomeia categorias
    const categorias = [...new Set(cartoes.map(c => c.dataset.categoria))];
    categorias.forEach(cat => {
        const option = document.createElement('option');
        option.value = cat;
        option.textContent = cat;
        filtroCategoria.appendChild(option);
    });
}

function filtrarCartoes() {
    const categoriaSelecionada = filtroCategoria.value;
    cartoes.forEach(cartao => {
        if (categoriaSelecionada === 'todas' || cartao.dataset.categoria === categoriaSelecionada) {
            cartao.style.display = 'flex';  // mostra
        } else {
            cartao.style.display = 'none';  // esconde
        }
    });
}

filtroCategoria.addEventListener('change', filtrarCartoes);

criaCartao('Substantivo (noun)', 'Apple', 'Apple significa maçã');
criaCartao('Verbo (verb)', 'Run', 'Run significa correr');
criaCartao('Adjetivo (adjective)', 'Happy', 'Happy significa feliz');
criaCartao('Substantivo (noun)', 'Book', 'Book significa livro');
criaCartao('Verbo (verb)', 'Eat', 'Eat significa comer');
criaCartao('Adjetivo (adjective)', 'Fast', 'Fast significa rápido');
criaCartao('Substantivo (noun)', 'Car', 'Car significa carro');
criaCartao('Verbo (verb)', 'Read', 'Read significa ler');
criaCartao('Adjetivo (adjective)', 'Beautiful', 'Beautiful significa bonito');
criaCartao('Substantivo (noun)', 'Dog', 'Dog significa cachorro');

criaCartao('Verbo (verb)', 'Write', 'Write significa escrever');
criaCartao('Adjetivo (adjective)', 'Strong', 'Strong significa forte');
criaCartao('Substantivo (noun)', 'House', 'House significa casa');
criaCartao('Verbo (verb)', 'Sing', 'Sing significa cantar');
criaCartao('Adjetivo (adjective)', 'Cold', 'Cold significa frio');
criaCartao('Substantivo (noun)', 'Chair', 'Chair significa cadeira');
criaCartao('Verbo (verb)', 'Sleep', 'Sleep significa dormir');
criaCartao('Adjetivo (adjective)', 'Soft', 'Soft significa macio');
criaCartao('Substantivo (noun)', 'Tree', 'Tree significa árvore');
criaCartao('Verbo (verb)', 'Jump', 'Jump significa pular');

criaCartao('Adjetivo (adjective)', 'Tall', 'Tall significa alto');
criaCartao('Substantivo (noun)', 'Water', 'Water significa água');
criaCartao('Verbo (verb)', 'Drive', 'Drive significa dirigir');
criaCartao('Adjetivo (adjective)', 'Dark', 'Dark significa escuro');
criaCartao('Substantivo (noun)', 'Computer', 'Computer significa computador');
criaCartao('Verbo (verb)', 'Talk', 'Talk significa conversar');
criaCartao('Adjetivo (adjective)', 'Light', 'Light significa claro');
criaCartao('Substantivo (noun)', 'Phone', 'Phone significa telefone');
criaCartao('Verbo (verb)', 'Cook', 'Cook significa cozinhar');
criaCartao('Adjetivo (adjective)', 'Busy', 'Busy significa ocupado');

criaCartao('Substantivo (noun)', 'Window', 'Window significa janela');
criaCartao('Verbo (verb)', 'Watch', 'Watch significa assistir');
criaCartao('Adjetivo (adjective)', 'Clean', 'Clean significa limpo');
criaCartao('Substantivo (noun)', 'Table', 'Table significa mesa');
criaCartao('Verbo (verb)', 'Open', 'Open significa abrir');
criaCartao('Adjetivo (adjective)', 'Friendly', 'Friendly significa amigável');
criaCartao('Substantivo (noun)', 'Sun', 'Sun significa sol');
criaCartao('Verbo (verb)', 'Close', 'Close significa fechar');
criaCartao('Adjetivo (adjective)', 'Noisy', 'Noisy significa barulhento');
criaCartao('Substantivo (noun)', 'School', 'School significa escola');

criaCartao('Verbo (verb)', 'Learn', 'Learn significa aprender');
criaCartao('Adjetivo (adjective)', 'Smart', 'Smart significa inteligente');
criaCartao('Substantivo (noun)', 'Pen', 'Pen significa caneta');
criaCartao('Verbo (verb)', 'Listen', 'Listen significa escutar');
criaCartao('Adjetivo (adjective)', 'Big', 'Big significa grande');
criaCartao('Substantivo (noun)', 'Ball', 'Ball significa bola');
criaCartao('Verbo (verb)', 'Paint', 'Paint significa pintar');
criaCartao('Adjetivo (adjective)', 'Red', 'Red significa vermelho');

populaFiltro();
filtrarCartoes();
