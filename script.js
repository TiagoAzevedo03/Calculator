let atual = "0";
let primeiro = -1;
let operator;
let igual = false;

const number = (n) => {
    if (igual){ 
        primeiro = -1;
        igual = false;
    }
    atual += n;
    printText(Number(atual));
}

const op = (a) => {
    if (igual) igual = false;
    if (a == 'C'){
        atual = "0";
        primeiro = -1;
    }
    else if (a == 'dot'){
        atual += '.';
    }
    else if (a == 'sqrt'){
        atual = Math.sqrt(Number(atual));
     }
     else if (a == '%'){
         atual = Number(atual)/100;
     }
     else if (a == 'pow'){
         atual = Number(atual)*Number(atual);
     }
    else if (primeiro == -1 && atual != "0"){
        primeiro = Number(atual);
        operator = a; atual = "0";
    }
    else {
        if (operator == '+'){
            primeiro = Number(atual) + primeiro;
        }
        else if (operator == '-'){
            primeiro = primeiro - Number(atual);
        }
        else if (operator == 'x'){
            primeiro = Number(atual) * primeiro;
        }
        else if (operator == '/'){
            primeiro = primeiro / Number(atual);
        }
        atual = "0";
        operator = a;
        if (operator == '='){
            igual = true;
        }
    }
    printText(Number(atual));
}

function printText(str) {
    if (atual == "0" && primeiro != -1) str = primeiro;
    document.getElementById("visor").innerHTML = str;
}