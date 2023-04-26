var bou = document.getElementsByName("chiffre"),
  container = document.getElementById("resultBox"),
  add = document.getElementById("addition");
//console.log(container.innerText);

bou.forEach((element) => {
  element.addEventListener("click", function () {
    if (container.innerText == 0 && this.innerText != ",") {
      container.innerText = this.innerText;
    } else {
      container.innerText = container.innerText + this.innerText;
    }
  });
});
