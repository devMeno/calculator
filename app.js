//Création des variables pour poivoir manipuler chaque type de bouton

var bou = document.getElementsByName("chiffre"),
  operator = document.getElementsByName("operateur"),
  container = document.getElementById("resultBox"),
  result = document.getElementById("resultat"),
  deleteAll = document.getElementById("deleteAll");

console.log(operator);

//Afficher le chiffre cliqué par l'utilisateur

bou.forEach((element) => {
  element.addEventListener("click", function () {
    if (container.innerText == 0 && this.innerText != ",") {
      container.innerText = this.innerText;
    } else {
      container.innerText = container.innerText + this.innerText;
    }
  });
});

//Afficher le chiffre cliqué par l'utilisateur

operator.forEach((element) => {
  element.addEventListener("click", function () {
    if (container.innerText != 0) {
      container.innerText = container.innerText + this.innerText;
    }
  });
});

//Supprimer tout ce qui est entré à l'aide de la touche "CA"

deleteAll.addEventListener("click", function () {
  container.innerText = 0;
});

//Afficher le résultat en cliquant sur "=" , si la syntaxe est bonne...sinon alerter l'utilisateur!

result.addEventListener("click", function () {
  let reponse;
  reponse = eval(container.innerText);
  container.innerText = reponse;
});

//En cas d'erreur , afficher un message

window.addEventListener("error", function () {
  container.innerText = "Syntax error";
});
