document.addEventListener("DOMContentLoaded", function() {
    // Selecionando os botões e elementos relevantes
    const quantidadeText = document.querySelector('.quantidade-text');
    const botaoMinus = document.querySelector('.botaoMenos');
    const botaoPlus = document.querySelector('.botaoMais');
    const removerButton = document.querySelector('.remover');
    const subtotalSpan = document.querySelector('.sub-total');
    const totalSpan = document.querySelector('.total-text');
    const totalProdutoSpan = document.querySelector('.total-produto-text');
    const finalizarCompraButton = document.querySelector('.finalizar-compra');
  
    // Adicionando evento de clique para o botão de subtração
    botaoMinus.addEventListener('click', function() {
      // Convertendo a quantidade de texto para um número inteiro
      let quantidade = parseInt(quantidadeText.textContent);
  
      // Subtraindo 1 da quantidade, garantindo que não seja menor que zero
      quantidade = Math.max(0, quantidade - 1);
  
      // Atualizando a quantidade de texto
      quantidadeText.textContent = quantidade;
  
      // Calculando e atualizando o subtotal, total e total do produto
      calcularTotais();
    });
  
    // Adicionando evento de clique para o botão de adição
    botaoPlus.addEventListener('click', function() {
      // Convertendo a quantidade de texto para um número inteiro
      let quantidade = parseInt(quantidadeText.textContent);
  
      // Adicionando 1 à quantidade
      quantidade++;
  
      // Atualizando a quantidade de texto
      quantidadeText.textContent = quantidade;
  
      // Calculando e atualizando o subtotal, total e total do produto
      calcularTotais();
    });
  
    // Adicionando evento de clique para o botão de remover
    removerButton.addEventListener('click', function() {
      // Removendo o elemento pai (a linha da tabela)
      removerButton.closest('tr').remove();
  
      // Recalculando os totais
      calcularTotais();
    });
  
    // Função para calcular o subtotal, total e total do produto
    function calcularTotais() {
      let totalGeral = 0;
  
      // Iterando sobre todas as linhas da tabela
      document.querySelectorAll('tbody tr').forEach((row) => {
        const preco = parseFloat(row.querySelector('td:nth-child(2)').textContent.replace('R$ ', '').replace(',', '.'));
        const quantidade = parseInt(row.querySelector('.quantidade-text').textContent);
        const subtotal = preco * quantidade;
  
        // Atualizando o total do produto
        row.querySelector('.total-produto-text').textContent = `R$ ${subtotal.toFixed(2)}`;
  
        // Adicionando ao total geral
        totalGeral += subtotal;
      });
  
      // Atualizando o subtotal e o total com o formato de moeda
      subtotalSpan.textContent = `R$ ${totalGeral.toFixed(2)}`;
      totalSpan.textContent = `R$ ${totalGeral.toFixed(2)}`;
    }
  
    // Calcular subtotal, total e total do produto quando a página carregar
    calcularTotais();
  
    // Adicionando evento de clique para o botão "Finalizar Compra"
    if(finalizarCompraButton) {
      finalizarCompraButton.addEventListener('click', function() {
        // Adicione aqui o código para finalizar a compra
        alert('Compra finalizada!');
      });
    }
  });


//************************************************************************************************************** */

//************************************************************************************************************** */