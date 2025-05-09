function generateNumber() {
  const min = Math.ceil(document.querySelector(".one").value);
  const max = Math.floor(document.querySelector(".two").value);
  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  document.getElementById("inputs").style.display = "none";
  (document.getElementById(
    "results"
  ).innerHTML = `<h2>Seu Número da Sorte é:<h2/>`),
    (document.getElementById("result").innerHTML = `<h1>🥳 ${result}</h1>`);

  document.getElementById(
    "cat"
  ).innerHTML = `<img src="img/gatinho.gif" alt="gatinho dançando" class="gif" />`;
}
