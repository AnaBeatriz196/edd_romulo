const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite o primeiro número: ", (num1) => {
  rl.question("Digite o segundo número: ", (num2) => {
    rl.question("Escolha a operação (+, -, *, /): ", (op) => {
      const a = parseFloat(num1);
      const b = parseFloat(num2);
      let resultado;

      switch (op) {
        case "+":
          resultado = a + b;
          break;
        case "-":
          resultado = a - b;
          break;
        case "*":
          resultado = a * b;
          break;
        case "/":
          resultado = b !== 0 ? a / b : "Erro: divisão por zero";
          break;
        default:
          resultado = "Operação inválida.";
      }

      console.log("Resultado:", resultado);
      rl.close();
    });
  });
});
