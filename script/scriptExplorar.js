document.addEventListener('DOMContentLoaded', () => {
    // Função para adicionar item ao carrinho
    function adicionarAoCarrinho(produtoId) {
        // Aqui você pode adicionar o código para adicionar o produto ao carrinho
        // Simulando a adição do produto ao carrinho
        console.log(`Produto ${produtoId} adicionado ao carrinho`);

        // Exibindo um alerta de sucesso
        alert(`Produto ${produtoId} foi adicionado ao carrinho`);
    }

    // Selecionando todos os ícones de carrinho
    const iconesCarrinho = document.querySelectorAll('.fa-shopping-cart');

    // Adicionando o evento de clique a cada ícone de carrinho
    iconesCarrinho.forEach((icone) => {
        icone.addEventListener('click', () => {
            const produtoId = icone.getAttribute('id');
            adicionarAoCarrinho(produtoId);
        });
    });
});

    // Função para adicionar item aos favoritos
    function adicionarAosFavoritos() {
        // Exibindo um alerta de sucesso
        alert('Produto adicionado na lista de favoritos');
    }

    // Selecionando todos os ícones de carrinho
    const iconesCarrinho = document.querySelectorAll('.fa-shopping-cart');

    // Adicionando o evento de clique a cada ícone de carrinho
    iconesCarrinho.forEach((icone) => {
        icone.addEventListener('click', () => {
            const produtoNome = icone.getAttribute('data-produto-nome');
            adicionarAoCarrinho(produtoNome);
        });
    });

    // Selecionando todos os ícones de coração
    const iconesFavoritos = document.querySelectorAll('.fa-heart');

    // Adicionando o evento de clique a cada ícone de coração
    iconesFavoritos.forEach((icone) => {
        icone.addEventListener('click', adicionarAosFavoritos);
    });
    
