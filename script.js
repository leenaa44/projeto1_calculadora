//Criando a classe da calculadora
class Calculator {
    constructor(){
    //Aqui é a propiedade que receberá os valores digitados
    this.displayValue = " ";
    }
    //Este método adiciona os valores à propriedade displayValue
    //Permitindo que o usuário veja os caracteres/valores na tela
    appendToDisplay(value){
    this.displayValue += value;
    //Chamamos o método updateDisplay dentro do método
    //appendToDisplay para que quando o usuário digitar alguma tecla
    //da calculadora o valor que foi armazenado na propiedade displayValue seja
    //exibida na tela
    this.updateDisplay();
    }
    
    //Este metodo atualiza o elemento input no html com o valor
    //atual que está armazenado em displayValue
    updateDisplay(){
    document.getElementById("displayContent").value = this.displayValue;
    }
    
    //Este método limpa o valor que está armazenado em
    //displayValue e chama a função updateDisplay para
    // atualizar a tela com um valor vazio.
    clearDisplay(){
    this.displayValue = " ";
    this.updateDisplay();
    }
    
    // o método try catch executa o calculo da expressão matemática contida em displayValue. Esse método utiliza
    // a função eval() para avaliar a expressão e, se for bem sucedida, atualiza o displayValue com o resultado e 
    // chama a função updateDisplay(). Se ocorrer um erro durante a avaliação, ele atualiza o displayValue() com a 
    // mensagem "erro" e chama a função updateDisplay
    calculate(){
    try{
    const result = math.evaluate(this.displayValue);
    this.displayValue = result.toString();
    this.updateDisplay();
    } catch (error) {
    this.displayValue = "Erro"
    this.updateDisplay();
    }
    }
    }
    //Criando o objeto ou instanciando a classe
    //objeto chamado calc
    const calc = new Calculator();