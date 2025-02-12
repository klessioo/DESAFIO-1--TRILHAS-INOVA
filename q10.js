let numero;

while (numero !== 5) {
  numero = parseInt(prompt("Digite um número:"));

  if (numero === 5) {
    console.log("Você acertou!");
  } else {
    console.log("Tente novamente.");
  }
}