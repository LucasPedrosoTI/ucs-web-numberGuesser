const target = Math.round(Math.random() * 100);
const num = document.getElementById("numero");
const form = document.getElementById("form");
const hint = document.getElementById("hint");
const reset = document.getElementById("reset");

let attempts = 0;

const isSameNumber = (num, target) => num == target;
const isTargetHigher = (num, target) => target > num;
const isTargetLower = (num, target) => target < num;

reset.onclick = () => location.reload();

form.addEventListener("submit", function (evt) {
  evt.preventDefault();

  if (isTargetHigher(num.value, target)) hint.innerText = "O número é maior";
  if (isTargetLower(num.value, target)) hint.innerText = "O número é menor";

  if (isSameNumber(num.value, target)) {
    let reset = confirm(
      `Parabéns, você acertou! 😄\nTentativas: ${attempts}\nDeseja recomeçar?`
    );

    reset ? location.reload() : (num.readOnly = true);
  }

  attempts++;
});
