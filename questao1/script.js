const num1 = parseInt(prompt("Digite o primeiro número: "),10)
const num2 = parseInt(prompt("Digite o segundo número: "),10)
const operacao = prompt("Escolha a operação: (+ | - | * | /) ")

let resultado = null;
switch (operacao) {
    case "+":
        resultado = num1 + num2
        break;
    case "-":
        resultado = num1 - num2
        break;
    case "*":
        resultado = num1 * num2
        break;
    case "/":
        resultado = num1 / num2
        break;

    default:
        break;
}
