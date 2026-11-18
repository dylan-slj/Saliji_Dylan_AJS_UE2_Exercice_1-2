/*
    Nom : Saliji
    Prénom : Dylan
    Classe : I.DA-P2A
    Titre de l'exercice : Exercice 2 - Devinettes
    Objectif du fichier : Faire l'exercice.
*/

"use strict"

console.error("Exercice 2");

const form = document.getElementById("monForm");
const plageForm = document.getElementById("idPlage");
const essaisForm = document.getElementById("idEssais");
const propositionForm = document.getElementById("idProposition");
const submit = document.getElementById("formEnvoyer");
const messageAfficher = document.getElementById("message");

let plageValide = false;
let essaisValide = false;
let propositionValide = false;

let nombreRandom = null;

function genererNombreAleatoire(min, max) {
    let nbrRandom = ((Math.random() * max) + min);
    return nbrRandom;
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    messageAfficher.textContent = "";
    messageAfficher.className = "";


    let essais = parseInt(essaisForm.value);
    let proposition = parseInt(propositionForm.value);
    const plage = parseInt(plageForm.value);

    if (plage >= 1 && plage <= 100) {
        plageValide = true;
    }
    else {
        messageAfficher.textContent = "Plage invalide. (1-100)";
        messageAfficher.className = "alert alert-danger";
    }

    if (essais >= 1 && essais <= 100) {
        essaisValide = true;
    }
    else {
        essaisValide = false;
    }

    if (proposition >= 1 && proposition <= 100) {
        propositionValide = true;
    }
    else {
        messageAfficher.textContent = "Le nombre saisi doit être entre 1 et 100.";
        messageAfficher.className = "alert alert-warning";
    }

    if (plageValide && essaisValide && propositionValide) {

        if (nombreRandom === null) {
            nombreRandom = Math.floor(genererNombreAleatoire(1, plage));
            console.log(nombreRandom);
        }

        if (proposition === nombreRandom) {
            messageAfficher.textContent = "Vous avez trouvé le nombre !";
            messageAfficher.className = "alert alert-success";
            nombreRandom = null;
            essaisForm.value = 0;
        }
        else {
            essais--;
            essaisForm.value = essais;

            if (proposition < nombreRandom) {
                messageAfficher.textContent = "Plus grand !";
                messageAfficher.className = "alert alert-info";
            }
            else if (proposition > nombreRandom) {
                messageAfficher.textContent = "Plus petit !";
                messageAfficher.className = "alert alert-info";
            }

            messageAfficher.textContent += " Courage, il vous reste encore " + essais + " tentative(s)";
            messageAfficher.className = "alert alert-primary";

            if (proposition < 1 || proposition > 100) {
                messageAfficher.textContent = "Le nombre saisi doit être entre 1 et 100.";
                messageAfficher.className = "alert alert-warning";
            }

            if (essais <= 0) {
                messageAfficher.textContent = "Vous n'avez pas trouvé le nombre !";
                messageAfficher.className = "alert alert-danger";
                nombreRandom = null;
            }
        }
    }
})