// Lista de nomes de jogadores
const jogadores = [
    "Jogador1", "Jogador2", "Jogador3", "Jogador4", "Jogador5", "Jogador6", "Jogador7", "Jogador8"
  ];
  
  // Função para sortear dois times
  function sortearTimes(jogadores) {
    // Embaralha a lista de jogadores
    const jogadoresEmbaralhados = jogadores.sort(() => Math.random() - 0.5);
    
    // Divide a lista de jogadores em dois times
    const meio = Math.floor(jogadoresEmbaralhados.length / 2);
    const time1 = jogadoresEmbaralhados.slice(0, meio);
    const time2 = jogadoresEmbaralhados.slice(meio);
    
    return {
      time1: time1,
      time2: time2
    };
  }
  
  // Chama a função para sortear os times
  const timesSorteados = sortearTimes(jogadores);
  
  // Exibe os times sorteados
  console.log("Time 1:", timesSorteados.time1);
  console.log("Time 2:", timesSorteados.time2);