function getListaIngredientes(receita) {
    // a) Iniciar a lista em uma variável texto com a tag ul
    let listaHTML = '<ul>';
    // b) Utilizar map e reduce para obter a representação como itens de lista
    listaHTML += receita.ingredientes.map(ingrediente => `<li>${ingrediente}</li>`).reduce((acc, itemLi) => acc + itemLi, '');
    // c) Finalizar concatenando o fechamento de ul e retornando a lista HTML
    listaHTML += '</ul>';
  
    return listaHTML;
  }
  
  // Exemplo de uso:
  const minhaReceita = {
    "nome": "CREPIOCA",
    "ingredientes": [
        "2 ovos",
        "2 colheres de sopa de tapioca",
        "1 tomate picado",
        "muçarela ralada a gosto",
        "sal e orégano a gosto"
    ],
    "img_src": "imgs/crepioca.webp",
    "modo_de_preparo": [
        "Misture o sal, os ovos e a tapioca e despeje o conteúdo em uma frigideira previamente aquecida. Aguarde até as bordas estarem firmes, e vire para dourar o outro lado. Acrescente os tomates, a muçarela e o orégano",
        " dobre e sirva"
    ]
};
  
function getCard(receita) {
    // Utiliza a função getListaIngredientes previamente definida para obter a lista de ingredientes
    const listaIngredientesHTML = getListaIngredientes(receita);
  
    // Retorna a estrutura do card com substituição direta usando template literals
    return `
      <div class="card" style="width: 250px;">
        <img src="${receita.img_src}" class="card-img-top" alt="${receita.nome}">
        <div class="card-body">
          <h5 class="card-title">${receita.nome}</h5>
          <div class="card-text">
            ${listaIngredientesHTML}
            <hr>
            ${receita.modo_de_preparo}
          </div>
        </div>
      </div>
    `;
  }
  
   // Chama a função getCard e insere o resultado no HTML da página
  document.getElementById('pnlCatalogo').innerHTML += getCard(minhaReceita)
  ;
  
  function preencheCatalogo(receitas) {
    // a) Capturar o elemento pnlCatalogo através de getElementById
    const pnlCatalogo = document.getElementById('pnlCatalogo');
  
    // b) Através de map e reduce, obter o texto HTML para os painéis de receita
    const htmlCatalogo = receitas.map(getCard).reduce((acc, cardHtml) => acc + cardHtml, '');
    console.log(htmlCatalogo);
    // c) Alterar o innerHTML de pnlCatalogo para o texto HTML gerado
    pnlCatalogo.innerHTML = htmlCatalogo;
  }
  