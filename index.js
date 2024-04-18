const screen = document.querySelector('#screen');
var j;
var x;

const calculate = (elem) => {
    //Para que no exista doble signo
    preSign = screen.innerHTML[screen.innerHTML.length-1];
    if (preSign == '*' || preSign == '/' || preSign == '+' || preSign == '-' ) {
        if (elem == '*' || elem == '/' || elem == '-' || elem == '+' ) return;
    }
    //Eliminar un digito
    if (elem == 'D') {
        screen.innerHTML = screen.innerHTML.slice(0, -1);
        return;
    }
    //Agregar un numero negativo
    if (elem == 'M') {
        for (j = 0; j < screen.innerHTML.length; j++) {
            if (isNaN(parseInt(screen.innerHTML[j]))) x = j;
        };
        if (screen.innerHTML[x] == '-') return;
        screen.innerHTML = screen.innerHTML.slice(0, x+1) + '-' + screen.innerHTML.slice(x+1, screen.innerHTML.length);
        return;
    }
    //Eliminar todos los digitos
    if (elem == "C"){
        screen.innerHTML = '';
        return;
    }
    //Igual (funcion aparte)
    if (elem == '=') {
        equal();
        return;
    }
    //Escribir en la pantalla
    screen.innerHTML += elem;
}



const equal = ()=> {
    if (screen.innerHTML == '') screen.innerHTML = '0';
    screen.innerHTML = eval(screen.innerHTML);
}
