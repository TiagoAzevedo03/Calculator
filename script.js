let atual = "0";
let primeiro;
let operator;

const number = (n) => {
    atual += n;
    printText(Number(atual));
    console.log('Atual: ' + atual);
    console.log('Primeiro: ' + primeiro);
}

const op = (a) => {
    if (a != '=' && a != 'sqrt' && a != '%' && a != 'C' && a != 'pow'){
        primeiro = Number(atual);
        operator = a;
    }
    if (a == 'sqrt'){
       atual = Math.sqrt(Number(atual));
    }
    else if (a == '%'){
        atual = Number(atual)/100;
    }
    else if (a == 'pow'){
        atual = Number(atual)*Number(atual);
    }
    else if (a == 'C'){
        atual = "0";
        primeiro = 0;
    }
    else if (a == '='){
        if (operator == '+'){
            atual = Number(atual) + primeiro;
        }
        else if (operator == '-'){
            atual = primeiro - Number(atual);
        }
        else if (operator == 'x'){
            atual = Number(atual) * primeiro;
        }
        else if (operator == '/'){
            atual = primeiro / Number(atual);
        }
    }
    printText(Number(atual));
    atual = "";

    console.log('Atual: ' + atual);
    console.log('Primeiro: ' + primeiro);
}

function printText(str) {
    document.getElementById("visor").innerHTML = str;
}