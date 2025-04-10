const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

rl.question('Digite o primeiro número: ', (n) => {
  const num1 = parseInt(n, 10);
  
  rl.question('Digite o segundo número: ', (m) => {
    const num2 = parseInt(m, 10);
    
    rl.question('Escolha a operação (+ | - | * | /): ', (op) => {
      let resultado;
      
      switch (op) {
        case '+':
          resultado = num1 + num2;
          break;
        case '-':
          resultado = num1 - num2;
          break;
        case '*':
          resultado = num1 * num2;
          break;
        case '/':
          if (num2 === 0) {
            console.log("Erro: Não é possível dividir por zero.");
            rl.close();
            return;
          }
          resultado = num1 / num2;
          break;
        default:
          console.log('Operação inválida.');
          rl.close();
          return;
      }

      console.log('Resultado: ' + resultado);
      rl.close();
    });
  });
});
