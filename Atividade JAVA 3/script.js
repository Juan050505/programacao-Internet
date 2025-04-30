let resultado1 = document.querySelector("#resultado1");
let resultado2 = document.querySelector("#resultado2");
let btSubtrair = document.querySelector("#btSubtrair");
let h3Resultado = document.querySelector("#h3Resultado"); 

function subtrairNumeros(){
    let num1 = Number(resultado1.value);
    let num2 = Number(resultado2.value);

    h3Resultado.textContent = (num1 - num2);

}

btSubtrair.onclick = function(){
    subtrairNumeros();
}