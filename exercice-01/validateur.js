/*
    Nom : Saliji
    Prénom : Dylan
    Classe : I.DA-P2A
    Titre de l'exercice : Exercice 1 - Validateur
    Objectif du fichier : Faire l'exercice.
*/

"use strict"

console.error("Exercice 1");

const form = document.getElementById("monForm");
const saisi_mdp_input = document.getElementById("saisiMdp");
const submit = document.getElementById("formEnvoyer");
const messageAfficher = document.getElementById("message");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const saisi_mdp = saisi_mdp_input.value;

    const tableauCaractereSpeciaux = ["!", "@", "#", "$", "%", "^", "&", "*"]
    let longueurMotDePasse = false;
    let majusculeMotDePasse = false;
    let minusculeMotDePasse = false;
    let chiffreMotDePasse = false;
    let caracSpecMotDePasse = false;

    for (let i = 0; i < saisi_mdp.length; i++) {
        if (saisi_mdp.length >= 8) {
            longueurMotDePasse = true;
        }

        if (saisi_mdp[i] >= 'A' && saisi_mdp[i] <= 'Z') {
            majusculeMotDePasse = true;
        }

        if (saisi_mdp[i] >= 'a' && saisi_mdp[i] <= 'z') {
            minusculeMotDePasse = true;
        }

        if (saisi_mdp[i] >= '0' && saisi_mdp[i] <= '9') {
            chiffreMotDePasse = true;
        }

        if (saisi_mdp.includes(tableauCaractereSpeciaux[i])) {
            caracSpecMotDePasse = true;
        }
    }

    if (!longueurMotDePasse) {
        messageAfficher.textContent = "Le mot de passe est trop court, il doit faire au minimum 8 caractères.\r\n";
        messageAfficher.className = "alert alert-danger";
    }

    else if (!majusculeMotDePasse) {
        messageAfficher.textContent = "Le mot de passe est invalide, il doit contenir au moins une majuscule.\r\n";
        messageAfficher.className = "alert alert-danger";
    }

    else if (!minusculeMotDePasse) {
        messageAfficher.textContent = "Le mot de passe est invalide, il doit contenir au moins une minuscule.\r\n";
        messageAfficher.className = "alert alert-danger";
    }

    else if (!chiffreMotDePasse) {
        messageAfficher.textContent = "Le mot de passe est invalide, il doit contenir au moins un chiffre.\r\n";
        messageAfficher.className = "alert alert-danger";
    }

    else if (!caracSpecMotDePasse) {
        messageAfficher.textContent = "Le mot de passe est invalide, il doit contenir au moins un caractère spécial. (!, @, #, $, %, ^, &, *) \r\n";
        messageAfficher.className = "alert alert-danger";
    }

    if (longueurMotDePasse &&
        majusculeMotDePasse &&
        minusculeMotDePasse &&
        chiffreMotDePasse &&
        caracSpecMotDePasse) {
        messageAfficher.textContent = "Votre mot de passe est valide.";
        messageAfficher.className = "alert alert-success";
    }
})