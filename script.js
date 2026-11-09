function maiorNumero(a, b, c) {
    let maior = a;
    if (b > maior) {
        maior = b;
    }
    if (c > maior) {
        maior = c;
    }
    return maior;
}

function ordemCrescente(a, b, c) {
    let numeros = [a, b, c];
    numeros.sort(function (x, y) {
        return x - y;
    });
    return numeros;
}

function ehPalindromo(texto) {
    
    let limpo = texto.toLowerCase().replaceAll(" ", "");
    let invertido = limpo.split("").reverse().join("");

    if (limpo === invertido) {
        return "É palíndromo";
    } else {
        return "Não é palíndromo";
    }
}


function subconjunto(palavra1, palavra2) {
    if (palavra1 === undefined || palavra2 === undefined || palavra1 === "" || palavra2 === "") {
        return "erro";
    }


    if (palavra1.includes(palavra2)) {
        return "é um subconjunto";
    } else {
        return "não é um subconjunto";
    }
}

function diaDaSemana(data) {
    let dias = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira",
                "Quinta-feira", "Sexta-feira", "Sábado"];

    let partes = data.split("-");
    let d = new Date(partes[0], partes[1] - 1, partes[2]);

    return dias[d.getDay()];
}

function mostrarMaior() {
    let a = Number(document.getElementById("m1").value);
    let b = Number(document.getElementById("m2").value);
    let c = Number(document.getElementById("m3").value);
    document.getElementById("resMaior").innerText = "O maior número é: " + maiorNumero(a, b, c);
}

function mostrarOrdem() {
    let a = Number(document.getElementById("o1").value);
    let b = Number(document.getElementById("o2").value);
    let c = Number(document.getElementById("o3").value);
    document.getElementById("resOrdem").innerText = "Ordem crescente: " + ordemCrescente(a, b, c).join(", ");
}

function mostrarPalindromo() {
    let texto = document.getElementById("texto").value;
    document.getElementById("resPalindromo").innerText = ehPalindromo(texto);
}

function mostrarSubconjunto() {
    let p1 = document.getElementById("palavra1").value;
    let p2 = document.getElementById("palavra2").value;
    document.getElementById("resSubconjunto").innerText = subconjunto(p1, p2);
}

function mostrarDiaSemana() {
    let data = document.getElementById("data").value;
    if (data === "") {
        document.getElementById("resDia").innerText = "Informe uma data.";
        return;
    }
    document.getElementById("resDia").innerText = "Dia da semana: " + diaDaSemana(data);
}