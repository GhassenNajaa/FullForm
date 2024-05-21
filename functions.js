function ExprRegNomOuPrenom(ch) {
    var er1 = /^[A-Za-z]+$/;
    var er2 = /^[A-Za-z]+(\-[A-Za-z]+)*$/;
    var er3 = /^\s*[A-Za-z]+(\-[A-Za-z]+)*(\s+[A-Za-z]+(\-[A-Za-z]+)*)*\s*$/;
    return er3.test(ch);
}

function NomCorrect() {
    nom = document.getElementById("nom").value;
    return ExprRegNomOuPrenom(nom);
}

function PrenomCorrect() {
    prenom = document.getElementById("prenom").value;
    return ExprRegNomOuPrenom(prenom);
}

function JourCorrect() {
    var er = /^\d\d?$/;
    jour = document.getElementById("jour").value;
    if (er.test(jour)) {
        return (eval(jour) >= 1) && (eval(jour) <= 31);
    } else return false;
}

function MoisCorrect() {
    var er = /^\d\d?$/;
    mois = document.getElementById("mois").value;
    if (er.test(mois)) {
        return (eval(mois) >= 1) && (eval(mois) <= 12);
    } else return false;
}

function AnneeCorrecte() {
    var er = /^\d{4}$/;
    annee = document.getElementById("annee").value;
    return er.test(annee);
}

function Verifier() {
    if (!NomCorrect()) {
        alert("Nom incorrect!");
        return false;
    }
    if (!PrenomCorrect()) {
        alert("Prenom incorrect!");
        return false;
    }
    if (!JourCorrect()) {
        alert("Jour incorrect!");
        return false;
    }
    if (!MoisCorrect()) {
        alert("Mois incorrect!");
        return false;
    }
    if (!AnneeCorrecte()) {
        alert("Année incorrecte!");
        return false;
    }
    return true;
}

function FormerPhrase() {
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    var mr = document.getElementById("H").checked;
    var jour = document.getElementById("jour").value;
    var mois = document.getElementById("mois").value;
    var annee = document.getElementById("annee").value;
    var IndexLieu = document.getElementById("Lieu").selectedIndex;
    var Lieu = document.getElementById("Lieu").options[IndexLieu].value;
    var SansEmploi = document.getElementById("SansEmploi").checked;
    var phrase = "";
    if (mr) {
        phrase = "Monsieur ";
    } else phrase = "Madame ";
    phrase = phrase + " " + nom + " " + prenom;
    if (mr) {
        phrase = phrase + ", né le ";
    } else phrase = phrase + ", née le ";
    phrase = phrase + jour + "/" + mois + "/" + annee;
    phrase = phrase + " à " + Lieu;
    if (SansEmploi) phrase = phrase + ", actuellement sans emploi";
    document.getElementById("DonneesSaisies").value = phrase;
}
