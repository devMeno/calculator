var bou = document.getElementsByName("chiffre"),
  operator = document.getElementsByName("operateur"),
  container = document.getElementById("resultBox"),
  result = document.getElementById("resultat");

console.log(operator);

/*var tab = container.innerText.split("");
console.log(tab);*/

bou.forEach((element) => {
  element.addEventListener("click", function () {
    if (container.innerText == 0 && this.innerText != ",") {
      container.innerText = this.innerText;
    } else {
      container.innerText = container.innerText + this.innerText;
    }
  });
});

operator.forEach((element) => {
  element.addEventListener("click", function () {
    if (container.innerText != 0) {
      container.innerText = container.innerText + " " + this.innerText + " ";
    }
  });
});

function calculerResultat() {
  let contenu = container.innerText;
  let princaipalTab = contenu.split(" ");

  princaipalTab.for (let index = 0, index < princaipalTab.length; index++) {
    if(index%2 == 0){
      parseFloat(princaipalTab[index]);
      console.log(parseFloat(princaipalTab[index]))
    }
  }
}

calculerResultat();
/*var contenu = container.innerText;
console.log(contenu.split(" "));*/
