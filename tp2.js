// Exercice 1 – Déclaration et manipulation des objets
const etudiants = [
  { id: 1, nom: "Rakoto", filiere: "GL", moyenne: 12 },
  { id: 2, nom: "Rabe", filiere: "IG", moyenne: 9 },
  { id: 3, nom: "Rasoa", filiere: "GL", moyenne: 15 },
  { id: 4, nom: "Ranaivo", filiere: "IG", moyenne: 11 }
];

// 1. Afficher le nom de tous les étudiants
console.log("Noms des étudiants:");
etudiants.forEach(etudiant => console.log(etudiant.nom));

// 2. Utiliser la destructuration pour extraire nom et moyenne
console.log("\nDestructuration nom et moyenne:");
etudiants.forEach(({ nom, moyenne }) => console.log(`Nom: ${nom}, Moyenne: ${moyenne}`));

// Exercice 2 – Manipulation des tableaux (map, filter)
// 1. Utiliser filter() pour afficher les étudiants ayant une moyenne ≥ 10
const admis = etudiants.filter(e => e.moyenne >= 10);
console.log("\nÉtudiants admis (moyenne >= 10):", admis);

// 2. Utiliser map() pour créer un nouveau tableau contenant uniquement les noms des étudiants
const noms = etudiants.map(e => e.nom);
console.log("\nNoms des étudiants:", noms);

// 3. Ajouter 1 point à toutes les moyennes (sans modifier le tableau original)
const moyennesAugmentees = etudiants.map(e => ({ ...e, moyenne: e.moyenne + 1 }));
console.log("\nMoyennes augmentées de 1 point:", moyennesAugmentees);

// Exercice 3 – Fonctions fléchées et template literals
// 1. Créer une fonction fléchée afficherEtudiant(etudiant)
const afficherEtudiant = (etudiant) => {
  // 2. Afficher le message suivant à l’aide des template literals :
  // L’étudiant Rakoto de la filière GL a une moyenne de 12
  console.log(`L’étudiant ${etudiant.nom} de la filière ${etudiant.filiere} a une moyenne de ${etudiant.moyenne}`);
};

console.log("\nAffichage des étudiants:");
etudiants.forEach(afficherEtudiant);

// Exercice 4 – Programmation asynchrone (async / await)
// Code fourni
function chargerEtudiants() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(etudiants);
    }, 2000);
  });
}

// 1. Créer une fonction async
async function main() {
  // 4. Gérer les erreurs avec try / catch
  try {
    // 2. Récupérer les étudiants avec await
    const etudiantsCharges = await chargerEtudiants();
    // 3. Afficher la liste après le chargement
    console.log("\nÉtudiants chargés après 2 secondes:", etudiantsCharges);
  } catch (error) {
    console.error("Erreur lors du chargement:", error);
  }
}

// Appeler la fonction async
main();

// Exercice 5 – Calculer la moyenne générale avec reduce()
const moyenneGenerale = etudiants.reduce((sum, e) => sum + e.moyenne, 0) / etudiants.length;
console.log("\nMoyenne générale de la classe:", moyenneGenerale);
