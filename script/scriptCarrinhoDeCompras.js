document.addEventListener("DOMContentLoaded", function() {
    // Selecionando os botões e elementos relevantes
    const quantidadeText = document.querySelector('.quantidade-text');
    const botaoMinus = document.querySelector('.botaoMenos');
    const botaoPlus = document.querySelector('.botaoMais');
    const subtotalSpan = document.querySelector('.sub-total');
    const totalSpan = document.querySelector('.total-text');
    const finalizarCompraButton = document.querySelector('.finalizar-compra');
  
    // Adicionando evento de clique para o botão de subtração
    botaoMinus.addEventListener('click', function() {
      // Convertendo a quantidade de texto para um número inteiro
      let quantidade = parseInt(quantidadeText.textContent);
  
      // Subtraindo 1 da quantidade, garantindo que não seja menor que zero
      quantidade = Math.max(0, quantidade - 1);
  
      // Atualizando a quantidade de texto
      quantidadeText.textContent = quantidade;
  
      // Calculando e atualizando o subtotal e o total
      calcularTotal();
    });
  
    // Adicionando evento de clique para o botão de adição
    botaoPlus.addEventListener('click', function() {
      // Convertendo a quantidade de texto para um número inteiro
      let quantidade = parseInt(quantidadeText.textContent);
  
      // Adicionando 1 à quantidade
      quantidade++;
  
      // Atualizando a quantidade de texto
      quantidadeText.textContent = quantidade;
  
      // Calculando e atualizando o subtotal e o total
      calcularTotal();
    });
  
    // Função para calcular o subtotal e o total
    function calcularTotal() {
      // Obtendo o preço do produto do texto
      const preco = parseFloat(document.querySelector('td:nth-child(2)').textContent.replace('R$ ', ''));
  
      // Obtendo a quantidade do texto
      const quantidade = parseInt(quantidadeText.textContent);
  
      // Calculando o subtotal multiplicando o preço pela quantidade
      const subtotal = preco * quantidade;
  
      // Atualizando o subtotal e o total com o formato de moeda
      subtotalSpan.textContent = `R$ ${subtotal.toFixed(2)}`;
      totalSpan.textContent = `R$ ${subtotal.toFixed(2)}`;
    }
  
    // Adicionando evento de clique para o botão "Finalizar Compra"
    if(finalizarCompraButton) {
      finalizarCompraButton.addEventListener('click', function() {
        // Adicione aqui o código para finalizar a compra
        alert('Compra finalizada!');
      });
    }
  });
