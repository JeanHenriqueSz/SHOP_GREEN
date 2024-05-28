document.addEventListener("DOMContentLoaded", function() {
  // Selecionando os elementos relevantes
  const subtotalSpan = document.querySelector('.sub-total');
  const totalSpan = document.querySelector('.total-text');
  const finalizarCompraButton = document.querySelector('.finalizar-compra');
  const tabelaProdutos = document.querySelector('tbody');

  // Função para calcular o subtotal, total e total do produto
  function calcularTotais() {
    let totalGeral = 0;

    // Iterando sobre todas as linhas da tabela
    tabelaProdutos.querySelectorAll('tr').forEach((row) => {
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

  // Delegação de eventos para os botões de mais e menos
  tabelaProdutos.addEventListener('click', function(event) {
    const target = event.target;
    if (target.closest('.botaoMais') || target.closest('.botaoMenos')) {
      // Encontrando a linha e os elementos relevantes
      const row = target.closest('tr');
      const quantidadeText = row.querySelector('.quantidade-text');
      let quantidade = parseInt(quantidadeText.textContent);

      if (target.closest('.botaoMais')) {
        quantidade++;
      } else if (target.closest('.botaoMenos')) {
        quantidade = Math.max(0, quantidade - 1);
      }

      // Atualizando a quantidade de texto
      quantidadeText.textContent = quantidade;

      // Calculando e atualizando o subtotal, total e total do produto
      calcularTotais();
    }
  });

  // Delegação de eventos para o botão de remover
  tabelaProdutos.addEventListener('click', function(event) {
    const target = event.target;
    if (target.closest('.remover')) {
      // Removendo o elemento pai (a linha da tabela)
      target.closest('tr').remove();

      // Recalculando os totais
      calcularTotais();
    }
  });

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
