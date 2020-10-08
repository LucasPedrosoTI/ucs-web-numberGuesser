const form = document.getElementById("form");
const fatorial = document.getElementById("fatorial");
const somaFat = document.getElementById("somaFat");
const num = document.getElementById("numero");

form.addEventListener("submit", function (evt) {
  evt.preventDefault();

  fatorial.value = calcularFatorial(num.value);
  somaFat.value = calcularSomaFat(num.value);
});

function calcularFatorial(num) {
  return num > 1 ? num * calcularFatorial(num - 1) : 1;
}

function calcularSomaFat(num) {
  num = parseInt(num);
  return num > 1 ? num + calcularSomaFat(num - 1) : 1;
}
