const display = document.getElementById('display');


function addNumber(number){
    display.value += number;
}

function addOperator(operator){
    if(display.value !== '' && !isNaN(display.value.slice(-1))){
        display.value += operator;
    }
}

function clearDisplay(){
    display.value = '';
}

function deleteNumber(){
    display.value = display.value.slice(0, -1);
}

function resultado(){
    try{
        display.value = calculate(display.value);
    }catch(e){
        display.value = "Erro";
    }
}

function calculate(expression){
    let operators = ['+', '-', '*', '/'];
    let operator = null;
    let num1 = '';
    let num2 = '';

    for(let i = 0; i < expression.length; i++){
        if(operators.includes(expression[i])){  
            operator = expression[i];
            num1 = expression.slice(0, i);
            num2 = expression.slice(i + 1);
            break;
        }
    }

    if(operator && num1 !== '' && num2 !== ''){
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        switch(operator){
            case '+': 
                return num1 + num2;
            case '-': 
                return num1 - num2;
            case '*':
                return num1 * num2;
            case '/': 
                if(num2 === 0){
                    return 'erro';
                }
                return num1 / num2;
            default: 
            return'erro';
        }
    }
    return expression;
}

function negative(){
    if(display.value !== '0' && display.value !== ''){  
        if(display.value.charAt(0) === '-'){
            display.value = display.value.slice(1);
        }else{
            display.value = '-' + display.value;
        }
    }
}

function ponto(){
    if(!display.value.includes('.')){
        display.value += '.'
    }
}