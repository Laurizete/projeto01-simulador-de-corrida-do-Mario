const players = [
  {
    nome: "Mario",
    velocidade: 4,
    manobrabilidade: 3,
    poder: 3,
    pontos: 0,
  },

  {
    nome: "Peach",
    velocidade: 3,
    manobrabilidade: 4,
    poder: 2,
    pontos: 0,
  },

  {
    nome: "Yoshi",
    velocidade: 2,
    manobrabilidade: 4,
    poder: 3,
    pontos: 0,
  },

  {
    nome: "Bowser",
    velocidade: 5,
    manobrabilidade: 2,
    poder: 5,
    pontos: 0,
  },

  {
    nome: "Luigi",
    velocidade: 3,
    manobrabilidade: 4,
    poder: 4,
    pontos: 0,
  },

  {
    nome: "Donkey Kong",
    velocidade: 2,
    manobrabilidade: 2,
    poder: 5,
    pontos: 0,
  },
];

function rolarDado() { //
  return Math.floor(Math.random() * 6) + 1; // Retorna um número entre 1 e 6
}

function sortearBloco() { //

  const blocos = ["RETA", "CURVA", "CONFRONTO"];//

  const indice = Math.floor(Math.random() * blocos.length);//

  return blocos[indice];
}

function removerPonto(jogador) { 

  if (jogador.pontos > 0) {
    jogador.pontos--;
  }
}

function jogarRodada(jogador1, jogador2) {

  const bloco = sortearBloco();

  console.log(`\n🏎️ Bloco sorteado: ${bloco}`);

  const dado1 = rolarDado();
  const dado2 = rolarDado();

  let total1 = 0;
  let total2 = 0;

  // RETA
  if (bloco === "RETA") {

    total1 = dado1 + jogador1.velocidade;
    total2 = dado2 + jogador2.velocidade;

    console.log(`${jogador1.nome} 🎲 ${dado1} + ${jogador1.velocidade} = ${total1}`);
    console.log(`${jogador2.nome} 🎲 ${dado2} + ${jogador2.velocidade} = ${total2}`);

    if (total1 > total2) {
      jogador1.pontos++;
      console.log(`${jogador1.nome} marcou 1 ponto!`);
    }

    else if (total2 > total1) {
      jogador2.pontos++;
      console.log(`${jogador2.nome} marcou 1 ponto!`);
    }

    else {
      console.log("Empate!");
    }
  }

  // CURVA
  if (bloco === "CURVA") {

    total1 = dado1 + jogador1.manobrabilidade;
    total2 = dado2 + jogador2.manobrabilidade;

    console.log(`${jogador1.nome} 🎲 ${dado1} + ${jogador1.manobrabilidade} = ${total1}`);
    console.log(`${jogador2.nome} 🎲 ${dado2} + ${jogador2.manobrabilidade} = ${total2}`);

    if (total1 > total2) {
      jogador1.pontos++;
      console.log(`${jogador1.nome} marcou 1 ponto!`);
    }

    else if (total2 > total1) {
      jogador2.pontos++;
      console.log(`${jogador2.nome} marcou 1 ponto!`);
    }

    else {
      console.log("Empate!");
    }
  }

  // CONFRONTO
  if (bloco === "CONFRONTO") {

    total1 = dado1 + jogador1.poder;
    total2 = dado2 + jogador2.poder;

    console.log(`${jogador1.nome} 🎲 ${dado1} + ${jogador1.poder} = ${total1}`);
    console.log(`${jogador2.nome} 🎲 ${dado2} + ${jogador2.poder} = ${total2}`);

    if (total1 > total2) {

      removerPonto(jogador2);

      console.log(`${jogador1.nome} venceu o confronto!`);
      console.log(`${jogador2.nome} perdeu 1 ponto!`);
    }

    else if (total2 > total1) {

      removerPonto(jogador1);

      console.log(`${jogador2.nome} venceu o confronto!`);
      console.log(`${jogador1.nome} perdeu 1 ponto!`);
    }

    else {
      console.log("Confronto empatado!");
    }
  }

  console.log(
    `📊 Pontos -> ${jogador1.nome}: ${jogador1.pontos} | ${jogador2.nome}: ${jogador2.pontos}`
  );
}

function corrida(jogador1, jogador2) {

  console.log(`🏁 Corrida entre ${jogador1.nome} e ${jogador2.nome}\n`);

  for (let rodada = 1; rodada <= 5; rodada++) {

    console.log(`\n======== RODADA ${rodada} ========`);

    jogarRodada(jogador1, jogador2);
  }

  console.log("\n🏆 RESULTADO FINAL");

  console.log(`${jogador1.nome}: ${jogador1.pontos} ponto(s)`);
  console.log(`${jogador2.nome}: ${jogador2.pontos} ponto(s)`);

  if (jogador1.pontos > jogador2.pontos) {
    console.log(`\n🥇 ${jogador1.nome} venceu a corrida!`);
  }

  else if (jogador2.pontos > jogador1.pontos) {
    console.log(`\n🥇 ${jogador2.nome} venceu a corrida!`);
  }

  else {
    console.log("\n🤝 A corrida terminou empatada!");
  }
}

corrida(players[0], players[3]);