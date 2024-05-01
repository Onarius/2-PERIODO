const bubbleSort = (idDaLista) => {
  // a) Capturar a lista de valores via getElementById
  const lista = document.getElementById(idDaLista);

  // b) Obter cada nó da lista de valores e adicionar o conteúdo do item em um vetor
  let vetor = Array.from(lista.children).map(item => parseInt(item.innerHTML));

  // c) Ordenar o vetor via BubbleSort
  for (let i=0; i< vetor.length; i++) {
    for (let j = i+1; j< vetor.length; j++) {
      if (vetor[i] > vetor[j]) {
        let aux = vetor[i];
        vetor[i] = vetor[j];
        vetor[j] = aux;
      }
    }
  }
  // d) Utilizar map para gerar os novos itens da lista de valores
  const bubbleItens = vetor.map(valor => `<li>${valor}</li>`).join('');
  
  // e) Substituir o conteúdo da lista via innerHTML
  lista.innerHTML = bubbleItens;
  };


const misturar = (idDaLista) => {
  // a) Capturar a lista de valores via getElementById
  const lista = document.getElementById(idDaLista);

  // b) Obter cada nó da lista de valores e adicionar o conteúdo do item em um vetor
  let vetor = Array.from(lista.children).map(item => parseInt(item.innerHTML));

  // c) Embaralhar o vetor
  for (let i = vetor.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [vetor[i], vetor[j]] = [vetor[j], vetor[i]];
  }

  // d) Utilizar map para gerar os novos itens da lista de valores
  const novosItens = vetor.map(valor => `<li>${valor}</li>`).join('');

  // e) Substituir o conteúdo da lista via innerHTML
  lista.innerHTML = novosItens;
};

const quickSort = (idDaLista) => {
  // Função auxiliar para realizar o QuickSort
  const sort = (vetor) => {
    if (vetor.length <= 1) {
      return vetor;
    }

    const pivot = vetor[0];
    const left = [];
    const right = [];

    for (let i = 1; i < vetor.length; i++) {
      vetor[i] < pivot ? left.push(vetor[i]) : right.push(vetor[i]);
    }

    return [...sort(left), pivot, ...sort(right)];
  };

  // a) Capturar a lista de valores via getElementById
  const lista = document.getElementById(idDaLista);

  // b) Obter cada nó da lista de valores e adicionar o conteúdo do item em um vetor
  let vetor = Array.from(lista.children).map(item => parseInt(item.innerHTML));

  // c) Ordenar o vetor
  vetor = sort(vetor);

  // d) Utilizar map para gerar os novos itens da lista de valores
  const sortedItems = vetor.map(valor => `<li>${valor}</li>`).join('');

  // e) Substituir o conteúdo da lista via innerHTML
  lista.innerHTML = sortedItems;
};

