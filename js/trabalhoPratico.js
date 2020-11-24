window.addEventListener("load", start);

var numAtual = document.querySelector(".numAtual");
function start() {
  mostarNumeros();
  numerosPorExtenso();
}

function mostarNumeros() {
  function numeroEscolhido(event) {
    var number = event.target.value;
    numAtual.value = number;
  }
  var num = document.querySelector("#num");
  num.addEventListener("input", numeroEscolhido);
}

function numerosPorExtenso() {
  function conversor(event) {
    var numExtenso = document.querySelector(".numExtenso");
    numb = event.target.value;
    numb.toString();
    if (numb.length === 1) {
      arrayNumb1 = [
        "",
        "um",
        "dois",
        "três",
        "quatro",
        "cinco",
        "seis",
        "sete",
        "oito",
        "nove",
      ];
      var numUsado = arrayNumb1[event.target.value];
      numExtenso.value = numUsado;
    } else {
      if (numb.length === 2) {
        arrayNumb2 = [
          "dez",
          "onze",
          "doze",
          "treze",
          "quatorze",
          "quinze",
          "dezesseis",
          "dezessete",
          "dezoito",
          "dezenove",
          "vinte",
        ];
        if (numb.substr(0, 1) == 1 && numb.substr(1, 1) <= "9") {
          var num1 = numb.substr(1, 1);
          var numUsado = arrayNumb2[num1];
          numExtenso.value = numUsado;
        } else {
          arrayNumb3 = [
            "",
            "",
            "vinte",
            "trinta",
            "quarenta",
            "cinquenta",
            "sessenta",
            "setenta",
            "oitenta",
            "noventa",
          ];
          var num2 = numb.substr(0, 1);
          numUsado = arrayNumb3[num2];
          numExtenso.value = numUsado + " e " + arrayNumb1[numb.substr(1, 1)];
        }
      } else {
        if (numb.length === 3 && numb.substr(1, 1) != "1") {
          var arrayNumb4 = [
            "",
            "cento",
            "duzentos",
            "trezentos",
            "quatrocentos",
            "quinhentos",
            "seiscentos",
            "setecentos",
            "oitocentos",
            "novecentos",
          ];
          var num3 = numb.substr(0, 1);
          numUsado = arrayNumb4[num3];
          numExtenso.value =
            numUsado +
            " e " +
            arrayNumb3[numb.substr(1, 1)] +
            " e " +
            arrayNumb1[numb.substr(2, 1)];

          if (numb.substr(1, 1) == "1") {
            var num3 = numb.substr(0, 1);
            numUsado = arrayNumb4[num3];
            numExtenso.value = numUsado + " e " + arrayNumb2[numb.substr(1, 1)];
          }
        }
      }
    }
  }

  var num = document.querySelector("#num");
  num.addEventListener("input", conversor);
}

//Criar um if para as exceções
