let pronombres = ["the", "our"];
let adjetivos = ["great", "big"];
let sustantivos = ["jogger", "racoon"];
let dominio = [".com", ".net", ".es"];

let elementosConcatenados = [];
for (let i = 0; i < pronombres.length; i++) {
  for (let x = 0; x < adjetivos.length; x++) {
    for (let z = 0; z < sustantivos.length; z++) {
      for (let b = 0; b < dominio.length; b++) {
        elementosConcatenados.push(
          pronombres[i] + adjetivos[x] + sustantivos[z] + dominio[b]
        );
      }
    }
  }
}
console.log(elementosConcatenados);
