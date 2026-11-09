function inverserChaine(chaine) {
  let resultat = "";
  for (let i = chaine.length - 1; i >= 0; i--) {
    resultat = resultat + chaine[i];
  }
  return resultat;
}

function compterCaracteres(chaine) {
  return chaine.length;
}

function majusculeChaqueMot(phrase) {
  let mots = phrase.split(" ");
  let resultat = [];
  for (let i = 0; i < mots.length; i++) {
    let mot = mots[i];
    let nouveauMot = mot[0].toUpperCase() + mot.slice(1);
    resultat.push(nouveauMot);
  }
  return resultat.join(" ");
}

function trouverMax(tableau) {
  let max = tableau[0];
  for (let i = 1; i < tableau.length; i++) {
    if (tableau[i] > max) {
      max = tableau[i];
    }
  }
  return max;
}

function trouverMin(tableau) {
  let min = tableau[0];
  for (let i = 1; i < tableau.length; i++) {
    if (tableau[i] < min) {
      min = tableau[i];
    }
  }
  return min;
}

function sommeTableau(tableau) {
  let somme = 0;
  for (let i = 0; i < tableau.length; i++) {
    somme = somme + tableau[i];
  }
  return somme;
}

function filtrerTableau(tableau, condition) {
  let resultat = [];
  for (let i = 0; i < tableau.length; i++) {
    if (condition(tableau[i])) {
      resultat.push(tableau[i]);
    }
  }
  return resultat;
}

function estPair(nombre) {
  return nombre % 2 === 0;
}

function factorielle(n) {
  let resultat = 1;
  for (let i = 1; i <= n; i++) {
    resultat = resultat * i;
  }
  return resultat;
}

function estPremier(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function fibonacci(nombreDeTermes) {
  let suite = [0, 1];
  for (let i = 2; i < nombreDeTermes; i++) {
    let suivant = suite[i - 1] + suite[i - 2];
    suite.push(suivant);
  }
  return suite.slice(0, nombreDeTermes);
}

console.log(inverserChaine("Bonjour"));
console.log(compterCaracteres("Bonjour Dakar"));
console.log(majusculeChaqueMot("bienvenue a gomycode"));

let nombres = [7, 15, 32, 9, 2, 11];
console.log(trouverMax(nombres));
console.log(trouverMin(nombres));
console.log(sommeTableau(nombres));
console.log(filtrerTableau(nombres, estPair));

console.log(factorielle(5));
console.log(estPremier(7));
console.log(estPremier(10));
console.log(fibonacci(10));