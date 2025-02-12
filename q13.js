function calcularAreaCirculo(raio) {
    if (typeof raio !== 'number') {
      return `Erro: O raio deve ser um número.`;
    } else if (raio <= 0) {
      return `Erro: O raio deve ser positivo.`;
    }
  
    const area = Math.PI * Math.pow(raio, 2);
  
    return area;
  }
  
  const raio = parseInt(prompt("Digite um número:"));
  
  if (isNaN(raio)) {
    console.log("Valor inválido. Digite um número.");
  } else {
    const area = calcularAreaCirculo(raio);
    console.log(`A área do círculo com raio ${raio} é ${area}`);
  }
